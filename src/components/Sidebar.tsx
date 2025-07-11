"use client";

import {
  businessInstructorLinks,
  employeeLinks,
  instructorLinks,
  studentLinks,
} from "@/lib/links";
import { SidebarLink, UserRole } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkComponentProps {
  links: SidebarLink[];
}

export default function Sidebar() {
  const userRole: UserRole = "businessInstructor"; // This should be dynamically set based on the logged-in user

  return (
    <aside className="w-full h-screen overflow-y-auto md:w-[300px] bg-white p-6 flex flex-col shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-between mb-6">
        <Image
          src="/images/logo.svg"
          alt="User"
          width={228}
          height={64}
          className="w-[228px] h-16"
        />
      </div>

      <nav className="flex-1 flex flex-col justify-between gap-6">
        {/* Top Links */}
        <ul className="space-y-8">
          {/* Student Links */}
          {userRole === ("student" as UserRole) && (
            <LinkComponent links={studentLinks} />
          )}
          {/* Instructor Links */}
          {userRole === ("instructor" as UserRole) && (
            <LinkComponent links={instructorLinks} />
          )}
          {/* Employee Links */}
          {userRole === ("employee" as UserRole) && (
            <LinkComponent links={employeeLinks} />
          )}
          {/* Employee Links */}
          {userRole === ("businessInstructor" as UserRole) && (
            <LinkComponent links={businessInstructorLinks} />
          )}
        </ul>

        {/* Bottom Link */}
        <div>
          <button
            className={`w-full text-left px-6 py-3.5 border border-yellow-primary flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
          >
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

function LinkComponent({ links }: LinkComponentProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: SidebarLink) => (
        <li key={link.name}>
          <Link href={link.url}>
            <button
              className={`w-full text-left px-6 py-3.5 ${
                link.url === pathname
                  ? "bg-yellow-primary"
                  : "bg-transparent hover:bg-hover-link"
              } flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
              <span>{link.name}</span>
            </button>
          </Link>
        </li>
      ))}
    </>
  );
}
