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