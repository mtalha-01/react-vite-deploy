const CountryBar = () => {
  const hoverText =
    "cursor-pointer hover:text-white transition-colors duration-300";

  return (
    <div className="flex flex-wrap justify-between items-center gap-3 sm:gap-0 font-inter font-bold text-lg sm:text-2xl md:text-[32px] text-[#7b7b7b]">
      <span className={hoverText}>Slovensko</span>
      <span className={hoverText}>Česká republika</span>
      <span className={hoverText}>România</span>
      <span className={hoverText}>Polska</span>
    </div>
  );
};

export default CountryBar;
