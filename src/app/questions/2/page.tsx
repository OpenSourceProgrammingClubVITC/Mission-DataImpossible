"use server";

import Q2 from "@/components/q2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SecondQuestion() {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;

  if (q1 === "correct") {
    return <Q2 />;
  }

  redirect("/questions/1");
}
