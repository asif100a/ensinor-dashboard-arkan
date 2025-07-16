"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import StarRating from "../inputs/StarRating";
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

interface AddShopPopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface FormData {}

export default function CreateBusinessPopup({
  setIsOpenPopup,
}: AddShopPopupProps) {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState<number>(0);
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
          Create A New Business
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6 px-6 bg-gray-background py-6"
        >
          {/* Business Title */}
          <div>
            <label htmlFor="flatName" className={labelClassNames}>
              Business Title
            </label>
            <input
              type="text"
              id="flatName"
              className={inputFieldClassNames}
              placeholder="Enter the business title"
              // {...register("flatName", { required: true })}
            />
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClassNames}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputFieldClassNames}
              placeholder="Enter the email"
              // {...register("email", { required: true })}
            />
            {/* {errors.email && (
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
          {/* Plan */}
          <div>
            <label htmlFor="plan" className={labelClassNames}>
              Plan Name
            </label>
            <input
              type="text"
              id="plan"
              className={inputFieldClassNames}
              placeholder="Enter the business plan"
              // {...register("plan", { required: true })}
            />
            {/* {errors.plan && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Employees */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Employees
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the total employee"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Active-Courses */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Active Courses
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the total active courses"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Total Spent */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Total Spent
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the total spent"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
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
                  <SelectLabel>Select a status</SelectLabel>
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

          <div className="col-span-2 flex justify-end items-center gap-4">
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
