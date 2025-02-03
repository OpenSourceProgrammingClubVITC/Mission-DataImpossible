"use client";
import { questionTwoB } from "@/server/actions";
import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";

import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

export default function SecondQuestion() {
  const [text, setText] = useState("");
  
  const currentQuestion = 2;
  const totalQuestions = 4;

  return (
    <div
      className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col justify-center items-center`}
    >
      <div
        className="fixed w-full h-full animate-twinkle"
        style={{
          background: `
            radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 220px, #fff, rgba(0,0,0,0))
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />
      {/* Vertical Sidebar */}
      <div className="fixed right-0 top-0 h-full w-20 flex items-center justify-center p-6 z-10 text-white gap-8">
        {/* Question Counter */}
        <p className="mt-4 text-lg font-semibold">
          {currentQuestion} b - {totalQuestions}
        </p>
        {/* Progress Bar Container */}
        <div className="flex flex-col items-center gap-2">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`h-24 w-1 rounded transition-all ${
                index < currentQuestion ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 ">
        <p className="text-white text-4xl font-bold">Find THE WORD!!</p>
        <div className="w-[600px] border-2 border-white p-9">
          <JigsawPuzzle
            imageSrc="https://ruxpkor5y4.ufs.sh/f/4UBwEBFjbtgUmPsyqvXDQnMNiREwI9vJfqdZLTBF26ClHt3c"
            rows={6}
            columns={4}
            onSolved={() => alert("Solved!")}
          />
        </div>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Your Answer Here..."
          className="w-[50%] border z-10 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-900"
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              const status = await questionTwoB(text);
              setText("");
              if (status === "wrong") {
                alert("Wrong Answer! Try Again!");
              }
            }
          }}
        />
      </div>
    </div>
  );
}
