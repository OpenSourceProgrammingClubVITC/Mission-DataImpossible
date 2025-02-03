"use server";
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function questionOne(answer: string) {
  const cookiesStore = await cookies();

  if (answer.toLowerCase() === "maze") {
    cookiesStore.set("question-1", "correct", { secure: true, httpOnly: true });
    redirect("/questions/2");
  } else {
    return "wrong";
  }
}

export async function questionTwo(answer: string) {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;
  if (q1 === "correct") {
    if (answer.toLowerCase() === "inception") {
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

export async function questionTwoB(answer: string) {
  const cookiesStore = await cookies();
  const q1 = cookiesStore.get("question-1")?.value;
  const q2 = cookiesStore.get("question-2")?.value;

  if (q1 === "correct" && q2 === "correct") {
    if (answer.toLowerCase() === "secondpart") {
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
