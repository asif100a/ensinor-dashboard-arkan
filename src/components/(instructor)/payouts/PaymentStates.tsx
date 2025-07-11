import Image from "next/image";
import React from "react";

const states = [
  {
    icon: "/icons/money-earning.svg",
    price: 42506,
    text: "This month earning",
  },
  {
    icon: "/icons/withdraw.svg",
    price: 42506,
    text: "Last 1 week learned",
  },
];

export default function PaymentStates() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {states.map((state) => (
        <div
          key={state.text}
          className="bg-yellow-primary font-semibold text-black-normal p-8 rounded-xl flex items-start gap-5"
        >
          <Image
            src={state.icon}
            alt={state.text}
            width={60}
            height={60}
            className="w-[60px] h-[60px]"
          />
          <div className="space-y-2">
            <p className="text-base font-normal">{state.text}</p>
            <p className="text-3xl">${state.price}</p>
          </div>
        </div>
      ))}
      <div className="bg-yellow-primary font-semibold text-black-normal p-8 rounded-xl space-y-3">
        <div className="space-y-2">
          <p className="text-base font-normal">Total Balance</p>
          <p className="text-3xl">$ 42,506</p>
        </div>
        <button
          className={`w-full text-left px-6 py-3.5 bg-black-normal flex items-center gap-2 text-white rounded-lg cursor-pointer`}
        >
          Withdraw Earning
        </button>
      </div>
    </section>
  );
}
