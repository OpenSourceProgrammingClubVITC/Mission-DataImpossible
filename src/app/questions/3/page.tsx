"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TextRevealCardPreview } from '@/components/TextRevealCardPreview';
import { SVGMaskEffectDemo } from '@/components/SVGMaskEffectDemo';
import { Input } from '@/components/input';

export default function Question() {
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
          You're Crushing It! 🚀
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
}
