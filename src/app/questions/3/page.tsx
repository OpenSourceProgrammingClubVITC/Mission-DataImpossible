"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TextRevealCardPreview } from '@/components/TextRevealCardPreview';
import { SVGMaskEffectDemo } from '@/components/SVGMaskEffectDemo';

const Input = () => {
 const [answer, setAnswer] = useState('');
 const [error, setError] = useState('');
 const router = useRouter();
 const correctAnswer = process.env.NEXT_PUBLIC_CORRECT_ANSWER;

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   
   if (answer.trim().toLowerCase() === correctAnswer?.toLowerCase()) {
     router.push('/questions/3/b');
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
};

const QuestionPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-gray-800 rounded-xl shadow-2xl max-w-md w-full"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-white"
        >
          You are Crushing It! 🚀
        </motion.h1>
        
        <motion.div
          initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8 text-gray-300"
        >
          Welcome to Question 3! Congratulations on completing the first two questions! 
        </motion.div>
      </motion.div>

      <TextRevealCardPreview />
      <SVGMaskEffectDemo />
      <Input />
    </div>
  );
};

export default QuestionPage;