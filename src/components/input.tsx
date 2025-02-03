"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Input() {
 const [answer, setAnswer] = useState('');
 const [error, setError] = useState('');
 const router = useRouter();
 const correctAnswer = process.env.NEXT_PUBLIC_CORRECT_ANSWER;

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   
   if (answer.trim().toLowerCase() === correctAnswer?.toLowerCase()) {
     router.push('/questionn');
   } else {
     setError('Incorrect answer');
   }
 };

 return (
   <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
     <input 
       type="text"
       value={answer}
       onChange={(e) => setAnswer(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-lg"
       placeholder="Enter your answer"
     />
     {error && <p className="text-red-500 mt-2">{error}</p>}
     <button 
       type="submit" 
       className="mt-2 w-full p-2 bg-blue-500 text-white  rounded-lg"
     >
       Submit
     </button>
   </form>
 );
}