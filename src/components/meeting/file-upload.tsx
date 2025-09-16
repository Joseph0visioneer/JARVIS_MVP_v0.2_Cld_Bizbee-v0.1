'use client'

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FileUploadProps {
  onFileSelect: (file: File) => void
  isLoading?: boolean
}

export function FileUpload({ onFileSelect, isLoading = false }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0])
    }
  }, [onFileSelect])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'text/markdown': ['.md'],
      'application/x-subrip': ['.srt']
    },
    maxFiles: 1,
    disabled: isLoading
  })

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Meeting Transcript</CardTitle>
        <CardDescription>
          Upload your meeting transcript in text, markdown, or SRT format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300'}
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
          `}
        >
          <input {...getInputProps()} />

          <div className="space-y-4">
            <div className="text-4xl">📄</div>

            {isDragActive ? (
              <p className="text-lg text-primary">Drop the file here...</p>
            ) : (
              <div className="space-y-2">
                <p className="text-lg">
                  Drag & drop your meeting file here, or click to select
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports: .txt, .md, .srt files
                </p>
              </div>
            )}

            <Button variant="outline" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Select File'}
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h4 className="font-semibold">Supported File Types:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>.txt</strong> - Plain text meeting notes</li>
            <li>• <strong>.md</strong> - Markdown formatted documents</li>
            <li>• <strong>.srt</strong> - Subtitle/transcript files</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}