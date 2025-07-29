import { TemplateCard, type TemplateCardProps } from "./template-card"

const templates: TemplateCardProps[] = [
  {
    id: "1",
    title: "Basic Pool Integration",
    description: "Simple lending pool using Blend API",
    difficulty: "Beginner",
    technologies: ["Rust"],
    tags: ["pool", "lending", "basic"],
    stars: 245,
    forks: 67,
  },
  {
    id: "2",
    title: "Multi-Pool Dashboard",
    description: "Real-time dashboard for managing multiple lending pools",
    difficulty: "Intermediate",
    technologies: ["React", "Rust"],
    tags: ["dashboard", "multi-pool", "real-time"],
    stars: 189,
    forks: 43,
  },
  {
    id: "3",
    title: "Automated Risk Management",
    description: "Advanced risk assessment and automated pool rebalancing",
    difficulty: "Advanced",
    technologies: ["Rust"],
    tags: ["risk", "automation", "advanced"],
    stars: 156,
    forks: 29,
  },
  {
    id: "4",
    title: "Compliance Reporting",
    description: "Generate compliance reports for regulatory requirements",
    difficulty: "Intermediate",
    technologies: ["Python", "Rust"],
    tags: ["compliance", "reporting", "regulatory"],
    stars: 98,
    forks: 21,
  },
  {
    id: "5",
    title: "Mobile Pool Manager",
    description: "React Native app for mobile pool management",
    difficulty: "Intermediate",
    technologies: ["React Native"],
    tags: ["mobile", "react-native", "management"],
    stars: 134,
    forks: 38,
  },
  {
    id: "6",
    title: "High-Frequency Trading Bot",
    description: "Automated trading bot for pool optimization",
    difficulty: "Expert",
    technologies: ["Rust"],
    tags: ["trading", "bot", "optimization"],
    stars: 267,
    forks: 52,
  },
]

export function ExamplesTemplatesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <TemplateCard key={template.id} {...template} />
      ))}
    </div>
  )
}
