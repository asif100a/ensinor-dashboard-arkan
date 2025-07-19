import { StateTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface GradesStatesProps {
  states: StateTypes[];
}

export default function GradesStates({ states }: GradesStatesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {states.map((state: StateTypes) => (
        <div
          key={state.title}
          className="bg-white font-semibold text-black-primary p-6 rounded-xl flex flex-col gap-4 justify-between"
        >
          <h3 className="text-xl">{state.title}</h3>
          <p className="text-2xl">{state.mainText}</p>
          <p className="text-base font-normal text-black-secondary">
            {state.subText}
          </p>

          {/* Progress */}
          {state.title === "Complete Course" ? (
            <p className="text-base font-normal text-black-normal flex items-center gap-2">
              <Image
                src="/icons/book.svg"
                alt="book"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Completed</span>
            </p>
          ) : (
            <div className="w-full bg-gray-200 rounded">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${state.percentage}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
