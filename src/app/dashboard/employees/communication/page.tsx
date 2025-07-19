import ChatUI from "@/components/(student-employee)/communication/ChatUI";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function Communication() {
  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Communication"
        description="Communicate with your friends, teachers, and stay connected."
        leftContent="null"
      />

      {/* Chat UI */}
      <ChatUI />
    </div>
  );
}
