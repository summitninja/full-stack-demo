import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("posts", {
  // Each post gets a uuid as the id
  id: serial("id").primaryKey(),
  title: text("title"),
  poster: text("poster"),
  body: text("body"),
});
