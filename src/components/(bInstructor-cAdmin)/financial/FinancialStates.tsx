import Image from "next/image";
import React from "react";

const states = [
  {
    icon: "/icons/money-earning.svg",
    mainText: 42506,
    subText: "Total earning",
  },
  {
    icon: "/icons/money-earning-2.svg",
    mainText: 42506,
    subText: "This month earning",
  },
  {
    icon: "/icons/money-earning-3.svg",
    mainText: 42506,
    subText: "Pending Earning",
  },
];

export default function FinancialStates() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {states.map((state) => (
        <div
          key={state.subText}
          className="bg-white text-black-normal p-10 rounded-xl flex items-center gap-8"
        >
          <Image
            src={state.icon}
            alt={state.subText}
            width={60}
            height={60}
            className="w-[60px] h-[60px]"
          />

          <div className="space-y-2">
            <p className="text-lg font-medium">
              {state.subText}
            </p>
            <h3 className="text-3xl font-semibold">{state.mainText}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
