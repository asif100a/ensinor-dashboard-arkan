"use client";

import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { useMemo, useRef } from "react";

export default function CourseMedia() {
  const editor = useRef(null);
  // const [content, setContent] = useState("");
  console.log("editor :", editor);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Type course description...",
    }),
    []
  );
  console.log("config :", config);

  return (
    <div>
      <CardContent>
        <form className="text-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Course Media */}
          <div className="w-full col-span-2">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Course media
            </Label>

            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center w-full p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Upload course image here, or{" "}
                <span className="text-[#5F83FA]">Browse</span>
              </h2>

              <p className="mt-2 text-sm tracking-wide text-gray-500 dark:text-gray-400">
                Note: Only JPG, JPEG and PNG. Our suggested dimensions are 600px
                * 450px. Larger image will be cropped to 4:3 to fit our
                thumbnails/previews.
              </p>

              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          {/* Upload video */}
          <div className="w-full md:col-span-2">
            <div className="w-full">
              <Label htmlFor="phoneNumber" className=" text-lg">
                Upload video
              </Label>

              {/* File 1 */}
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="file"
                  className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-4 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                />
                {/* Play Button */}
                <button
                  type="button"
                  className={`w-fit text-nowrap focus:outline-none px-6 py-3.5 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg`}
                >
                  Play
                </button>
              </div>
              {/* File 2 */}
              <div className="flex items-center gap-4 mt-4">
                <input
                  type="file"
                  placeholder="Understanding Design Thinking & Process"
                  className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-4 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                />
                {/* Play Button */}
                <button
                  type="button"
                  className={`w-fit text-nowrap focus:outline-none px-6 py-3.5 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg`}
                >
                  Play
                </button>
              </div>
              {/* File 3 */}
              <div className="flex items-center gap-4 mt-4">
                <input
                  type="file"
                  placeholder="Define CIX Design"
                  className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-4 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                />
                {/* Play Button */}
                <button
                  type="button"
                  className={`w-fit text-nowrap focus:outline-none px-6 py-3.5 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg`}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
          {/* Video preview */}
          <div className="w-full max-h-[650px] lg:h-[500px] xl:h-[650px] col-span-2">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Video preview
            </Label>

            <video controls className="w-full h-full mt-2 rounded-lg">
              <source src="video.mp4" type="video/mp4" />
              <source src="video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <button type="button" className="col-span-2 w-full bg-yellow-primary text-black-primary text-lg font-medium py-3 rounded-md hover:bg-yellow-500 cursor-pointer">
            Save
          </button>
        </form>
      </CardContent>
    </div>
  );
}
