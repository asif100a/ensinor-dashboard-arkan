"use client";

import dynamic from "next/dynamic";

const DashboardClient = dynamic(() => import("@/components/pages/DashboardClient"), {
  ssr: false,
});

export default function DashboardPage() {
  return <DashboardClient />;
}
