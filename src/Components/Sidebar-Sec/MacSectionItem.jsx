import { RightArrow } from "../../assets";

const textClassBlk =
  "text-black font-inter font-semibold text-base cursor-pointer group-hover:underline transition-all duration-200";
const arrowBaseClass = "w-7 h-7 flex justify-center items-center";
const blkTextClass = "text-black font-inter font-bold text-base";
const arrowBlkClass = "bg-black text-white scale-125 origin-center";

const MacSectionItem = ({
  title,
  index,
  activeIndex,
  onItemClick,
  subItems = [],
}) => {
  const isActive = activeIndex === index;

  return (
    <>
      <div
        className="flex justify-between items-center group mt-5 cursor-pointer"
        onClick={() => onItemClick(index)}
      >
        <span
          className={`transition-all duration-200 ${
            isActive ? blkTextClass : textClassBlk
          }`}
        >
          {title}
        </span>
        <div className={arrowBaseClass}>
          <div
            className={`flex justify-center items-center px-2.5 py-2 transition-all duration-200 ${
              isActive ? arrowBlkClass : "group-hover:text-[#6A4EF5]"
            }`}
          >
            <RightArrow />
          </div>
        </div>
      </div>
      {subItems.length > 0 && (
        <div className="flex flex-col gap-6 font-inter font-normal text-base">
          {subItems.map((subItem, idx) => (
            <span
              key={idx}
              className="cursor-pointer hover:underline hover:font-semibold transition-all duration-200"
            >
              {subItem}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default MacSectionItem;
