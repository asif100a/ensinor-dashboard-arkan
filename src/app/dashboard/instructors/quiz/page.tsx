"use client";

import QuizCard from "@/components/(instructor)/instructor_quiz/QuizCard";
import CreateNewQuizPopup from "@/components/custom-ui/popups/CreateNewQuizPopup";
import { InstructorQuizTypes } from "@/lib/types";
import React from "react";

export default function Quiz() {
  const [createQuizPopupOpen, setCreateQuizPopupOpen] = React.useState(false);
  const instructor_quiz: InstructorQuizTypes = {
    quizName: "UX Principles Quiz",
    date: "Sep 28, 2025",
    duration: "30 minutes",
    totalQuestion: 25,
  };

  return (
    <div className="p-6 space-y-6">
      <QuizCard quiz={instructor_quiz} />
      <div className="w-full h-full flex justify-end">
        <button
          onClick={() => setCreateQuizPopupOpen(true)}
          className="px-3 5 py-3 bg-yellow-primary text-lg font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer flex items-center gap-2"
        >
          Create a New Quiz
        </button>
      </div>

      {createQuizPopupOpen && (
        <CreateNewQuizPopup setIsOpenPopup={setCreateQuizPopupOpen} />
      )}
    </div>
  );
}
