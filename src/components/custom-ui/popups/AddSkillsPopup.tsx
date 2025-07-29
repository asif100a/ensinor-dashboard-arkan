"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

interface AddSkillsPopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface FormData {}

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

export default function AddSkillsPopup({
  setIsOpenPopup,
}: AddSkillsPopupProps) {
  const [loading, setLoading] = useState(false);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const {
    // register,
    handleSubmit,
    // formState: { errors },
    // reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    // console.log("Form data: ", data);
    setLoading(true);
    // try {
    //   const { data: response } = await serverURL.post("/api/flats/createFlat", {
    //     ...data,
    //     lastDayOfPayBill: selectedDate,
    //   });
    //   // console.log("Add Flat Response: ", response);
    //   toast.success(response.message);
    //   reset();
    //   setIsDisplayAddFlat(false);
    //   fetchFlatData();
    // } catch (error: unknown) {
    //   // console.log("Error while posting flat data: ", error);
    //   if (error instanceof Error) {
    //     let errorMessage;
    //     if (axios.isAxiosError(error)) {
    //       const err = error.response?.data?.message;
    //       if (err) errorMessage = err;
    //       else errorMessage = error.message;
    //     }
    //     toast.error(errorMessage);
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center">
      {/* Overlap */}
      <div
        onClick={() => setIsOpenPopup(false)}
        className="absolute top-0 left-0 bottom-0 right-0 bg-popup-overlay z-10"
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white max-w-3xl w-full rounded-lg z-20 overflow-hidden">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-black-primary w-full px-6 py-6">
          Add New Flat
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 bg-gray-background py-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            {[...skillsData, ...skillsData].map((skill: string) => (
              <button
                key={skill}
                type="button"
                className="w-fit text-nowrap px-2 py-1 rounded-sm bg-yellow-secondary flex items-center gap-2 cursor-pointer"
              >
                <span>{skill}</span>{" "}
                <span className="p-0.5 rounded-full bg-yellow-primary">
                  <RxCross2 className="text-xl" />
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Form Submit */}
            <input
              type="submit"
              value={loading ? "Saving..." : "Save"}
              disabled={loading}
              className="w-fit py-3 px-10 bg-yellow-primary text-lg text-black-normal rounded-lg hover:bg-yellow-hover cursor-pointer"
            />
            {/* Cancel button */}
            <button
            type="button"
              onClick={() => setIsOpenPopup(false)}
              className="w-fit py-3 px-10 border border-yellow-primary text-lg text-black-normal rounded-lg cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
