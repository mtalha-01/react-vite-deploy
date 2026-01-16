import BrandInfo from "./BrandInfo";
import DiscountBox from "./DiscountBox";

const FooterTop = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
      <BrandInfo />
      <DiscountBox />
    </div>
  );
};

export default FooterTop;
