import { RightArrow } from "../../assets";

const SidebarItem = ({
  item,
  index,
  activeIndex,
  onItemClick,
  textClass,
  activeTextClass,
  arrowBaseClass,
  arrowActiveClass,
}) => {
  const isActive = activeIndex === index;

  return (
    <div
      onClick={() => onItemClick(index)}
      className="flex justify-between items-center pr-0.5 group cursor-pointer"
    >
      <span
        className={`transition-all duration-200 ${
          isActive ? activeTextClass : textClass
        }`}
      >
        {item}
      </span>
      <div className={arrowBaseClass}>
        <div
          className={`transition-all duration-200 flex justify-center items-center px-2.5 py-2 ${
            isActive ? arrowActiveClass : `${textClass} group-hover:opacity-100`
          }`}
        >
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
