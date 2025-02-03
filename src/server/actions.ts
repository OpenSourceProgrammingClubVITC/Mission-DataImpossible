"use server";
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "./db";
import { teamCtfTable } from "./db/schema";
import { eq } from "drizzle-orm";

export async function recordFirst(question: string, username: string) {
  const cookiesStore = await cookies();
  const existing = cookiesStore.get(question);
  if (!existing) {
    await db.insert(teamCtfTable).values({
      TeamUsername: username,
      qStart: new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", ""),
    });
    // do some db stuff

    cookiesStore.set(question, "viewed", { secure: true, httpOnly: true });
  }
}

export async function questionOne(answer: string, username: string) {
  const cookiesStore = await cookies();

  if (answer.toLowerCase() === "maze") {
    await db
      .update(teamCtfTable)
      .set({
        question1: true,
        question1_end: new Date(Date.now())
          .toISOString()
          .replace("T", " ")
          .replace("Z", ""),
      })
      .where(eq(teamCtfTable.TeamUsername, username));
    cookiesStore.set("question-1", "correct", { secure: true, httpOnly: true });
    redirect("/questions/2");
  } else {
    return "wrong";
  }
}

export async function questionTwo(answer: string, username: string) {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;
  if (q1 === "correct") {
    if (answer.toLowerCase() === "inception") {
      await db
        .update(teamCtfTable)
        .set({
          question2: true,
        })
        .where(eq(teamCtfTable.TeamUsername, username));
      cookiesStore.set("question-2", "correct", {
        secure: true,
        httpOnly: true,
      });
      redirect("/questions/2/b");
    } else {
      return "wrong";
    }
  } else {
    redirect("/questions/1");
  }
}

export async function questionTwoB(answer: string, username: string) {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;
  const q2 = cookiesStore.get("question-2")?.value;

  if (q1 === "correct" && q2 === "correct") {
    if (answer.toLowerCase() === "secondpart") {
      await db
        .update(teamCtfTable)
        .set({
          question2b: true,
          question2_end: new Date(Date.now())
            .toISOString()
            .replace("T", " ")
            .replace("Z", ""),
        })
        .where(eq(teamCtfTable.TeamUsername, username));
      cookiesStore.set("question-2b", "correct", {
        secure: true,
        httpOnly: true,
      });
      redirect("/questions/3");
    } else {
      return "wrong";
    }
  } else if (q1 === "correct") {
    redirect("/questions/2");
  } else {
    redirect("/questions/1");
  }
}
