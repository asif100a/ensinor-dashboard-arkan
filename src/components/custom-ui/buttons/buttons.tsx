import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

interface SearchFormProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
interface SimpleSearchFormProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = ({handleSearch}: SearchFormProps) => {
  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-[550px] h-fit flex justify-center items-center relative"
    >
      <IoSearch className="text-xl text-[#262626] absolute left-4" />
      <input
        type="text"
        placeholder="Search Courses"
        className="w-full h-[60px] px-4 py-2 pl-12 bg-white text-[#262626] placeholder:text-[#909090] rounded-l-full border border-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <button
        type="submit"
        className="w-[145px] h-[60px] bg-yellow-primary text-[#262626] font-semibold px-6 py-2 rounded-r-full hover:bg-yellow-500 transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export const DownloadButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
    >
      Download PDF
      <MdOutlineFileDownload className="text-2xl" />
    </button>
  );
};

export const ViewCertificationButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-white rounded-lg flex items-center gap-2.5`}
    >
      <Image
        src="/icons/certificate.svg"
        alt="Calendar"
        width={23}
        height={23}
      />
      <span> View Certification</span>
    </button>
  );
};

export const CreateNewCourseButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
    >
      Create a New Course
    </button>
  );
};

export const SimpleSearchForm = ({ handleSearch }: SimpleSearchFormProps) => {
  return (
    <form
      onSubmit={handleSearch}
      className="w-full min-w-[274px] max-w-[300px] h-fit flex justify-center items-center relative"
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full h-auto px-4 py-3 bg-gray-background text-[#262626] placeholder:text-[#909090] rounded-lg border border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <IoSearch className="text-xl text-[#909090] absolute right-4" />
    </form>
  );
};
