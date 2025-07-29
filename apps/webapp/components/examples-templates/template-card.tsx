"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code, Eye, Download, Star, GitFork } from "lucide-react"

export type Difficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert"

export interface TemplateCardProps {
  id: string
  title: string
  description: string
  difficulty: Difficulty
  technologies: string[]
  tags: string[]
  stars: number
  forks: number
}

const getBadgeVariant = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "Beginner":
      return "secondary"
    case "Intermediate":
      return "default"
    case "Advanced":
      return "destructive"
    case "Expert":
      return "outline"
    default:
      return "secondary"
  }
}

export function TemplateCard({
  title,
  description,
  difficulty,
  technologies,
  tags,
  stars,
  forks,
}: TemplateCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white h-full flex flex-col">
        {/* Icon + Difficulty */}
        <div className="flex items-center justify-between mb-3">
          <Code className="w-8 h-8 text-black" />
          <Badge
            variant={getBadgeVariant(difficulty)}
            className="text-xs px-2 py-0.5 rounded-full"
          >
            {difficulty}
          </Badge>
        </div>

        {/* Title + Description */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-zinc-950 mb-1">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>

        {/* Technologies + Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <p className="text-sm text-gray-500">{technologies.join(" + ")}</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{forks}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Clone
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
