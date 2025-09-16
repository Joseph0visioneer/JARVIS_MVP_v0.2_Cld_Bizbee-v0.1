import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface AnalysisResult {
  summary: string
  keyPoints: string[]
  actionItems: string[]
  decisions: string[]
  participants: string[]
  sentiment: 'positive' | 'neutral' | 'negative'
  topics: string[]
}

export async function analyzeMeetingWithFramework(
  transcript: string,
  systemPrompt: string,
  userPrompt: string
): Promise<AnalysisResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: userPrompt.replace('{transcript}', transcript)
        }
      ],
      temperature: 0.3,
      max_tokens: 2000,
    })

    const result = completion.choices[0]?.message?.content

    if (!result) {
      throw new Error('No response from OpenAI')
    }

    // Parse the structured response
    return parseAnalysisResponse(result)
  } catch (error) {
    console.error('Error analyzing meeting:', error)
    throw new Error('Failed to analyze meeting content')
  }
}

function parseAnalysisResponse(response: string): AnalysisResult {
  // This is a simplified parser - in production, you'd want more robust parsing
  const defaultResult: AnalysisResult = {
    summary: '',
    keyPoints: [],
    actionItems: [],
    decisions: [],
    participants: [],
    sentiment: 'neutral',
    topics: []
  }

  try {
    // Try to extract structured information from the response
    defaultResult.summary = response.slice(0, 500) // First 500 chars as summary

    // Extract bullet points and lists
    const lines = response.split('\n')
    const keyPointsSection = lines.filter(line =>
      line.includes('•') || line.includes('-') || line.includes('*')
    ).slice(0, 5)

    defaultResult.keyPoints = keyPointsSection.map(line =>
      line.replace(/[•\-*]\s*/, '').trim()
    ).filter(point => point.length > 0)

    // Simple sentiment analysis based on keywords
    const positiveWords = ['good', 'great', 'excellent', 'positive', 'success', 'achievement']
    const negativeWords = ['bad', 'poor', 'negative', 'problem', 'issue', 'concern']

    const lowerResponse = response.toLowerCase()
    const positiveCount = positiveWords.filter(word => lowerResponse.includes(word)).length
    const negativeCount = negativeWords.filter(word => lowerResponse.includes(word)).length

    if (positiveCount > negativeCount) {
      defaultResult.sentiment = 'positive'
    } else if (negativeCount > positiveCount) {
      defaultResult.sentiment = 'negative'
    }

    return defaultResult
  } catch (error) {
    console.error('Error parsing analysis response:', error)
    return {
      ...defaultResult,
      summary: response.slice(0, 500)
    }
  }
}

export { openai }