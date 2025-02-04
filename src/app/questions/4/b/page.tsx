"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, CheckCircle, XCircle, Info } from "lucide-react";

export default function EnhancedCTFChallenge() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Secure method to store and retrieve the correct answer
  const correctAnswer = process.env.NEXT_PUBLIC_CTF_CHALLENGE_ANSWER_4;

  useEffect(() => {
    // Focus input on component mount
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAttempts((prev) => prev + 1);

    setTimeout(() => {
      if (answer.trim() === correctAnswer) {
        router.push("/success");
      } else {
        setError("Incorrect answer. Keep investigating!");

        // Implement progressive difficulty
        if (attempts >= 2) {
          setShowHint(true);
        }
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const backgroundVariants = {
    initial: {
      background: "linear-gradient(135deg, #111827, #1F2937)",
    },
    shake: {
      background: [
        "linear-gradient(135deg, #111827, #1F2937)",
        "linear-gradient(135deg, #3B0764, #4B0082)",
        "linear-gradient(135deg, #111827, #1F2937)",
      ],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={error ? "shake" : "initial"}
      variants={backgroundVariants}
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="w-full max-w-md space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold  mb-4">
            📅
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              EXIF Investigation
            </span>
          </h1>
          <p className="text-gray-400 mb-6">
            Decode the hidden clue to progress
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-800/60 border border-gray-700/50 rounded-xl shadow-2xl p-6"
        >
          <div className="mb-6">
            <img
              src="https://i.ibb.co/nN46Kt2W/ctf-image.jpg"
              alt="CTF Challenge"
              className="w-full rounded-lg shadow-lg border-2 border-gray-700"
            />
          </div>

          <div className="space-y-4 mb-6">
            <a
              href="https://pixelpeeper.com/app/01hqb8gcfrf71s0bzared220xc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Info className="mr-2" size={20} />
              Range
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                    setError("");
                  }}
                  className="w-full p-3 pl-10 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter the discovered key"
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center text-red-400 text-sm mt-2"
                  >
                    <XCircle className="mr-2" size={16} />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || answer.trim() === ""}
              className="w-full p-3 rounded-lg 
                bg-gradient-to-r from-purple-600 to-pink-500 
                text-white font-bold
                hover:opacity-90 
                disabled:opacity-50 
                transition-all 
                flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <CheckCircle className="mr-2" size={20} />
                  Verifying...
                </>
              ) : (
                "Submit Answer"
              )}
            </button>
          </form>

          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-gray-700/50 p-3 rounded-lg text-gray-300 text-sm"
              >
                The difference between creation and modification dates
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
