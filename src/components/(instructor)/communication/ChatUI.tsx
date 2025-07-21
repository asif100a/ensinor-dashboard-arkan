"use client";

import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const ChatUI = () => {
  const handleSearch = () => {
    console.log("Text searched");
  };

  // Handle Send Message
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message sent!");
  };

  return (
    <div className="flex gap-6 h-screen">
      {/* Sidebar */}
      <aside className="w-1/3 h-full max-w-xs bg-white rounded-xl overflow-y-auto">
        <div className="p-4">
          <SimpleSearchForm handleSearch={handleSearch} />
        </div>
        {/* Chat list */}
        <div className="space-y-2 p-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/dashboard/student.png"
                    alt="avatar"
                    width={80}
                    height={80}
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="text-base">
                    <p className="text-lg font-semibold text-black-primary">
                      Sahhid Hasan
                    </p>
                    <p className="text-black-normal">Emily: Okk Im in.</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-black-normal">
                  37mn ago
                </span>
              </div>
            ))}
        </div>
      </aside>

      {/* Chat window */}
      <main className="h-full flex-1 bg-white rounded-xl overflow-auto">
        <div className="h-full flex flex-col">
          {/* Chat header */}
          <div className="flex items-center space-x-4 p-4 bg-yellow-primary border-b">
            <Image
              src="/images/dashboard/student.png"
              alt="avatar"
              width={80}
              height={80}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold text-lg text-black-normal">
                Sahhid Hasan
              </p>
              <p className="text-sm text-black-normal flex items-center">
                Active <FaCircle className="ml-1 text-green-500" size={8} />
              </p>
            </div>
          </div>

          <div className="flex-1 h-full flex flex-col justify-between">
            {/* Chat messages */}
            <div className="h-full flex-1 p-4 space-y-4">
              {/* Message group */}
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col space-y-2 overflow-y-auto"
                  >
                    {/* Received message */}
                    <div className="flex items-start space-x-2">
                      <Image
                        src="/images/dashboard/student.png"
                        alt="avatar"
                        width={60}
                        height={60}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md text-sm text-black-normal">
                        Hi Jake, how are you? I saw on the app that we’ve
                        crossed paths several times this week
                      </div>
                    </div>

                    {/* Sent message */}
                    <div className="flex items-end justify-end space-x-2">
                      <div className="bg-yellow-secondary px-4 py-2 rounded-lg max-w-md text-sm text-black-normal">
                        Hi Jake, how are you?
                      </div>
                      <Image
                        src="/images/dashboard/user.jpg"
                        alt="avatar"
                        width={60}
                        height={60}
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Message input */}
            <div className="border-t px-4 py-6">
              <form
                onSubmit={handleSendMessage}
                className="w-full h-fit px-6 bg-gray-background rounded-lg border border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-yellow-500 flex justify-center items-center relative"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-auto py-3  text-[#262626] placeholder:text-[#909090] focus:outline-none"
                />
                <button type="submit" className="cursor-pointer">
                  <RiSendPlaneFill className="text-2xl text-yellow-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatUI;
