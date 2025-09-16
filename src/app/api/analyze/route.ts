import { NextRequest, NextResponse } from 'next/server'
import { analyzeMeetingWithFramework } from '@/lib/openai'
import { getFrameworkById } from '@/lib/analysis-frameworks'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    const { transcript, frameworks, fileName } = await request.json()

    if (!transcript || !frameworks || frameworks.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    const analysisResults = []

    // Process each selected framework
    for (const frameworkId of frameworks) {
      const framework = getFrameworkById(frameworkId)

      if (!framework) {
        continue
      }

      try {
        const result = await analyzeMeetingWithFramework(
          transcript,
          framework.prompts.system,
          framework.prompts.user
        )

        analysisResults.push({
          id: uuidv4(),
          frameworkId: framework.id,
          frameworkName: framework.name,
          result,
          createdAt: new Date().toISOString()
        })
      } catch (error) {
        console.error(`Error analyzing with framework ${frameworkId}:`, error)
        // Continue with other frameworks even if one fails
        analysisResults.push({
          id: uuidv4(),
          frameworkId: framework.id,
          frameworkName: framework.name,
          result: {
            summary: 'Analysis failed for this framework',
            keyPoints: [],
            actionItems: [],
            decisions: [],
            participants: [],
            sentiment: 'neutral' as const,
            topics: []
          },
          error: 'Analysis failed',
          createdAt: new Date().toISOString()
        })
      }
    }

    const response = {
      id: uuidv4(),
      fileName,
      transcriptLength: transcript.length,
      analysisResults,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error in analysis API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}