"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { getCurrentUser } from "../../../hooks/manageUser";
import { useRouter } from "next/navigation";
import { User } from "@/lib/types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/sign-in");
    }
    setUser(currentUser);
  }, [router]);
  // console.log("user: ", user);

  return (
    <div className="flex gap-0 h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "block" : "hidden lg:block"} hidden`}>
        <Sidebar userRole={user?.userRole || ""} />
      </div>
      {/* Sidebar for Small & Medium devices */}
      <div className={`${isSidebarOpen ? "block" : "hidden"} lg:hidden`}>
        {/* Popup Overlay */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-popup-overlay z-10"
        ></div>
        <div className="max-w-2/3 absolute z-20 border w-fit">
          {/* Cross button */}
          <div className="absolute right-3 top-3">
            <button
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              <RxCross1 className="text-xl" />
            </button>
          </div>

          <Sidebar userRole={user?.userRole || ""} />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <TopBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {children}
      </main>
    </div>
  );
}
