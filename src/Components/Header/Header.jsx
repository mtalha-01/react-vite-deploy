import TopContactBar from "./TopContactBar";
import TopLinksBar from "./TopLinksBar";
import PromoBar from "./PromoBar";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";

const Header = () => {
  return (
    <header className="font-inter">
      <TopContactBar />
      <TopLinksBar />
      <PromoBar />

      <div className="bg-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <MainNav />
          <BottomNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
