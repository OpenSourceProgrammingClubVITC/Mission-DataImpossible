import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-2 border-[rgba(255,77,140,0.3)] rounded-lg mb-4 
      hover:border-[rgba(255,77,140,0.6)] hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] 
      transition-all hover:bg-[rgba(255,77,140,0.1)]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left"
      >
        <span className="text-base sm:text-xl text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#FF758C] ml-4 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#FF758C] ml-4 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 text-white/80 whitespace-pre-line text-sm sm:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Mission: Data Impossible?",
      answer: "It's an exciting workshop cum hackathon where participants will master data techniques, solve riddles, unlock datasets, and conquer data challenges."
    },
    {
      question: "When and where is the event happening?",
      answer: "📅 Date: February 4\n📍 Venue: AB3 Kamaraj Hall"
    },
    {
      question: "Who can participate?",
      answer: "Students from all colleges are welcome to join."
    },
    {
      question: "How do I register for the event?",
      answer: "You can register through our registration portal. Click the 'Register Now' button at the top of the page to get started."
    },
    {
      question: "What are the registration fees?",
      answer: "Solo Operative: ₹100\nDynamic Duo: ₹180\nElite Trio: ₹260"
    },
    {
      question: "What are the prizes and rewards?",
      answer: "A prize pool of ₹5,000 and exclusive internship opportunities await winners!"
    },
    {
      question: "Will participants receive certificates?",
      answer: "Yes, all participants will receive E-certificates."
    },
    {
      question: "What are the phases of the event?",
      answer: "Phase 1: Hands-on ML workshop to master advanced data techniques.\nPhase 2: Solve riddles, unlock datasets, and take on the ultimate data challenge."
    },
    {
      question: "Do I need prior knowledge of Machine Learning to participate?",
      answer: "No prior experience is required. The workshop will prepare you."
    },
    {
      question: "Whom do I contact for more details?",
      answer: "Please contact the event coordinators for any queries."
    }
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
      <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;