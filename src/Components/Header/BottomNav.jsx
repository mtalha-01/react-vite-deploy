import { TextAlignEnd, Search } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Sidebar-Sec/Sidebar";

const NAV_ITEMS = [
  "iPhone",
  "iPad",
  "MacBook",
  "Apple Airpods",
  "Smarthome",
  "Príslušenstvo",
];

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const openSidebar = () => {
    setIsHide(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 20);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsHide(true);
    }, 1200);
  };

  const navClass =
    "cursor-pointer hover:text-[#563cd6] transition-colors duration-300";

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-4">
      <div className="flex gap-10 flex-col lg:flex-row  ">
        <div
          className="bg-white px-4 sm:px-6 py-2 flex items-center gap-2 text-nowrap sm:gap-3 font-bold cursor-pointer hover:bg-[#563cd6] hover:text-white transition w-full lg:w-auto justify-between"
          onClick={openSidebar}
        >
          <span>Všetky kategórie</span>
          <TextAlignEnd size={20} />
        </div>
        <div className="w-full flex space-x-25 gap-2 font-bold items-center text-white flex-wrap">
          {NAV_ITEMS.map((item) => (
            <span key={item} className={`${navClass} text-sm sm:text-base`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 min-w-50">
        <Search size={20} className="text-gray-400" />
        <input
          type="search"
          placeholder="Zadajte názov produktu"
          className="w-full bg-transparent outline-none placeholder-gray-400 focus:placeholder-gray-700 font-semibold text-sm sm:text-base"
        />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-1200 ease-in-out ${
          isOpen
            ? "bg-black/40 pointer-events-auto"
            : "bg-black/0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      {!isHide && (
        <div
          className={`fixed top-0 h-full bg-white z-50 max-w-[90vw] transition-[left] duration-1200 ease-in-out
           ${isOpen ? "left-0" : "-left-full"}`}
        >
          <Sidebar setIsOpen={closeSidebar} />
        </div>
      )}
    </div>
  );
};

export default BottomNav;
