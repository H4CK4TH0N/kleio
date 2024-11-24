import type { LucideIcon } from "lucide-react";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  Icon?: LucideIcon;
};

export type MarketingConfig = {
  defaultNavbar: NavItem[];
};

export type DashboardConfig = {
  defaultNavbar: NavItem[];
};

type ISO8601DateTime = string;
type UUID = string;

type MoodAspect = {
  mood: string;
  score: number;
}

type MoodGraph = {
  aspects: MoodAspect[];
  timestamp: ISO8601DateTime;
}

type ActionItem = {
  id: UUID;
  description: string;
  assignee: string;
  deadline: ISO8601DateTime;
  status: 'pending' | 'in_progress' | 'completed';
}

type TimelineItem = {
  startTime: ISO8601DateTime;
  endTime: ISO8601DateTime;
  topic: string;
  speaker: string;
}

type ParticipantEngagement = {
  participantId: string;
  speakingTime: number;
  interventionCount: number;
  engagementScore: number;
}

type DecisionNode = {
  id: UUID;
  description: string;
  parentId: UUID | null;
  children: UUID[];
}

type DecisionTree = {
  rootNode: UUID;
  nodes: Record<UUID, DecisionNode>;
}

type TopicCluster = {
  id: UUID;
  name: string;
  keywords: string[];
  relatedTopics: UUID[];
}

type TopicClusters = {
  clusters: TopicCluster[];
}

type SentimentPoint = {
  timestamp: ISO8601DateTime;
  sentiment: number; // Assuming a numerical representation, e.g., -1 to 1
}

type SentimentOverTime = {
  overallSentiment: number;
  sentimentPoints: SentimentPoint[];
}

type Question = {
  id: UUID;
  text: string;
  askedBy: string;
  timestamp: ISO8601DateTime;
  answered: boolean;
}

type ResourceLink = {
  id: UUID;
  url: string;
  title: string;
  type: 'document' | 'website' | 'video' | 'other';
  mentionedAt: ISO8601DateTime;
}
