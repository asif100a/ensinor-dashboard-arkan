"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import StarRating from "../inputs/StarRating";

interface AddDegreePopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  //   selectedDate: Date;
  //   setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  //   timeValue: string;
  //   onTimeStateChange: React.Dispatch<React.SetStateAction<string>>;
}

// interface FormData {}

// interface SpeakerTypes {
//   id: number;
//   speakerName: string;
//   profession: string;
//   photo: null | object;
//   speakTime: string;
// }

export default function AddInstructorPopup({
  setIsOpenPopup,
}: AddDegreePopupProps) {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  // const handleRating = (rate: number) => {
  //   setRating(rate);
  // };

  // const handleReset = () => {
  //   // Set the initial value
  //   setRating(0);
  // };

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
    "w-full px-4 py-3.5 focus:outline-none border border-gray-[#E6E6E6] rounded-lg text-black-primary placeholder:text-placeholder-text";
  const labelClassNames =
    "block text-lg font-medium text-black-secondary text mb-2.5";

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full py-6 flex justify-center items-center overflow-hidden">
      {/* Overlap */}
      <div
        onClick={() => setIsOpenPopup(false)}
        className="absolute top-0 left-0 bottom-0 right-0 bg-popup-overlay z-10"
      ></div>

      {/* Popup Content */}
      <div
        className={`relative bg-white max-w-3xl w-full h-fit rounded-lg z-20 overflow-y-auto`}
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-black-primary w-full px-6 py-6">
          Add An Instructor
        </h3>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 bg-gray-background py-6"
        >
          <div className="w-full grid grid-cols-2 gap-6">
            {/* Name */}
            <div className="col-span-2 w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Name
              </label>
              <input
                type="text"
                id="flatName"
                className={inputFieldClassNames}
                placeholder="Enter instructor name"
                // {...register("flatName", { required: true })}
              />
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Email */}
            <div className="w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Email
              </label>
              <input
                type="email"
                id="flatName"
                className={inputFieldClassNames}
                placeholder="Enter instructor email"
                // {...register("flatName", { required: true })}
              />
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Image */}
            <div>
              <label htmlFor="image" className={labelClassNames}>
                Image
              </label>
              <input
                type="file"
                className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-4 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              />
              {/* {errors.image && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Specialization */}
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber" className=" text-lg">
                Specialization
              </Label>
              <Select>
                <SelectTrigger
                  className={`${inputFieldClassNames} py-[26px] shadow-none`}
                >
                  <SelectValue placeholder="Select a specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-base">Select a specialization</SelectLabel>
                    <SelectItem value="easy">UI/UX Design</SelectItem>
                    <SelectItem value="medium">Frontend</SelectItem>
                    <SelectItem value="hard">AI/ML</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Courses */}
            <div className="w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Courses
              </label>
              <input
                type="number"
                id="flatName"
                className={inputFieldClassNames}
                placeholder="Enter total courses"
                // {...register("flatName", { required: true })}
              />
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Students */}
            <div className="w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Students
              </label>
              <input
                type="number"
                id="flatName"
                className={inputFieldClassNames}
                placeholder="Enter total students"
                // {...register("flatName", { required: true })}
              />
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Rating */}
            <div className="w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Rating
              </label>
              <StarRating rating={rating} setRating={setRating} />
              <p className="mt-2 text-sm text-gray-600">
                {rating > 0
                  ? `You rated ${rating} star${rating > 1 ? "s" : ""}`
                  : "Select a rating"}
              </p>
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Earning */}
            <div className="w-full">
              <label htmlFor="flatName" className={labelClassNames}>
                Earning
              </label>
              <input
                type="number"
                id="flatName"
                className={inputFieldClassNames}
                placeholder="Enter total Earning"
                // {...register("flatName", { required: true })}
              />
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
            {/* Status */}
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber" className=" text-lg">
                Status
              </Label>
              <Select>
                <SelectTrigger
                  className={`${inputFieldClassNames} py-[26px] shadow-none`}
                >
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-base">Select a status</SelectLabel>
                    <SelectItem value="easy">Active</SelectItem>
                    <SelectItem value="medium">Inactive</SelectItem>
                    <SelectItem value="hard">Review</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
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