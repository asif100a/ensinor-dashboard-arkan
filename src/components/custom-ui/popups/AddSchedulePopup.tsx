"use client";

import { generateId } from "@/lib/utils";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import TimePicker from "react-time-picker";

interface AddDegreePopupProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  //   selectedDate: Date;
  //   setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  //   timeValue: string;
  //   onTimeStateChange: React.Dispatch<React.SetStateAction<string>>;
}

// interface FormData {}

interface SpeakerTypes {
  id: number;
  speakerName: string;
  profession: string;
  photo: null | object;
  speakTime: string;
}

const initialSpeaker: SpeakerTypes = {
  id: generateId(),
  speakerName: "",
  profession: "",
  photo: null,
  speakTime: "",
};

export default function AddSchedulePopup({
  setIsOpenPopup,
}: AddDegreePopupProps) {
  const [loading, setLoading] = useState(false);
  const [addScheduleDate, setAddScheduleDate] = useState(new Date());
  const [timeValue, onTimeStateChange] = useState<string | null>("10:00");
  const [totalSpeaker, setTotalSpeaker] = useState<SpeakerTypes[]>([
    initialSpeaker,
  ]);
  console.log("totalSpeaker: ", totalSpeaker);

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

  const handleAddSpeakerFields = () => {
    setTotalSpeaker([...totalSpeaker, {...initialSpeaker, id: generateId()}]);
  };

  const handleDeleteSpeakerFields = (id: number) => {
    const filtered = totalSpeaker?.filter((spk: SpeakerTypes) => spk.id !== id);
    setTotalSpeaker(filtered);
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
        className={`relative bg-white max-w-3xl w-full ${
          totalSpeaker?.length < 2 ? "h-fit" : "h-full"
        } rounded-lg z-20 overflow-y-auto`}
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-black-primary w-full px-6 py-6">
          Add Schedule
        </h3>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 bg-gray-background py-6"
        >
          <div className="w-full grid grid-cols-1 gap-6">
            {/* Day & Date --> Selection */}
            <div className="w-full flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-lg">
              {/* Day */}
              <div className="w-full">
                <label htmlFor="flatName" className={labelClassNames}>
                  Day
                </label>
                <input
                  type="text"
                  id="flatName"
                  className={inputFieldClassNames}
                  placeholder="Day-01"
                  // {...register("flatName", { required: true })}
                />
                {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
              </div>
              {/* Date */}
              <div className="w-full">
                <label htmlFor="flatName" className={labelClassNames}>
                  Date
                </label>
                <DatePicker
                  selected={addScheduleDate}
                  onChange={(date) =>
                    setAddScheduleDate(date ? date : new Date())
                  }
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
              </div>
            </div>

            {/* Add Speaker::Field Group */}
            <div className="space-y-6 relative">
              {totalSpeaker?.map((speaker: SpeakerTypes) => (
                <div key={speaker?.id} className="w-full bg-white p-4 rounded-lg space-y-6">
                  {/* Title and Cross Icon */}
                  <div className="w-full flex items-center justify-between">
                    {/* Title */}
                    <h4 className="text-xl font-medium text-black-secondary">
                      Speaker Details
                    </h4>
                    {/* Cross::Button */}
                    <button onClick={() => handleDeleteSpeakerFields(speaker?.id)} className="p-1.5 rounded-full bg-gray-background cursor-pointer">
                      <RxCross2 className="text-2xl text-[#FDBA25]" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Speaker Name */}
                    <div className="w-full">
                      <label htmlFor="flatName" className={labelClassNames}>
                        Speaker Name
                      </label>
                      <input
                        type="text"
                        id="flatName"
                        className={inputFieldClassNames}
                        placeholder="Enter the speaker name"
                        // {...register("flatName", { required: true })}
                      />
                      {/* {errors.flatName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
                    </div>
                    {/* Profession */}
                    <div className="w-full">
                      <label htmlFor="tenantName" className={labelClassNames}>
                        Profession
                      </label>
                      <input
                        type="text"
                        id="tenantName"
                        className={inputFieldClassNames}
                        placeholder="Enter the profession name"
                        // {...register("tenantName", { required: true })}
                      />
                      {/* {errors.tenantName && (
            <span className="text-sm text-red-500">This field is required</span>
          )} */}
                    </div>
                    {/* Speaker Photo */}
                    <div>
                      <label htmlFor="flatName" className={labelClassNames}>
                        Speaker Photo
                      </label>
                      <input
                        type="file"
                        className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-4 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                      />
                    </div>
                    {/* Speaks Time */}
                    <div>
                      <label htmlFor="flatName" className={labelClassNames}>
                        Speaks Time
                      </label>
                      <TimePicker
                        onChange={onTimeStateChange}
                        value={timeValue}
                        className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Speaker::Button */}
            <button
              type="button"
              onClick={handleAddSpeakerFields}
              className="w-fit py-3 px-8 border-2 border-dashed border-gray-border text-lg text-black-normal rounded-lg cursor-pointer text-nowrap font-semibold flex justify-center items-center gap-2 mx-auto"
            >
              <span>Add Speaker</span> <FiPlus className="text-2xl" />
            </button>
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
