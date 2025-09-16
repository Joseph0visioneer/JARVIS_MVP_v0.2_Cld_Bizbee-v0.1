export interface MeetingTranscript {
  id: string
  title: string
  content: string
  uploadedAt: Date
  fileName?: string
  fileType: 'text' | 'srt' | 'markdown'
}

export interface AnalysisFramework {
  id: string
  name: string
  description: string
  prompts: {
    system: string
    user: string
  }
}

export interface MeetingAnalysis {
  id: string
  meetingId: string
  framework: string
  result: {
    summary: string
    keyPoints: string[]
    actionItems: string[]
    decisions: string[]
    participants: string[]
    sentiment: 'positive' | 'neutral' | 'negative'
    duration?: string
    topics: string[]
  }
  createdAt: Date
}

export interface AnalysisRequest {
  transcriptId: string
  frameworks: string[]
}