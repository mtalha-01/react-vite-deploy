import { RightArrow } from "../../assets";
const textClass =
  "text-white font-inter font-semibold text-base opacity-70 cursor-pointer group-hover:underline transition-all duration-200";

const SpecialItem = ({
  icon: Icon,
  text,
  tagText,
  tagBg,
  tagTextColor,
  boldState,
  onToggle,
  index,
}) => {
  return (
    <div className="flex justify-between items-center pr-3.5 group">
      <div className="flex items-center gap-2">
        <Icon className={`${textClass} group-hover:text-black`} />
        <span
          onClick={() => onToggle(index)}
          className={`${boldState ? "font-bold text-white" : textClass}`}
        >
          {text}
        </span>
        <span
          className={`font-inter font-semibold text-xs ${tagBg} px-2 py-0.5 ${tagTextColor}`}
        >
          {tagText}
        </span>
      </div>
      <RightArrow className={`${textClass} group-hover:opacity-0`} />
    </div>
  );
};

export default SpecialItem;
