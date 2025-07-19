import QuizCards from "@/components/(student-employee)/quizzes/QuizCards";
import SectionHeader from "@/components/SectionHeader";
import { QuizTypes } from "@/lib/types";
import React from "react";

const quizzesData: QuizTypes[] = [
  {
    quizName: "UX Principles Quiz",
    totalQuestion: 25,
    corrected: 0,
    date: "Sep 28, 2025",
    duration: "30 minutes",
    attendance: 50,
    answeringStatus: "not answered",
  },
  {
    quizName: "UX Principles Quiz",
    totalQuestion: 25,
    corrected: 20,
    date: "Sep 28, 2025",
    duration: "30 minutes",
    attendance: 50,
    answeringStatus: "answered",
    percentage: 95
  },
  {
    quizName: "UX Principles Quiz",
    totalQuestion: 25,
    corrected: 16,
    date: "Sep 28, 2025",
    duration: "30 minutes",
    attendance: 50,
    answeringStatus: "answered",
    percentage: 79
  },
];

export default function Quizzes() {
  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Quizzes"
        description="Take assessment to test your knowledge and track your progress"
        leftContent="null"
      />

          <QuizCards quizzesData={quizzesData} userRole="student" />
    </div>
  );
}
