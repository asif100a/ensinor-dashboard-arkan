"use client";

import EditQuizPopup from "@/components/custom-ui/popups/EditQuizPopup";
import { InstructorQuizTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { TbEdit } from "react-icons/tb";

interface QuizCardsProps {
  quiz: InstructorQuizTypes;
}

export default function QuizCard({ quiz }: QuizCardsProps) {
  // const router = useRouter();
const [editQuizPopupOpen, setEditQuizPopupOpen] = React.useState(false);

  // const handleStartQuiz = (quiz: string) => {
    
  // };

  return (
    <section className="space-y-4">
      {quiz && (
        <div
          key={quiz.quizName}
          className="w-full bg-white p-6 rounded-xl flex justify-between md:items-center"
        >
          {/* Left section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black-normal">
              {quiz.quizName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-black-secondary">
              {/* Date */}
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/calendar.svg"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                <span>Deadline {quiz.date}</span>
              </p>

              {/* Time */}
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/clock.svg"
                  alt="Clock"
                  width={20}
                  height={20}
                />
                <span>Time limit: {quiz.duration}</span>
              </p>

              {/* Questions or Result */}

              <p className="flex items-center gap-2">
                <Image
                  src="/icons/question.svg"
                  alt="Question"
                  width={20}
                  height={20}
                />
                <span>Questions: {quiz.totalQuestion}</span>
              </p>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-5 items-end justify-between space-y-2">
            <div className="w-full h-full flex items-end">
              <button
                onClick={() => setEditQuizPopupOpen(true)}
                className="px-3 5 py-3 bg-yellow-primary text-lg font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer flex items-center gap-2"
              >
                <TbEdit className="text-2xl" /> Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {editQuizPopupOpen && <EditQuizPopup setIsOpenPopup={setEditQuizPopupOpen} />}
    </section>
  );
}
