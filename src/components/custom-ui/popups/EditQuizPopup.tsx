"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddDegreePopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface FormData {}

export default function EditQuizPopup({ setIsOpenPopup }: AddDegreePopupProps) {
  const [loading, setLoading] = useState(false);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const {
    // register,
    handleSubmit,
    // formState: { errors },
    // reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log("Form data: ", data);
    setLoading(true);
    // try {
    //   const { data: response } = await serverURL.post("/api/flats/createFlat", {
    //     ...data,
    //     lastDayOfPayBill: selectedDate,
    //   });
    //   console.log("Add Flat Response: ", response);
    //   toast.success(response.message);
    //   reset();
    //   setIsDisplayAddFlat(false);
    //   fetchFlatData();
    // } catch (error: unknown) {
    //   console.log("Error while posting flat data: ", error);
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

  const inputFieldClassNames =
    "w-full px-4 py-3.5 focus:outline-none border border-gray-border rounded-lg text-black-primary placeholder:text-placeholder-text";
  const labelClassNames =
    "block text-lg font-medium text-black-secondary text mb-2.5";

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
          Edit the Quiz
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 bg-gray-background py-6"
        >
          {/* Quiz Title */}
          <div>
            <label htmlFor="flatName" className={labelClassNames}>
              Quiz Title
            </label>
            <input
              type="text"
              id="flatName"
              className={inputFieldClassNames}
              placeholder="UX Principles Quiz"
              // {...register("flatName", { required: true })}
            />
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Deadline */}
            <div className="w-full">
              <label htmlFor="tenantName" className={labelClassNames}>
                Deadline
              </label>
              <input
                type="text"
                id="tenantName"
                className={inputFieldClassNames}
                placeholder="Sep 28, 2025"
                // {...register("tenantName", { required: true })}
              />
              {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Time limit */}
            <div className="w-full">
              <label htmlFor="phoneNumber" className={labelClassNames}>
                Time limit
              </label>
              <input
                type="text"
                id="phoneNumber"
                className={inputFieldClassNames}
                placeholder="30 minutes"
                // {...register("phoneNumber", { required: true })}
              />
              {/* {errors.phoneNumber && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Total Questions */}
            <div className="w-full">
              <label htmlFor="rent" className={labelClassNames}>
                Total Questions
              </label>
              <input
                type="text"
                id="rent"
                className={inputFieldClassNames}
                placeholder="25"
                // {...register("rent", { required: true })}
              />
              {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
          </div>

          <div className="flex justify-end items-center gap-4">
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
