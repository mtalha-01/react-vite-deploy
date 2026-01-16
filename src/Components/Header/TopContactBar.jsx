const TopContactBar = () => {
  return (
    <div className="bg-black px-2 sm:px-4 md:px-8 py-1 text-xs sm:text-xs  font-semibold text-[#7b7b7b]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
        <span>Pomoc & kontakt</span>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <span>Rastislavova 68, Košice</span>
          <span>+421 919 215 491</span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
