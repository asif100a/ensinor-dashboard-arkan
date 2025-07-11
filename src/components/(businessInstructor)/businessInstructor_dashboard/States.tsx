import Image from "next/image";
import React from "react";
import getFormatPrice from "../../../../utils/getFormatPrice";

const states = [
  {
    icon: "/icons/book.svg",
    title: "Active Courses",
    mainText: 9,
  },
  {
    icon: "/icons/student.svg",
    title: "Total Learned",
    mainText: 5220,
  },
  {
    icon: "/icons/calendar.svg",
    title: "Upcoming Events",
    mainText: 7,
  },
  {
    icon: "/icons/certificate.svg",
    title: "Recently Activity",
    mainText: 7,
  },
];

export default function States() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
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
            <p className="text-2xl">{getFormatPrice(state.mainText)}</p>
          </div>
        ))}
    </section>
  );
}
