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

        {/* Analysis Frameworks Detailed */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📊 Professional Analysis Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              JARVIS goes beyond basic meeting summaries. Choose from 5 specialized frameworks that provide
              deep, actionable insights tailored to your specific meeting type and objectives.
            </p>
          </div>

          <div className="space-y-8">
            {/* Business Strategy Analysis */}
            <div className="p-8 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Business Strategy Analysis</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Transforms strategic discussions into actionable business intelligence
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🎯 What it analyzes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Strategic goals and OKRs</li>
                    <li>• Competitive landscape discussions</li>
                    <li>• Market opportunities and threats</li>
                    <li>• Resource allocation decisions</li>
                    <li>• Performance metrics and KPIs</li>
                    <li>• Revenue and growth strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">💼 Perfect for:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Quarterly business reviews</li>
                    <li>• Strategic planning sessions</li>
                    <li>• Board meetings</li>
                    <li>• Investment discussions</li>
                    <li>• Market analysis meetings</li>
                    <li>• Competitive intelligence briefings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Management Framework */}
            <div className="p-8 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Project Management Framework</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Extracts project status, timelines, and deliverables for clear execution tracking
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🎯 What it analyzes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Project milestones and deadlines</li>
                    <li>• Resource requirements and allocation</li>
                    <li>• Risk identification and mitigation</li>
                    <li>• Stakeholder responsibilities</li>
                    <li>• Budget discussions and constraints</li>
                    <li>• Dependencies and blockers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">💼 Perfect for:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Sprint planning meetings</li>
                    <li>• Project kickoffs</li>
                    <li>• Status update calls</li>
                    <li>• Retrospectives</li>
                    <li>• Stakeholder reviews</li>
                    <li>• Resource planning sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Experience Analysis */}
            <div className="p-8 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Customer Experience Analysis</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Converts customer feedback into actionable improvements and satisfaction insights
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🎯 What it analyzes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Customer pain points and complaints</li>
                    <li>• Service quality feedback</li>
                    <li>• User experience journey issues</li>
                    <li>• Feature requests and suggestions</li>
                    <li>• Satisfaction scores and metrics</li>
                    <li>• Support escalation patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">💼 Perfect for:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Customer feedback sessions</li>
                    <li>• User research interviews</li>
                    <li>• Support team reviews</li>
                    <li>• Product feedback meetings</li>
                    <li>• Client account reviews</li>
                    <li>• Customer success check-ins</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Efficiency Review */}
            <div className="p-8 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Operational Efficiency Review</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Identifies process bottlenecks and optimization opportunities for improved productivity
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🎯 What it analyzes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Process inefficiencies and bottlenecks</li>
                    <li>• Workflow optimization opportunities</li>
                    <li>• Resource utilization patterns</li>
                    <li>• Quality control issues</li>
                    <li>• Automation potential areas</li>
                    <li>• Cost reduction initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">💼 Perfect for:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Process improvement meetings</li>
                    <li>• Operations reviews</li>
                    <li>• Workflow optimization sessions</li>
                    <li>• Quality assurance discussions</li>
                    <li>• Cost optimization meetings</li>
                    <li>• Automation planning calls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team Dynamics & Communication */}
            <div className="p-8 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Team Dynamics & Communication</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Analyzes team interactions and communication patterns for better collaboration
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🎯 What it analyzes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Communication effectiveness patterns</li>
                    <li>• Team collaboration quality</li>
                    <li>• Leadership and decision-making styles</li>
                    <li>• Conflict resolution approaches</li>
                    <li>• Knowledge sharing behaviors</li>
                    <li>• Cultural and interpersonal dynamics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">💼 Perfect for:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Team retrospectives</li>
                    <li>• All-hands meetings</li>
                    <li>• Performance reviews</li>
                    <li>• Conflict resolution sessions</li>
                    <li>• Culture building meetings</li>
                    <li>• Cross-team collaboration calls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Example Results */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">📋 Sample Analysis Results</h3>
            <div className="grid md:grid-cols-2 gap-8">

              {/* Business Strategy Example */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📈</span>
                  <h4 className="font-semibold text-lg">Business Strategy Output</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-700">Strategic Goals Identified:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Increase market share by 15% in Q2</li>
                      <li>• Launch new product line by August</li>
                      <li>• Establish partnerships in European market</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-blue-700">Key Decisions:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Allocate $2M budget for marketing campaign</li>
                      <li>• Hire 5 additional sales representatives</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-blue-700">Risk Assessment:</strong>
                    <p className="ml-4 mt-1 text-muted-foreground">Moderate risk identified in supply chain dependencies</p>
                  </div>
                </div>
              </div>

              {/* Project Management Example */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📋</span>
                  <h4 className="font-semibold text-lg">Project Management Output</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-green-700">Action Items:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• John to complete API documentation by March 15</li>
                      <li>• Sarah to review design mockups by March 10</li>
                      <li>• Team to test integration by March 20</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-green-700">Blockers:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Waiting for third-party API access</li>
                      <li>• Design approval pending from stakeholders</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-green-700">Timeline:</strong>
                    <p className="ml-4 mt-1 text-muted-foreground">Sprint delivery scheduled for March 25, on track</p>
                  </div>
                </div>
              </div>

              {/* Customer Experience Example */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👥</span>
                  <h4 className="font-semibold text-lg">Customer Experience Output</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-purple-700">Pain Points:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Checkout process taking too long (avg 3.2 mins)</li>
                      <li>• Search functionality not returning relevant results</li>
                      <li>• Mobile app crashes on iOS 15+</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-purple-700">Sentiment:</strong>
                    <p className="ml-4 mt-1 text-muted-foreground">Overall positive (72%), concerns about speed</p>
                  </div>
                  <div>
                    <strong className="text-purple-700">Recommendations:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Implement one-click checkout</li>
                      <li>• Upgrade search algorithm</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Dynamics Example */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🤝</span>
                  <h4 className="font-semibold text-lg">Team Dynamics Output</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-orange-700">Communication Patterns:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• High engagement from development team</li>
                      <li>• Design team needs more speaking time</li>
                      <li>• Clear leadership from project manager</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-orange-700">Collaboration Score:</strong>
                    <p className="ml-4 mt-1 text-muted-foreground">8.5/10 - Strong team cohesion observed</p>
                  </div>
                  <div>
                    <strong className="text-orange-700">Recommendations:</strong>
                    <ul className="ml-4 mt-1 text-muted-foreground">
                      <li>• Schedule design review sessions</li>
                      <li>• Implement rotating meeting facilitation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Meetings?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Choose from multiple frameworks or combine them for comprehensive analysis
            </p>
            <Link href="/analyze">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Analyzing Now →
              </Button>
            </Link>
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