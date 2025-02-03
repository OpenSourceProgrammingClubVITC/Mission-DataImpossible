"use server";

import SecondQuestion from "@/components/q2a";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SecondQuestion2() {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;
  const q2 = cookiesStore.get("question-2")?.value;

  if (q1 === "correct" && q2 === "correct") {
    return <SecondQuestion />;
  } else if (q1 === "correct") {
    redirect("/questions/2");
  }

  redirect("/questions/1");
}
