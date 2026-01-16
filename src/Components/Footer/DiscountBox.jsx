import { Discount } from "../../assets";
import NewsletterForm from "./NewsletterForm";

const DiscountBox = () => {
  return (
    <div className="w-full max-w-184 h-auto bg-[#6A4EF5] p-4 sm:p-6 md:p-8">
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex justify-between items-center gap-4">
            <h3 className="font-inter font-bold text-2xl sm:text-3xl md:text-[40px] text-white leading-tight">
              Získaj 10% zľavu
            </h3>

            <Discount className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto" />
          </div>

          <p className="font-inter font-semibold text-sm sm:text-base text-[#d5ccff]">
            Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
            pripojíte k našej komunite odberateľov noviniek!
          </p>
        </div>

        <NewsletterForm />
      </div>
    </div>
  );
};

export default DiscountBox;
