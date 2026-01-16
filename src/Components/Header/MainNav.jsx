import {
  Tag,
  Cross,
  Ranch,
  Logo,
  AppleLogo,
  User,
  Whiteheart,
  Bag,
} from "../../assets";

const ICON_NAV = [
  { icon: Tag, label: "Výpredaj" },
  { icon: Cross, label: "Novinky" },
  { icon: Ranch, label: "MC Servis" },
];

const MainNav = () => {
  const navClass =
    "cursor-pointer hover:text-[#563cd6] transition-colors duration-300";

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 w-full">
      {/* Left icons */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-12 flex-1 text-white font-bold">
        {ICON_NAV.map(({ icon: Icon, label }) => (
          <button key={label} className="flex items-center gap-2">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className={navClass}>{label}</span>
          </button>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4 my-2 lg:my-0 flex-wrap">
        <Logo className="text-white" />
        <AppleLogo className="" />
      </div>

      {/* User icons */}
      <div className="flex gap-2 sm:gap-4 flex-1 items-center justify-start lg:justify-end flex-wrap">
        <User className="text-white w-5 sm:w-6" />
        <Whiteheart className="w-5 sm:w-6" />
        <Bag className="text-white w-5 sm:w-6" />
      </div>
    </div>
  );
};

export default MainNav;
