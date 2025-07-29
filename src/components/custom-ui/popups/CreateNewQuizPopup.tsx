"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddDegreePopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface FormData {}

export default function AddQuestionPopup({
  setIsOpenPopup,
}: AddDegreePopupProps) {
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
          Create a New Quiz
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 bg-gray-background py-6"
        >
          {/* Question Name */}
          <div>
            <label htmlFor="flatName" className={labelClassNames}>
              Question Name
            </label>
            <input
              type="text"
              id="flatName"
              className={inputFieldClassNames}
              placeholder="Enter question name"
              // {...register("flatName", { required: true })}
            />
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Option A */}
            <div className="w-full">
              <label htmlFor="tenantName" className={labelClassNames}>
                Option A
              </label>
              <input
                type="text"
                id="tenantName"
                className={inputFieldClassNames}
                placeholder="Enter option A"
                // {...register("tenantName", { required: true })}
              />
              {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Option B */}
            <div className="w-full">
              <label htmlFor="tenantName" className={labelClassNames}>
                Option B
              </label>
              <input
                type="text"
                id="tenantName"
                className={inputFieldClassNames}
                placeholder="Enter option B"
                // {...register("tenantName", { required: true })}
              />
              {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Option C */}
            <div className="w-full">
              <label htmlFor="tenantName" className={labelClassNames}>
                Option C
              </label>
              <input
                type="text"
                id="tenantName"
                className={inputFieldClassNames}
                placeholder="Enter option C"
                // {...register("tenantName", { required: true })}
              />
              {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Option D */}
            <div className="w-full">
              <label htmlFor="tenantName" className={labelClassNames}>
                Option D
              </label>
              <input
                type="text"
                id="tenantName"
                className={inputFieldClassNames}
                placeholder="Enter option D"
                // {...register("tenantName", { required: true })}
              />
              {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
          </div>
          {/* Current Answer */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Currect Answer
            </label>
            <input
              type="text"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter currect answer"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
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
