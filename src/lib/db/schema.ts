import {
  pgTable,
  text,
  integer,
  timestamp,
  json,
  real,
  boolean,
} from "drizzle-orm/pg-core";
import type {
  MoodGraph,
  ActionItem,
  TimelineItem,
  ParticipantEngagement,
  DecisionTree,
  TopicClusters,
  SentimentOverTime,
  Question,
  ResourceLink,
} from "@/types";

export const User = pgTable("users", {
  email: text("email").notNull().primaryKey().unique(),

  // metadata
  numberOfMeetings: integer("number_of_meetings").notNull().default(0),
  totalMeetingDuration: real("total_meeting_duration").notNull().default(0),
  averageMeetingDuration: real("average_meeting_duration").notNull().default(0),
  meetingEfficiencyScore: real("total_meeting_efficiency_score")
    .notNull()
    .default(0),
  participants: integer("participants").notNull().default(0),

  // settings
  communicationEmail: boolean("communication_email").notNull().default(true),
  securityEmail: boolean("security_email").notNull().default(true),
  meetingEmail: boolean("meeting_email").notNull().default(true),
});

export const Meeting = pgTable("meetings", {
  id: text("id").notNull().primaryKey().unique(),
  userEmail: text("user_email")
    .notNull()
    .references(() => User.email, { onDelete: "cascade", onUpdate: "cascade" }),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  participants: text("participants").array(),
  processed: boolean("processed").notNull().default(false),

  // metadata
  title: text("title"),
  shortDescription: text("short_description"),
  description: text("description"),
  takeaways: text("takeaways").array(),
  actionItems: json("action_items").$type<ActionItem[]>(),
  moodGraph: json("mood_graph").$type<MoodGraph>(),
  timeline: json("timeline").$type<TimelineItem[]>(),
  participantEngagement: json("participant_engagement").$type<
    ParticipantEngagement[]
  >(),
  decisionTree: json("decision_tree").$type<DecisionTree>(),
  topicClusters: json("topic_clusters").$type<TopicClusters>(),
  sentimentOverTime: json("sentiment_over_time").$type<SentimentOverTime>(),
  questionTracker: json("question_tracker").$type<Question[]>(),
  resourceLinks: json("resource_links").$type<ResourceLink[]>(),
  meetingEfficiencyScore: integer("meeting_efficiency_score"),
});
