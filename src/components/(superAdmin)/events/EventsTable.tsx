import React from "react";
import SectionHeader from "@/components/SectionHeader";
import getFormatPrice from "../../../../utils/getFormatPrice";
import { RiInformationLine } from "react-icons/ri";
import { EventTypes } from "@/lib/types";

interface EventsTableProps {
  events: EventTypes[];
}

const tHeads: string[] = [
  "Event Name",
  "Type",
  "Date",
  "Location",
  "Organizer",
  "Attended",
  "Price",
  "Status",
  "Action",
];

export default function EventsTable({ events }: EventsTableProps) {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="All events"
        description="Manage and monitor all events on your platform"
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
            {events.map((event: EventTypes, idx: number) => (
              <tr key={idx} className="border-b border-[#606060]">
                {/* Event Name */}
                <td className="px-6 py-4">
                  <div>
                    <p>{event.eventName}</p>
                  </div>
                </td>
                {/* Type */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{event.type}</p>
                  </div>
                </td>
                {/* Date */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{event.date}</p>
                  </div>
                </td>
                {/* Location */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">
                      {event.address}
                    </p>
                  </div>
                </td>
                {/* Organizer */}
                <td className="px-6 py-4">
                  <div>
                    <p>{event.organizer}</p>
                  </div>
                </td>
                {/* Attended */}
                <td className="px-6 py-4">
                  <div>
                    <p>{event.attendance}</p>
                  </div>
                </td>
                {/* Price */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">
                      ${getFormatPrice(event.price)}
                    </p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <p
                      className={`w-fit text-sm text-center px-3 py-1 rounded-sm ${
                        event.status === "Upcoming"
                          ? "bg-[#737373] text-white"
                          : "bg-[#a8a8a893] text-[#606060]"
                      }`}
                    >
                      {event.status}
                    </p>
                  </div>
                </td>
                {/* Action */}
                <td className="px-6 py-4">
                  <button className="cursor-pointer">
                    <RiInformationLine className="text-[26px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
