import { Search } from "lucide-react";

const NewsletterForm = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex items-center gap-3 bg-white p-3 sm:p-4  flex-1">
        <input
          type="search"
          placeholder="Vaša e-mailová adresa"
          className="w-full bg-transparent outline-none placeholder-gray-400 focus:placeholder-gray-700 font-semibold text-sm sm:text-base"
        />
        <Search size={20} className="text-gray-400 shrink-0" />
      </div>

      <button className="bg-black w-full sm:w-auto px-6 sm:px-9 py-3 font-inter font-bold text-sm sm:text-base text-white whitespace-nowrap">
        Odoslať
      </button>
    </div>
  );
};

export default NewsletterForm;
