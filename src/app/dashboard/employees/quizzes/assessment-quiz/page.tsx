"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const options = [
  "Usability Experience",
  "User Experience",
  "User Explori",
  "User Interface",
];

export default function AssessmentQuiz() {
  const router = useRouter();

  const [selected, setSelected] = useState("User Experience");
  const totalQuestions = 25;
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  const handleNext = () => {
    if (totalQuestions === answeredQuestions) {
      router.push('/dashboard/employee/grades');
    } else {
      setAnsweredQuestions(answeredQuestions + 1);
    }
  };

  const getPercentage = (total: number, current: number) => {
    return `${(current / total) * 100}%`;
  };

  return (
    <div className="p-6 space-y-40">
      <div className="space-y-12">
        <div className="w-full bg-white p-6 rounded-xl space-y-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black-normal text-center">
            Assessment Quiz
          </h2>

          <div className="w-full space-y-4">
            {/* Progress bar */}
            <div className="w-full flex flex-col md:flex-row md:items-center gap-5">
              <span className="text-xl font-normal text-black-normal">
                {answeredQuestions.toString().length === 1
                  ? `0${answeredQuestions}`
                  : answeredQuestions}
                /{totalQuestions}
              </span>
              <div className="w-full bg-gray-200 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: getPercentage(totalQuestions, answeredQuestions),
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-3.5 py-3 bg-yellow-primary text-base font-normal text-black-semibold  rounded-lg text-black-secondary cursor-pointer flex items-center gap-2">
                <Image
                  src="/icons/clock.svg"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                22:39
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <h4 className="text-xl text-medium text-black-normal">
              1: What is the UX?
            </h4>
            <p className="text-sm text-normal text-black-secondary">
              Select any one answer
            </p>
          </div>

          <div className="space-y-5 rounded-md w-fit">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer"
              >
                <span className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="radio"
                    value={option}
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 ${
                      selected === option
                        ? "border-yellow-400 bg-yellow-400"
                        : "border-gray-400"
                    } flex items-center justify-center`}
                  >
                    {selected === option && (
                      <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                    )}
                  </span>
                </span>
                <span className="text-gray-800 text-base font-normal">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pt-12 border-t border-gray-border flex flex-col md:flex-row md:items-center justify-between gap-6 px-6">
        <p className="text-xl font-medium text-black-primary">
          Do NOT close this tab or browse away from it - your test may reset if
          you do so.
        </p>
        <button
          onClick={handleNext}
          className={`w-fit text-lg px-10 py-3 bg-yellow-primary text-black-primary rounded-lg cursor-pointer`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
