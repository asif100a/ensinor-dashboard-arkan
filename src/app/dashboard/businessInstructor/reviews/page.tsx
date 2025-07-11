import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";

export default function Reviews() {
  return (
    <div className="p-6 space-y-6">
      <div className="p-6 space-y-8 bg-white rounded-xl">
        {/* Section Header */}
        <SectionHeader
          title="Review List"
          description=""
          leftContent="simpleSearchForm"
          // options={{name: 'text'}}
        />

        {/* Review Cards */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="md:flex gap-4">
            <div className="md:shrink-0">
              <Image
                src="/images/dashboard/user.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="h-[60px] w-[60px] object-cover rounded-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="tracking-wide text-xl text-black-primary font-semibold ">
                      Shahiid Hasan
                    </h4>
                    <p className="block mt-1 text-black-secondary">
                      26 May 2025
                    </p>
                  </div>
                  <p className="text-black-secondary">
                    I recently visited The Green Lounge in Dhaka, and I was
                    really impressed! The ambiance was cozy yet modern, with a
                    lovely rooftop view that made the evening extra special. I
                    ordered the grilled chicken platter and a mojito — both were
                    delicious and well-presented.
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.844 1.416 8.257L12 18.897l-7.415 3.895 1.416-8.257-6.001-5.844 8.332-1.21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <form
                  // onSubmit={}
                  className="w-full h-fit flex items-center gap-4"
                >
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="w-full h-[60px] px-4 py-2 bg-gray-background text-[#262626] placeholder:text-[#909090] rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="submit"
                    className="w-fit h-[60px] bg-yellow-primary text-[#262626] font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
                  >
                    <FiSend className="text-2xl" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}
