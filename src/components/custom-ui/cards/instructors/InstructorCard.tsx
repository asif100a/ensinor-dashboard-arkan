import Image from "next/image";
import React from "react";

const InstructorCard = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
      {/* Image */}
      <div className="min-w-[168px] flex justify-center md:justify-start">
        <Image
          src="/images/dashboard/instructor.png"
          alt="Instructor"
          width={168}
          height={180}
          className="w-[168px] h-[180px] rounded-md"
        />
      </div>

      {/* Info Section */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold">Muskan Tanaz</h2>
        <p className="text-gray-500 mb-4">UX/UI Designer</p>

        {/* Bio */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Bio</h3>
          <p className="text-gray-700">
            Get to know our instructors better. This page provides detailed
            information about each instructor&apos;s background, expertise, courses
            offered, and experience. Discover their qualifications, professional
            journey, certifications, and read feedback from students who have
            learned under their guidance. Whether you&apos;re choosing a course or
            exploring learning paths, understanding your instructor helps build
            trust and ensures a better learning experience.
          </p>
        </div>

        {/* Education / Experience / Skills */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="w-full space-y-2">
            <h4 className="font-semibold text-gray-800 text-lg">Education</h4>
            <div>
              <p className="text-gray-700">University of Dhaka</p>
              <p className="text-gray-500 text-sm">Bachelor in UX/UI Design</p>
            </div>
          </div>
          {/* Experience */}
          <div className="w-full space-y-2">
            <h4 className="font-semibold text-gray-800 text-lg">Experience</h4>
            <p className="text-gray-700">5 Years</p>
          </div>
          {/* Skills */}
          <div className="w-full space-y-2">
            <h4 className="font-semibold text-gray-800 text-lg">Skills</h4>
            <div className="w-full grid grid-cols-3 gap-2 mt-1">
              {["Graphic design", "Web design", "UX/UI design"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-sm text-nowrap w-full px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <div className="w-full grid grid-cols-3 gap-2 mt-2">
              {["Graphic design", "Web design", "UX/UI design"].map(
                (skill, i) => (
                  <span
                    key={`copy-${i}`}
                    className="bg-gray-100 text-gray-700 text-sm text-nowrap w-full px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div className="w-full space-y-2">
              <h4 className="font-semibold text-gray-800">Contact</h4>
              <p className="text-gray-700">Phone: +8801256-5264</p>
              <p className="text-gray-700">
                Email: muskantanaz@gmail.com
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-yellow-primary text-black font-semibold py-2 px-6 rounded-md cursor-pointer hover:bg-yellow-500">
                Accept
              </button>
              <button className="border border-yellow-primary text-black font-semibold py-2 px-6 rounded-md cursor-pointer hover:bg-yellow-100">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
