# JARVIS MVP v0.2 - AI Meeting Analyzer

Enhanced AI-powered meeting analysis platform combining the best features from JARVIS MVP v0.1 and BizBee Meeting Analyzer.

## 🚀 Features

### From JARVIS MVP v0.1
- **Modern Next.js Interface** - Clean, responsive UI built with Next.js 15 and TypeScript
- **File Upload** - Drag & drop support for meeting transcripts (.txt, .md, .srt)
- **User Dashboard** - Personalized dashboard with meeting statistics and insights
- **OpenAI Integration** - Powered by GPT-3.5-turbo for intelligent analysis

### From BizBee Meeting Analyzer
- **5 Professional Analysis Frameworks**:
  - 📈 **Business Strategy Analysis** - Strategic goals, competitive insights
  - 📋 **Project Management Framework** - Timelines, deliverables, resources
  - 👥 **Customer Experience Analysis** - Feedback, satisfaction, improvements
  - ⚡ **Operational Efficiency Review** - Process optimization, workflows
  - 🤝 **Team Dynamics & Communication** - Collaboration patterns, culture

### Enhanced v0.2 Features
- **Combined Analysis Power** - Multiple frameworks per meeting
- **Advanced Sentiment Analysis** - Emotion detection across discussions
- **Structured Insights** - Key points, action items, decisions extraction
- **Real-time Processing** - Fast analysis with progress tracking

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5.3, React 19, TypeScript
- **Styling**: Tailwind CSS 4.0
- **AI**: OpenAI GPT-3.5-turbo API
- **File Handling**: react-dropzone
- **UI Components**: Custom components with shadcn/ui design system

## 🏁 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Joseph0visioneer/JARVIS_MVP_v0.2_Cld_Bizbee-v0.1.git
   cd JARVIS_MVP_v0.2_Cld_Bizbee-v0.1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

### 1. Upload Meeting Transcript
- Go to the "Analyze" page
- Drag & drop or select your meeting file (.txt, .md, .srt)
- Supported formats: plain text, markdown, subtitle files

### 2. Select Analysis Frameworks
Choose from 5 professional frameworks:
- **Business Strategy** - For strategic planning meetings
- **Project Management** - For project updates and planning
- **Customer Experience** - For customer feedback sessions
- **Operational Efficiency** - For process improvement meetings
- **Team Dynamics** - For team retrospectives and communication

### 3. Get AI-Powered Insights
- View structured analysis results
- Extract key points, action items, and decisions
- Monitor sentiment and team dynamics
- Save and track meeting analytics over time

## 🎯 Use Cases

- **Business Meetings** - Strategic planning, quarterly reviews
- **Project Management** - Stand-ups, sprint planning, retrospectives
- **Customer Calls** - Feedback sessions, support calls, sales meetings
- **Team Meetings** - All-hands, department meetings, 1:1s
- **Training Sessions** - Workshops, knowledge sharing, onboarding

## 🔧 Configuration

### Environment Variables
```bash
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional (for future features)
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

### Supported File Types
- `.txt` - Plain text meeting notes
- `.md` - Markdown formatted documents
- `.srt` - Subtitle/transcript files from recordings

## 📊 Analysis Frameworks

### Business Strategy Analysis
Analyzes strategic goals, competitive positioning, market opportunities, and performance metrics.

### Project Management Framework
Tracks project milestones, timelines, resource allocation, risks, and deliverables.

### Customer Experience Analysis
Evaluates customer feedback, satisfaction levels, pain points, and improvement opportunities.

### Operational Efficiency Review
Identifies process bottlenecks, workflow optimizations, and efficiency improvements.

### Team Dynamics & Communication
Assesses team collaboration, communication patterns, and organizational culture.

## 🚧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── analyze/        # Analysis page
│   └── dashboard/      # Dashboard page
├── components/         # React components
│   ├── ui/            # Base UI components
│   ├── meeting/       # Meeting-specific components
│   └── navigation.tsx # Navigation component
├── lib/               # Utility libraries
│   ├── analysis-frameworks.ts
│   ├── openai.ts
│   └── utils.ts
└── types/             # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JARVIS MVP v0.1** - Foundation UI and user experience
- **BizBee Meeting Analyzer** - Professional analysis frameworks
- **OpenAI** - AI-powered analysis capabilities
- **Vercel** - Deployment and hosting platform

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Review the example files

---

**Version**: 0.2.0
**Last Updated**: January 2025
**Status**: MVP Ready for Testing