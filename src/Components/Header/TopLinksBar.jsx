const LINKS = [
  "Sledovanie zásielky",
  "Vrátenie tovaru",
  "O nás",
  "FAQ",
  "Blog",
];

const TopLinksBar = () => {
  return (
    <div className="bg-white px-2 sm:px-4 md:px-8 py-1 text-[10px] sm:text-xs font-semibold text-[#7b7b7b]">
      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        {LINKS.map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:underline whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopLinksBar;
