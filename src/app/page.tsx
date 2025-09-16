import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full items-center justify-between text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">
            JARVIS
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Just A Revolutionary Virtual Intelligence System
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Enhanced AI-powered meeting analysis with advanced frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📊 Smart Analysis</h3>
            <p className="text-muted-foreground">
              Advanced AI models analyze your meetings with 5 professional frameworks
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📤 Easy Upload</h3>
            <p className="text-muted-foreground">
              Upload text, SRT, or markdown files with simple drag & drop
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📈 Dashboard</h3>
            <p className="text-muted-foreground">
              Personalized dashboard with meeting statistics and insights
            </p>
          </div>
        </div>

        {/* Analysis Frameworks Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">📊 Analysis Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2">📈 Business Strategy Analysis</h3>
              <p className="text-muted-foreground">
                Strategic business insights, goals, and competitive analysis
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2">📋 Project Management Framework</h3>
              <p className="text-muted-foreground">
                Project timelines, deliverables, and resource management
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2">👥 Customer Experience Analysis</h3>
              <p className="text-muted-foreground">
                Customer feedback, satisfaction, and experience improvements
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2">⚡ Operational Efficiency Review</h3>
              <p className="text-muted-foreground">
                Process optimization, workflow improvements, and efficiency metrics
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">🤝 Team Dynamics & Communication</h3>
              <p className="text-muted-foreground">
                Team collaboration, communication patterns, and organizational insights
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/auth/login">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              View Dashboard
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          <p>v0.2.0 - Combining JARVIS MVP with BizBee Meeting Analysis</p>
        </div>
      </div>
    </main>
  )
}