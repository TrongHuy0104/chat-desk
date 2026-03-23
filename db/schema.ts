import { sql } from "drizzle-orm";
import {pgTable, text, timestamp} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").primaryKey().default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    image: text("image").notNull(),
    organization_id: text("organization_id").notNull(),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
});


export const metadata = pgTable("metadata", {
    id: text("id").primaryKey().default(sql`gen_random_uuid()`),
    // organization_id: text("organization_id").notNull(),
    user_email: text("user_email").notNull(),
    business_name: text("business_name").notNull(),
    website_url: text("website_url").notNull(),
    external_links: text("external_links"),
    created_at: text("created_at").default(sql`now()`),
    updated_at: text("updated_at").default(sql`now()`),
})