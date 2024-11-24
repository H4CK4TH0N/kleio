CREATE TABLE IF NOT EXISTS "meetings" (
	"id" text PRIMARY KEY NOT NULL,
	"user_email" text NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"participants" text[],
	"processed" boolean DEFAULT false NOT NULL,
	"title" text,
	"short_description" text,
	"description" text,
	"takeaways" text[],
	"action_items" json,
	"mood_graph" json,
	"timeline" json,
	"participant_engagement" json,
	"decision_tree" json,
	"topic_clusters" json,
	"sentiment_over_time" json,
	"question_tracker" json,
	"resource_links" json,
	"meeting_efficiency_score" integer,
	CONSTRAINT "meetings_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"email" text PRIMARY KEY NOT NULL,
	"number_of_meetings" integer DEFAULT 0 NOT NULL,
	"total_meeting_duration" real DEFAULT 0 NOT NULL,
	"average_meeting_duration" real DEFAULT 0 NOT NULL,
	"total_meeting_efficiency_score" real DEFAULT 0 NOT NULL,
	"participants" integer DEFAULT 0 NOT NULL,
	"communication_email" boolean DEFAULT true NOT NULL,
	"security_email" boolean DEFAULT true NOT NULL,
	"meeting_email" boolean DEFAULT true NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "meetings" ADD CONSTRAINT "meetings_user_email_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."users"("email") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
