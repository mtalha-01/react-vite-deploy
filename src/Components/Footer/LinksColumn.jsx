const LinksColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h4 className="font-inter font-semibold text-xs sm:text-sm text-white">
        {title}
      </h4>

      <div className="flex flex-col gap-3 sm:gap-4 font-inter font-normal text-xs sm:text-sm text-[#7b7b7b]">
        {links.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default LinksColumn;
