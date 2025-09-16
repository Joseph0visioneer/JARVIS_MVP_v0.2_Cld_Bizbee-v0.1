'use client'

import React, { useState } from 'react'
import { FileUpload } from '@/components/meeting/file-upload'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllFrameworks } from '@/lib/analysis-frameworks'
import { MeetingTranscript, AnalysisFramework } from '@/types/meeting'

export default function AnalyzePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [transcript, setTranscript] = useState<string>('')

  const frameworks = getAllFrameworks()

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file)

    // Read file content
    const content = await file.text()
    setTranscript(content)
  }

  const handleFrameworkToggle = (frameworkId: string) => {
    setSelectedFrameworks(prev =>
      prev.includes(frameworkId)
        ? prev.filter(id => id !== frameworkId)
        : [...prev, frameworkId]
    )
  }

  const handleAnalyze = async () => {
    if (!selectedFile || selectedFrameworks.length === 0) return

    setIsAnalyzing(true)

    try {
      // This would typically make an API call to your backend
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcript: transcript,
          frameworks: selectedFrameworks,
          fileName: selectedFile.name
        }),
      })

      if (response.ok) {
        const result = await response.json()
        // Handle successful analysis
        console.log('Analysis complete:', result)
        // Redirect to results page or show results
      }
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Meeting Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Upload your meeting transcript and choose analysis frameworks
          </p>
        </div>

        {/* File Upload */}
        {!selectedFile && (
          <FileUpload onFileSelect={handleFileSelect} isLoading={isAnalyzing} />
        )}

        {/* File Selected */}
        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle>File Selected</CardTitle>
              <CardDescription>
                {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedFile(null)
                    setTranscript('')
                    setSelectedFrameworks([])
                  }}
                >
                  Change File
                </Button>
                <div className="text-sm text-muted-foreground flex items-center">
                  Preview: {transcript.slice(0, 100)}...
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Framework Selection */}
        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle>Select Analysis Frameworks</CardTitle>
              <CardDescription>
                Choose which professional frameworks to apply to your meeting analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {frameworks.map((framework) => (
                  <div
                    key={framework.id}
                    className={`
                      p-4 border rounded-lg cursor-pointer transition-colors
                      ${selectedFrameworks.includes(framework.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                      }
                    `}
                    onClick={() => handleFrameworkToggle(framework.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`
                        w-4 h-4 rounded border mt-1
                        ${selectedFrameworks.includes(framework.id)
                          ? 'bg-primary border-primary'
                          : 'border-gray-300'
                        }
                      `} />
                      <div className="flex-1">
                        <h4 className="font-semibold">{framework.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedFrameworks.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">
                        {selectedFrameworks.length} framework(s) selected
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Analysis will take approximately {selectedFrameworks.length * 30} seconds
                      </p>
                    </div>
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      size="lg"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}