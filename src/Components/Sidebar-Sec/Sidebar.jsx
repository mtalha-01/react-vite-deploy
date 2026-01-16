import { Logo, Cross, Tag, Whiteheart, Close, RightArrow } from "../../assets";
import iPhone from "../../assets/images/iphone-sm.png";
import AppleAirPod from "../../assets/images/airpods-sm.png";
import macBook from "../../assets/images/macBook-sm.png";
import iPad from "../../assets/images/iPad-sm.png";
import Smarthome from "../../assets/images/smartHome-sm.png";
import cable from "../../assets/images/cable-sm.png";
import game from "../../assets/images/game-sm.png";
import smartWatch from "../../assets/images/smartWatch-sm.png";
import pc from "../../assets/images/pc-sm.png";
import led from "../../assets/images/led-sm.png";
import discountImage from "../../assets/images/discount-img.png";
import discountImagePhn from "../../assets/images/discount-image-2.png";
import { useEffect, useState } from "react";

// Import components
import SidebarItem from "../Sidebar-Sec/SidebarItem";
import BlackSidebarItem from "../Sidebar-Sec/BlackSidebarItem";
import SpecialItem from "../Sidebar-Sec/SpecialItem";
import SocialLinks from "../Sidebar-Sec/SocialLinks";
import FooterLinks from "../Sidebar-Sec/FooterLinks";
import MacSectionItem from "../Sidebar-Sec/MacSectionItem";

// Constants
const textClassBlk =
  "text-black font-inter font-semibold text-base cursor-pointer group-hover:underline transition-all duration-200";
const arrowBaseClass = "w-7 h-7 flex justify-center items-center";
const arrowActiveClass = "bg-amber-50 scale-125 origin-center";
const activeTextClass = "text-white font-inter font-bold text-base opacity-100";
const blkTextClass = "text-black font-inter font-bold text-base";
const arrowBlkClass = "bg-black text-white scale-125 origin-center";
const textClass =
  "text-white font-inter font-semibold text-base opacity-70 cursor-pointer group-hover:underline transition-all duration-200";

const items = [
  "Všetky kategórie",
  "IPhone",
  "Apple AirPods",
  "Macbook",
  "IPad",
  "Apple Watch",
  "Príslušenstvo",
];
const NAJ_INDEX = items.length;

const blkItems = [
  { label: "iPhone", icon: iPhone },
  { label: "Apple AirPods", icon: AppleAirPod },
  { label: "Macbook", icon: macBook },
  { label: "iPad", icon: iPad },
  { label: "Smart Watch", icon: smartWatch },
  { label: "Príslušenstvo", icon: cable },
  { label: "Herná zóna", icon: game },
  { label: "Smart Home", icon: Smarthome },
  { label: "PC", icon: pc },
  { label: "Elektronika", icon: led },
];

const specialItems = [
  {
    icon: Cross,
    text: "Najnovšie",
    tagText: "Novinka",
    tagBg: "bg-[#D0FF16]",
    tagTextColor: "text-black",
  },
  {
    icon: Tag,
    text: "Zľavy",
    tagText: "Výpredaj",
    tagBg: "bg-[#f54e80]",
    tagTextColor: "text-white",
  },
];

const macItems = [
  {
    title: "Air",
    subItems: ["Pro", "iMac 24”", "Mini"],
  },
  {
    title: "Studio",
    subItems: ["Mac Pro", "Displeje", "Doplnky pre Mac"],
  },
];

function Sidebar({ setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeBlkIndex, setActiveBlkIndex] = useState(null);
  const [activeMacIndex, setActiveMacIndex] = useState(null);
  const [boldStates, setBoldStates] = useState([false, false, false]);
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveBlkIndex(null);
    setActiveMacIndex(null);
  };

  const handleBlkItemClick = (index) => {
    setActiveBlkIndex(activeBlkIndex === index ? null : index);
  };

  const handleMacItemClick = (index) => {
    setActiveMacIndex(activeMacIndex === index ? null : index);
  };

  const toggleBold = (index) => {
    setBoldStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  console.log(activeIndex, "activeIndex");

  return (
    <div className="flex">
      {/* Left Column - Purple Sidebar */}
      <div className="w-[30vw]">
        <div className="w-full min-h-screen bg-[#6A4EF5] px-10 py-12">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <Logo className="text-white" />
              <div
                onClick={() => setIsOpen(false)}
                className="border-2 w-8 h-8 flex justify-center items-center cursor-pointer"
              >
                <Close />
              </div>
            </div>

            {/* Main Items */}
            <div className="flex flex-col gap-6 mt-4">
              {items.map((item, index) => (
                <SidebarItem
                  key={item}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  onItemClick={handleItemClick}
                  textClass={textClass}
                  activeTextClass={activeTextClass}
                  arrowBaseClass={arrowBaseClass}
                  arrowActiveClass={arrowActiveClass}
                />
              ))}
              <hr className="border-[#f54e80] opacity-15" />
            </div>

            {/* Special Section */}
            <div className="flex flex-col gap-6">
              {/* Najpredávanejšie */}
              <SidebarItem
                item="Najpredávanejšie"
                index={NAJ_INDEX}
                activeIndex={activeIndex}
                onItemClick={handleItemClick}
                textClass={textClass}
                activeTextClass={activeTextClass}
                arrowBaseClass={arrowBaseClass}
                arrowActiveClass={arrowActiveClass}
              />

              {/* Special Items */}
              {specialItems.map((specialItem, index) => (
                <SpecialItem
                  key={specialItem.text}
                  icon={specialItem.icon}
                  text={specialItem.text}
                  tagText={specialItem.tagText}
                  tagBg={specialItem.tagBg}
                  tagTextColor={specialItem.tagTextColor}
                  boldState={boldStates[index]}
                  onToggle={toggleBold}
                  index={index}
                />
              ))}
              <hr className="border-[#f54e80] opacity-15" />
            </div>

            {/* Footer Links */}
            <FooterLinks />

            {/* Favorites */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Whiteheart />
                <span
                  onClick={() => toggleBold(2)}
                  className={`${
                    boldStates[2] ? "font-bold text-white" : textClass
                  }`}
                >
                  Obľúbené produkty
                </span>
              </div>
              <hr className="border-[#f54e80] opacity-15" />
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Middle Column - White Sidebar */}

      <div
        className={`bg-white overflow-hidden transition-[width] duration-1200 ease-in-out
    ${activeIndex !== null ? "w-[30vw]" : "w-0"}`}
      >
        <div
          className={`px-10 py-12 transform origin-left transition-all duration-200 ease-out
      ${
        activeIndex !== null
          ? "scale-x-100 opacity-100 translate-x-0"
          : "scale-x-95 opacity-0 -translate-x-2"
      }`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <h2 className="font-inter font-bold text-2xl text-[#6A4EF5]">
                Všetky kategórie
              </h2>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              {blkItems.map((item, index) => (
                <BlackSidebarItem
                  key={item.label}
                  item={item}
                  index={index}
                  activeIndex={activeBlkIndex}
                  onItemClick={handleBlkItemClick}
                  textClassBlk={textClassBlk}
                  blkTextClass={blkTextClass}
                  arrowBaseClass={arrowBaseClass}
                  arrowBlkClass={arrowBlkClass}
                />
              ))}
            </div>
          </div>
          <div className="relative w-84 h-62.25 overflow-hidden mt-10">
            <img
              src={discountImage}
              alt="img-1"
              className={`
      absolute inset-0 w-full h-full object-cover
      transition-all duration-700 ease-in-out
      ${showFirst ? "opacity-100 scale-100" : "opacity-0 scale-105"}
    `}
            />

            <img
              src={discountImagePhn}
              alt="img-2"
              className={`
      absolute inset-0 w-full h-full object-cover
      transition-all duration-700 ease-in-out
      ${showFirst ? "opacity-0 scale-105" : "opacity-100 scale-100"}
    `}
            />
          </div>
        </div>
      </div>

      {/* Right Column - Mac Section */}

      <div
        className={` bg-white overflow-hidden transition-[width] duration-1200 ease-in-out
       ${activeBlkIndex !== null ? "w-[30vw]" : "w-0"}`}
      >
        <div
          className={`px-10 py-12 h-full border-l border-gray-200 transform origin-left transition-all duration-200 ease-out
      ${
        activeBlkIndex !== null
          ? "scale-x-100 opacity-100 translate-x-0"
          : "scale-x-95 opacity-0 -translate-x-2"
      }`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <h2 className="font-inter font-bold text-2xl text-[#6A4EF5]">
                MacBook
              </h2>
            </div>
            <div className="flex justify-between items-center px-3 py-2 hover:bg-[#d5ccff] transition-all duration-300 group mt-4 cursor-pointer">
              <span className="font-inter font-bold text-sm group-hover:text-[#6A4EF5]">
                Zobraziť všetko
              </span>
              <RightArrow className="w-5 h-5 fill-current text-black group-hover:text-black" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {macItems.map((macItem, index) => (
              <MacSectionItem
                key={macItem.title}
                title={macItem.title}
                index={index}
                activeIndex={activeMacIndex}
                onItemClick={handleMacItemClick}
                subItems={macItem.subItems}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
