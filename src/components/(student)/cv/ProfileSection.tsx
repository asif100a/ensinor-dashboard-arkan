import Image from "next/image";
import React from "react";
import { FiEdit, FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlGlobe, SlLocationPin, SlSocialLinkedin } from "react-icons/sl";

const contacts = [
  { icon: FiPhoneCall, text: "+880 1772177831" },
  { icon: GoMail, text: "shahidhasan@gmail.com" },
  { icon: SlSocialLinkedin, text: "www.linkedin.com" },
  { icon: SlGlobe, text: "www.shahidhasan.com" },
  { icon: SlLocationPin, text: "Modhubag, Dhaka-1207" },
];

export default function ProfileSection() {
  return (
    <section className="w-full bg-white p-6 rounded-xl space-y-8">
      <div className="space-y-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/dashboard/user.jpg"
              alt="User"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />

            <div className="space-y-[5px]">
              <h3 className="text-xl font-medium text-black-primary">
                Shahid Hasan
              </h3>
              <p className="text-sm font-normal text-black-primary">
                UI/UX Design
              </p>
            </div>
          </div>

          <button
            className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
          >
            Edit
            <FiEdit className="text-2xl" />
          </button>
        </div>
        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
          {contacts.map((contact) => (
            <p key={contact.text} className="flex items-center gap-2">
              {<contact.icon className="text-xl" />}
              <span className="text-sm font-normal text-black-primary">
                {contact.text}
              </span>
            </p>
          ))}
        </div>
      </div>
      {/* About me */}
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-black-primary">About me</h3>
        <p className="text-sm font-normal text-black-secondary">
          Hello, my name is POLASH I am a professional graphic designer with
          over 3 years of experience. I have much experience in designing
          T-Shirt, Product Packaging and stationary Design. I use Adobe
          Illustrator and Adobe Photoshop to design the graphics for you. Not
          only that, but I will provide high-quality work that will happy all my
          clients. Furthermore, I completed my 1 year diploma in graphic design.
          If you have work related to my skills, then contact me.
        </p>
      </div>
    </section>
  );
}
