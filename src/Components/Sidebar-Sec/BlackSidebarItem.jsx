import { RightArrow } from "../../assets";

const BlackSidebarItem = ({
  item,
  index,
  activeIndex,
  onItemClick,
  textClassBlk,
  blkTextClass,
  arrowBaseClass,
  arrowBlkClass,
}) => {
  const isActive = activeIndex === index;

  return (
    <div
      onClick={() => onItemClick(index)}
      className="flex justify-between items-center group cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <img
          src={item.icon}
          alt={item.label}
          className="w-6 h-6 object-contain"
        />
        <span
          className={`transition-all duration-200 ${
            isActive ? blkTextClass : textClassBlk
          }`}
        >
          {item.label}
        </span>
      </div>
      <div className={arrowBaseClass}>
        <div
          className={`transition-all duration-200 flex justify-center items-center px-2.5 py-2 ${
            isActive
              ? arrowBlkClass
              : `${blkTextClass} group-hover:text-[#6A4EF5]`
          }`}
        >
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default BlackSidebarItem;
