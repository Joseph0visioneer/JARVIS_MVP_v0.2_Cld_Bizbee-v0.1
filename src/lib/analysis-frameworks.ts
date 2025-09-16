import { AnalysisFramework } from '@/types/meeting'

export const ANALYSIS_FRAMEWORKS: AnalysisFramework[] = [
  {
    id: 'business-strategy',
    name: 'Business Strategy Analysis',
    description: 'Strategic business insights, goals, and competitive analysis',
    prompts: {
      system: 'You are a senior business strategist analyzing meeting content for strategic insights.',
      user: `Analyze this meeting transcript from a business strategy perspective. Focus on:
      1. Strategic goals and objectives mentioned
      2. Competitive landscape discussions
      3. Market opportunities and threats
      4. Resource allocation decisions
      5. Performance metrics and KPIs

      Provide a structured analysis with clear strategic insights and recommendations.

      Meeting transcript: {transcript}`
    }
  },
  {
    id: 'project-management',
    name: 'Project Management Framework',
    description: 'Project timelines, deliverables, and resource management',
    prompts: {
      system: 'You are an experienced project manager analyzing meeting content for project insights.',
      user: `Analyze this meeting transcript from a project management perspective. Focus on:
      1. Project milestones and deliverables
      2. Timeline and deadline discussions
      3. Resource requirements and allocation
      4. Risk identification and mitigation
      5. Stakeholder responsibilities
      6. Budget considerations

      Provide a clear project status summary with actionable next steps.

      Meeting transcript: {transcript}`
    }
  },
  {
    id: 'customer-insights',
    name: 'Customer Experience Analysis',
    description: 'Customer feedback, satisfaction, and experience improvements',
    prompts: {
      system: 'You are a customer experience specialist analyzing meeting content for customer insights.',
      user: `Analyze this meeting transcript from a customer experience perspective. Focus on:
      1. Customer feedback and pain points
      2. Service quality discussions
      3. Customer satisfaction metrics
      4. User experience improvements
      5. Customer journey touchpoints
      6. Support and service issues

      Provide insights on customer needs and experience enhancement opportunities.

      Meeting transcript: {transcript}`
    }
  },
  {
    id: 'operational-efficiency',
    name: 'Operational Efficiency Review',
    description: 'Process optimization, workflow improvements, and efficiency metrics',
    prompts: {
      system: 'You are an operations analyst focused on process improvement and efficiency.',
      user: `Analyze this meeting transcript from an operational efficiency perspective. Focus on:
      1. Process inefficiencies and bottlenecks
      2. Workflow optimization opportunities
      3. Resource utilization and productivity
      4. Quality control and standards
      5. Technology and automation potential
      6. Cost reduction initiatives

      Provide recommendations for operational improvements and efficiency gains.

      Meeting transcript: {transcript}`
    }
  },
  {
    id: 'team-dynamics',
    name: 'Team Dynamics & Communication',
    description: 'Team collaboration, communication patterns, and organizational insights',
    prompts: {
      system: 'You are an organizational psychologist analyzing team dynamics and communication patterns.',
      user: `Analyze this meeting transcript from a team dynamics perspective. Focus on:
      1. Communication effectiveness and patterns
      2. Team collaboration and engagement
      3. Leadership and decision-making styles
      4. Conflict resolution and consensus building
      5. Knowledge sharing and learning
      6. Cultural and interpersonal dynamics

      Provide insights on team effectiveness and recommendations for improvement.

      Meeting transcript: {transcript}`
    }
  }
]

export function getFrameworkById(id: string): AnalysisFramework | undefined {
  return ANALYSIS_FRAMEWORKS.find(framework => framework.id === id)
}

export function getAllFrameworks(): AnalysisFramework[] {
  return ANALYSIS_FRAMEWORKS
}