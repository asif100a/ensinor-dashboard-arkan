import GradesStates from "@/components/(student-employee)/grades/GradesStates";
import QuizCardsInGrades from "@/components/(student-employee)/grades/QuizCardsInGrades";
import SectionHeader from "@/components/SectionHeader";
import { QuizInGradeTypes, StateTypes } from "@/lib/types";
import React from "react";

const states: StateTypes[] = [
  {
    title: "Overall GPA",
    mainText: "4.5",
    subText: "Out of 5.0",
    percentage: 100
  },
  {
    title: "Average Grade",
    mainText: "84%",
    subText: "Grade: B",
    percentage: 84
  },
  {
    title: "Complete Course",
    mainText: "5",
    subText: "",
  },
];

const quizzesInGradeData: QuizInGradeTypes[] = [
  {
    quizName: "UX Principles Quiz",
    instructorName: "Shahid Hasan",
    totalQuestion: 25,
    percentage: 95,
    date: "Sep 28, 2025",
    answeringStatus: "answered",
    grade: "A",
  },
  {
    quizName: "UX Principles Quiz",
    instructorName: "Shahid Hasan",
    totalQuestion: 25,
    percentage: 95,
    date: "Sep 28, 2025",
    answeringStatus: "answered",
    grade: "A",
  },
  {
    quizName: "UX Principles Quiz",
    instructorName: "Shahid Hasan",
    totalQuestion: 25,
    percentage: 95,
    date: "Sep 28, 2025",
    answeringStatus: "answered",
    grade: "A",
  },
];

export default function Grades() {
  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Grades"
        description="Track your academic performance across all your courses"
        leftContent="viewCertification"
      />

      {/* Stats */}
      <GradesStates states={states} />

      <QuizCardsInGrades quizzesInGradeData={quizzesInGradeData} />
    </div>
  );
}
