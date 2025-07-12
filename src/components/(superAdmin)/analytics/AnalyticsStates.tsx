import Image from "next/image";
import React from "react";
import getFormatPrice from "../../../../utils/getFormatPrice";

const states = [
  {
    icon: "/icons/certificate-2.svg",
    title: "Course Sales",
    mainText: 24597,
  },
  {
    icon: "/icons/event.svg",
    title: "Event Sales",
    mainText: 5930,
  },
  {
    icon: "/icons/book.svg",
    title: "Book Sales",
    mainText: 23239,
  },
];

export default function AnalyticsStates() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {states.map((state) => (
        <div
          key={state.title}
          className="bg-white font-semibold text-black-primary px-6 xl:px-12 py-4 xl:py-8 rounded-xl flex flex-col xl:flex-row gap-6"
        >
          <Image
            src={state.icon}
            alt={state.title}
            width={100}
            height={100}
            className="w-16 h-16"
          />
          <div className="w-full space-y-3">
            <h3 className="text-2xl">{state.title}</h3>
            <p className="text-2xl">{getFormatPrice(state.mainText)}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
