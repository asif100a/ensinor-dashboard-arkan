import Image from "next/image";
import React from "react";

const states = [
  {
    icon: "/icons/book.svg",
    title: "Courses In Progress",
    mainText: "3 Courses",
    subText: "3 week due",
  },
  {
    icon: "/icons/clock.svg",
    title: "Learned Hours",
    mainText: "35",
    subText: "Last 1 week learned",
  },
  {
    icon: "/icons/certificate.svg",
    title: "Completed Courses",
    mainText: "7",
    subText: "2 Certificates earned",
  },
];

export default function States() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {states.map((state) => (
          <div
            key={state.title}
            className="bg-white font-semibold text-black-primary p-6 rounded-xl space-y-4"
          >
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl">{state.title}</h3>
              <Image
                src={state.icon}
                alt={state.title}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <p className="text-2xl">{state.mainText}</p>
            <p className="text-base font-normal text-black-secondary">
              {state.subText}
            </p>
          </div>
        ))}
    </section>
  );
}
