import { boolean, pgTable, time, text } from "drizzle-orm/pg-core";

export const teamCtfTable = pgTable("team_ctf_table", {
  TeamUsername: text("TeamUsername").primaryKey(),
  question1: boolean("question1"),
  question2: boolean("question2"),
  question2b: boolean("question2b"),
  question3: boolean("quesiton3"),
  question4: boolean("question4"),
  qStart: time("question1_start"),
  question1_end: time("question1_end"),
  question2_end: time("question2_end"),
  question3_end: time("question3_end"),
  question4_end: time("question4_end"),
});
