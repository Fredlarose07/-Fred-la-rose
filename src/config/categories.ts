import { Brain, Palette, Code, BookOpen } from '@phosphor-icons/react'

export type Grade = 'Iron' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'

export interface Category {
  id: number
  name: string
  icon: any
  notesCount: number
  lastUpdated: string
  grade: Grade
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Philosophie",
    icon: Brain,
    notesCount: 24,
    lastUpdated: "2024-03-01",
    grade: "Silver"
  },
  {
    id: 2,
    name: "Design",
    icon: Palette,
    notesCount: 67,
    lastUpdated: "2024-03-10",
    grade: "Gold"
  },
  {
    id: 3,
    name: "Développement",
    icon: Code,
    notesCount: 112,
    lastUpdated: "2024-03-15",
    grade: "Platinum"
  },
  {
    id: 4,
    name: "Lectures",
    icon: BookOpen,
    notesCount: 8,
    lastUpdated: "2024-03-05",
    grade: "Bronze"
  },
]