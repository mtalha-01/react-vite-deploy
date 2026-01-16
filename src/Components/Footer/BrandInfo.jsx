import { Logo } from "../../assets";

const BrandInfo = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Logo */}
      <Logo className="w-32 h-auto sm:w-40 md:w-52" />

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Heading */}
        <h3 className="font-inter font-bold text-2xl sm:text-3xl md:text-[40px] text-white leading-tight">
          Postaráme sa o vás
        </h3>

        {/* Text */}
        <div className="font-inter font-medium text-sm sm:text-base text-[#7b7b7b]">
          <p>Odomknite nekonečné možnosti s naším prémiovým</p>
          <p>výberom Apple produktov.</p>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
