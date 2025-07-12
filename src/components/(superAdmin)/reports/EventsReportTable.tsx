import React from "react";
import SectionHeader from "@/components/SectionHeader";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface BusinessTypes {
    eventName: string;
    date: string;
    registrations: number;
    attendance: number;
    satisfaction: number;
    revenue: number;
}

const tHeads: string[] = [
  "Event Name",
  "Date",
  "Registrations",
  "Attendance",
  "Satisfaction",
  "Revenue",
];

const revenues: BusinessTypes[] = [
  {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
   {
   eventName: "Education Conference",
   date: '28 Sep, 2025',
   registrations: 1520,
   attendance: 1275,
   satisfaction: 97,
   revenue: 18560
  },
];

export default function EventsReportTable() {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="Revenue Reports"
        description="Track revenue from courses, books. and events"
        leftContent="null"
      />

      <div className="overflow-hidden">
        <table className="min-w-full text-lg">
          {/* T Head */}
          <thead className="bg-gray-background rounded-xl py-2">
            <tr>
              {tHeads.map((head: string) => (
                <th
                  key={head}
                  scope="col"
                  className="py-3.5 px-4 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          {/* T Body */}
          <tbody className="">
            {revenues.map((revenue, idx: number) => (
              <tr key={idx} className="border-b border-[#606060]">
                {/* Event Name */}
                <td className="px-6 py-4">
                  <div>
                    <p>{revenue.eventName}</p>
                  </div>
                </td>
                {/* Date */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{revenue.date}</p>
                  </div>
                </td>
                {/* Registrations */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(revenue.registrations)}</p>
                  </div>
                </td>
                {/* Attendance */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(revenue.attendance)}</p>
                  </div>
                </td>
                {/* Satisfaction */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(revenue.satisfaction)}%</p>
                  </div>
                </td>
                {/* Revenue */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(revenue.revenue)}%</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
