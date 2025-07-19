import React from "react";
import ExperienceCard from "../../custom-ui/cards/student/ExperienceCard";
import {
  CertificationTypes,
  EductionTypes,
  ExperienceTypes,
} from "@/lib/types";
import EducationCard from "../../custom-ui/cards/student/EducationCard";
import CertificationCard from "../../custom-ui/cards/student/CertificationCard";
import SkillCard from "../../custom-ui/cards/student/SkillCard";

interface CVTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const eductionData: EductionTypes = {
  courseName: "Professional Graphic Design",
  institution: "Sparktech.agency",
  duration: "2022-2025",
  location: "Bangladesh",
  gpa: 4.5,
};

const experienceData: ExperienceTypes = {
  role: "Junior UX/UI Designer",
  company: "Sparktech.agency",
  duration: "2022-2025",
  location: "Bangladesh",
  description:
    "Hello, my name is POLASH I am a professional graphic designer with over 3 years of experience.",
  projects: ["Landing Page"],
};

const certificationData: CertificationTypes = {
  role: "Junior UX/UI Designer",
  company: "Sparktech.agency",
  duration: "2022-2025",
  location: "Bangladesh",
  credentialId: "SAT-21546",
};

const skillsData: string[] = [
  "Communication Skills",
  "Computer Software",
  "Creativity",
  "Data Analysis",
  "Management Skills",
  "Marketing",
  "Problem Solving Skills",
  "UX Design",
  "Software",
  "Project Management",
];

export default function CVTabs({ activeTab, setActiveTab }: CVTabsProps) {
  const tabs = ["Education", "Experience", "Certifications", "Skills"];

  return (
    <section className="w-full space-y-6">
      <div className="w-full px-4 py-1.5 bg-white rounded-lg grid grid-cols-2 md:grid-cols-4 gap-6">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full px-4 py-2.5 rounded-lg cursor-pointer ${
              tab === activeTab ? "bg-yellow-primary" : "bg-gray-background"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {/* Education */}
        {activeTab === "Education" &&
          [0, 1].map((key: number) => (
            <EducationCard key={key} eductionData={eductionData} />
          ))}
        {/* Experience */}
        {activeTab === "Experience" &&
          [0, 1].map((key: number) => (
            <ExperienceCard key={key} experienceData={experienceData} />
          ))}
        {/* Certifications */}
        {activeTab === "Certifications" &&
          [0, 1].map((key: number) => (
            <CertificationCard
              key={key}
              certificationData={certificationData}
            />
          ))}
        {/* Skills */}
        {activeTab === "Skills" && (
          <SkillCard skills={skillsData} />
        )}
      </div>
    </section>
  );
}
