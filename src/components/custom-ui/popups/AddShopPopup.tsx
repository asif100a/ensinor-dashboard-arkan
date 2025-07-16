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

export default function AddShopPopup({ setIsOpenPopup }: AddShopPopupProps) {
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
          Add A New Shop
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6 px-6 bg-gray-background py-6"
        >
          {/* Shop Title */}
          <div className="col-span-2">
            <label htmlFor="flatName" className={labelClassNames}>
              Shop Title
            </label>
            <input
              type="text"
              id="flatName"
              className={inputFieldClassNames}
              placeholder="Enter the shop title"
              // {...register("flatName", { required: true })}
            />
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Author */}
          <div>
            <label htmlFor="author" className={labelClassNames}>
              Author Name
            </label>
            <input
              type="text"
              id="author"
              className={inputFieldClassNames}
              placeholder="Enter the course author name"
              // {...register("author", { required: true })}
            />
            {/* {errors.author && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Category */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Category
            </label>
            <select
              name=""
              id=""
              defaultValue={"default"}
              className={inputFieldClassNames}
              // {...register("rent", { required: true })}
            >
              <option value="default">Select a shop category</option>
              <option value="">Design</option>
              <option value="">Development</option>
            </select>
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Price */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Price
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the shop price"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Sales */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Sales
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the sales"
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
                  <SelectItem value="hard">Pending</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Rating */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Rating
            </label>
            <StarRating rating={rating} setRating={setRating} />
            {/* {errors.rent && (
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
