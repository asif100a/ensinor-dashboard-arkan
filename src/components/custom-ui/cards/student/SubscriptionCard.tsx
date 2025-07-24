import Image from "next/image";

const SubscriptionCard = ({ type }: { type: "active" | "previous" }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-black-normal">
            UX/UI Design
          </h2>
          <p className="text-sm text-black-primary mt-2">Monthly Plan</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-black-normal">199.00</p>
          <p className="text-base text-black-primary">Per Years</p>
        </div>
      </div>

      {/* Subscription Details */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-black-primary mb-2">
          Subscription Details
        </h3>
        <ul className="space-y-3 text-base text-gray-700">
          <li className="flex items-center gap-1.5">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            <span> Start Date: 28 Sep 2025</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            <span>End Date: 28 Sep 2026</span>
          </li>
        </ul>
      </div>

      {/* Features */}
      {type === "active" && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-black-primary mb-2">
            Features
          </h3>
          <ul className="space-y-2 text-lg text-black-secondary">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">▶</span>
              Up to 50 users
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">▶</span>5 training courses
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">▶</span>
              Basic analytics
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">▶</span>
              Email support
            </li>
          </ul>
        </div>
      )}

      <div className="mt-6 text-right">
        {type === "active" ? (
          <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-2 px-6 rounded-md cursor-pointer">
            Cancel Subscription
          </button>
        ) : (
          <button className="bg-[#E8EBEB] hover:cursor-no-drop text-[#606060] text-lg font-medium py-2 px-6 rounded-md cursor-pointer">
            Date Expire
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
