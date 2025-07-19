"use client";

import { QuizTypes } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface QuizCardsProps {
  userRole: string;
  quizzesData: QuizTypes[];
}

export default function QuizCards({ quizzesData, userRole }: QuizCardsProps) {
  const router = useRouter();

  const handleStartQuiz = (quiz: string) => {
    router.push(`/dashboard/${userRole}s/quizzes/assessment-quiz?quiz=${quiz}`);
  };

  return (
    <section className="space-y-4">
      {quizzesData.map((quiz) => (
        <div
          key={quiz.quizName}
          className="w-full bg-white p-6 rounded-xl flex justify-between md:items-center"
        >
          {/* Left section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black-normal">
              {quiz.quizName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-black-secondary">
              {/* Date */}
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/calendar.svg"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                <span>
                  {quiz.answeringStatus === "answered"
                    ? `Completed: ${quiz.date}`
                    : `Due: ${quiz.date}`}
                </span>
              </p>

              {/* Time */}
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/clock.svg"
                  alt="Clock"
                  width={20}
                  height={20}
                />
                <span>
                  {quiz.answeringStatus === "answered"
                    ? `Time spent: ${quiz.duration}`
                    : `Time limit: ${quiz.duration}`}
                </span>
              </p>

              {/* Questions or Result */}
              {quiz.answeringStatus === "answered" ? (
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/success.svg"
                    alt="Success"
                    width={20}
                    height={20}
                  />
                  <span>
                    {quiz.corrected} of {quiz.totalQuestion} correct
                  </span>
                </p>
              ) : (
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/question.svg"
                    alt="Question"
                    width={20}
                    height={20}
                  />
                  <span>Questions: {quiz.totalQuestion}</span>
                </p>
              )}
            </div>

            <p className="text-base font-normal text-black-normal">
              Attended: {quiz.attendance}
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-5 items-end justify-between space-y-2">
            {quiz.answeringStatus === "answered" &&
              quiz.percentage !== undefined && (
                <div className="text-end gap-1">
                  <h5
                    className={`text-xl font-bold ${
                      quiz.percentage < 80 ? "text-[#D77200]" : "text-[#00A349]"
                    }`}
                  >
                    {quiz.percentage}%
                  </h5>
                  <p className="text-sm font-normal text-black-secondary">
                    Score
                  </p>
                </div>
              )}
            <div className="w-full h-full flex items-end">
              <button
                onClick={() => handleStartQuiz(quiz.quizName)}
                className="px-3 5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer"
              >
                {quiz.answeringStatus === "answered"
                  ? "Re-start"
                  : "Start Quiz"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
