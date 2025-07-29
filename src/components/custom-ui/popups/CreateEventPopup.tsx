"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddCoursePopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface FormData {}

export default function CreateEventPopup({
  setIsOpenPopup,
}: AddCoursePopupProps) {
  const [loading, setLoading] = useState(false);
  // const [rating, setRating] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
          Create A New Event
        </h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6 px-6 bg-gray-background py-6"
        >
          {/* Event Name */}
          <div>
            <label htmlFor="flatName" className={labelClassNames}>
              Event Name
            </label>
            <input
              type="text"
              id="flatName"
              className={inputFieldClassNames}
              placeholder="Enter the event name"
              // {...register("flatName", { required: true })}
            />
            {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Event Type */}
          <div>
            <label htmlFor="phoneNumber" className={labelClassNames}>
              Event Type
            </label>
            <select
              name=""
              id=""
              defaultValue={"default"}
              className={inputFieldClassNames}
              // {...register("rent", { required: true })}
            >
              <option value="default">Select an event type</option>
              <option value="">Conference</option>
            </select>
            {/* {errors.phoneNumber && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Event Date */}
          <div className="w-full flex flex-col">
            <label htmlFor="rent" className={labelClassNames}>
              Event Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date ? date : new Date())}
              className={`${inputFieldClassNames} w-full`}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Location */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Location
            </label>
            <input
              type="text"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the event location"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Organizer Name */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Organizer Name
            </label>
            <input
              type="text"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the event organizer name"
              // {...register("rent", { required: true })}
            />
            {/* {errors.rent && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
          </div>
          {/* Attendance */}
          <div>
            <label htmlFor="rent" className={labelClassNames}>
              Attendance
            </label>
            <input
              type="number"
              id="rent"
              className={inputFieldClassNames}
              placeholder="Enter the attendance count"
              // {...register("rent", { required: true })}
            />
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
              placeholder="Enter the event price"
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