'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  // In a real app, this would come from your database/API
  const mockStats = {
    totalMeetings: 12,
    totalAnalyses: 28,
    avgSentiment: 'positive' as const,
    lastAnalysis: '2 hours ago'
  }

  const recentAnalyses = [
    {
      id: '1',
      fileName: 'Q4-planning-meeting.txt',
      frameworks: ['Business Strategy', 'Project Management'],
      sentiment: 'positive' as const,
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      fileName: 'customer-feedback-session.md',
      frameworks: ['Customer Experience', 'Team Dynamics'],
      sentiment: 'neutral' as const,
      createdAt: '2024-01-14T14:15:00Z'
    },
    {
      id: '3',
      fileName: 'operations-review.srt',
      frameworks: ['Operational Efficiency'],
      sentiment: 'negative' as const,
      createdAt: '2024-01-13T09:45:00Z'
    }
  ]

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600'
      case 'negative': return 'text-red-600'
      default: return 'text-yellow-600'
    }
  }

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '😊'
      case 'negative': return '😞'
      default: return '😐'
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Welcome back! Here's your meeting analysis overview.
            </p>
          </div>
          <Link href="/analyze">
            <Button size="lg">
              New Analysis
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalMeetings}</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Analyses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalAnalyses}</div>
              <p className="text-xs text-muted-foreground">+7 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold capitalize ${getSentimentColor(mockStats.avgSentiment)}`}>
                {getSentimentEmoji(mockStats.avgSentiment)} {mockStats.avgSentiment}
              </div>
              <p className="text-xs text-muted-foreground">Across all meetings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Last Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.lastAnalysis}</div>
              <p className="text-xs text-muted-foreground">Q4 planning meeting</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Analyses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>
              Your latest meeting analyses and their results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{analysis.fileName}</h4>
                    <div className="flex gap-2 mt-1">
                      {analysis.frameworks.map((framework) => (
                        <span
                          key={framework}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {new Date(analysis.createdAt).toLocaleDateString()} at{' '}
                      {new Date(analysis.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`text-lg ${getSentimentColor(analysis.sentiment)}`}>
                      {getSentimentEmoji(analysis.sentiment)}
                    </div>
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {recentAnalyses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">No analyses yet</h3>
                <p className="text-muted-foreground mb-4">
                  Upload your first meeting transcript to get started
                </p>
                <Link href="/analyze">
                  <Button>Start First Analysis</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">📤 Upload & Analyze</CardTitle>
              <CardDescription>
                Upload a new meeting transcript for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/analyze">
                <Button className="w-full">Upload Meeting</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">📈 Analytics</CardTitle>
              <CardDescription>
                View detailed analytics and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/analytics">
                <Button variant="outline" className="w-full">View Analytics</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">⚙️ Settings</CardTitle>
              <CardDescription>
                Manage your preferences and API keys
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/settings">
                <Button variant="outline" className="w-full">Settings</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}