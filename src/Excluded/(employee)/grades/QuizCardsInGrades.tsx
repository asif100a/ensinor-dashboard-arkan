"use client";

import { QuizInGradeTypes } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

interface QuizCardsInGradesProps {
  quizzesInGradeData: QuizInGradeTypes[];
}

export default function QuizCardsInGrades({
  quizzesInGradeData,
}: QuizCardsInGradesProps) {
  const router = useRouter();

  const handleStartQuiz = (quiz: string) => {
    router.push(`/dashboard/students/quizzes/assessment-quiz?quiz=${quiz}`);
  };

  return (
    <section className="space-y-4">
      {quizzesInGradeData.map((quiz: QuizInGradeTypes) => (
        <div
          key={quiz.quizName}
          className="w-full bg-white p-6 rounded-xl flex flex-col md:flex-row justify-between md:items-center gap-6"
        >
          {/* Left section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black-normal">
              {quiz.quizName}
            </h2>

            {/* Date */}
            <p className="flex items-center gap-2">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={20}
                height={20}
              />
              <span>Completed: {quiz.date}</span>
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-5 md:items-end justify-between space-y-2">
            {quiz.answeringStatus === "answered" &&
              quiz.percentage !== undefined && (
                <div className="md:text-end gap-1">
                  <h5
                    className={`text-xl font-bold ${
                      quiz.percentage < 80 ? "text-[#D77200]" : "text-[#00A349]"
                    }`}
                  >
                    {quiz.percentage}%
                  </h5>
                  <p className="text-sm font-normal text-black-secondary">
                    Final Grade: {quiz.grade}
                  </p>
                </div>
              )}
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleStartQuiz(quiz.quizName)}
                className="px-3 5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer"
              >
                Re-start
              </button>
              {/* Download */}
              <button
                className="px-3 5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer"
              >
                <MdOutlineFileDownload className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
