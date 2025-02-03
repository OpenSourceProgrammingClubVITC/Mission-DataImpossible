"use server";
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function questionOne(answer: string) {
  const cookiesStore = await cookies();

  if (answer.toLowerCase() === "maze") {
    cookiesStore.set("question-1", "correct", { secure: true, httpOnly: true });
    redirect("/questions/2");
  } else {
    return "wrong";
  }
}
