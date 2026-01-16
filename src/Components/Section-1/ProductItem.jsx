import { Heart, Bin } from "../../assets";
import { ChevronDown } from "lucide-react";

const QUANTITY_OPTIONS = [1, 2, 3, 4, 5];

const QuantitySelector = () => (
  <div className="flex flex-col gap-2">
    <span className="font-inter font-medium text-xs">Zadajte množstvo tu</span>
    <div className="relative w-full lg:w-50">
      <select
        name="qty"
        id="qty"
        className="w-full appearance-none border-2 border-gray-300 px-4 py-3 pr-8 text-sm focus:outline-none focus:border-black focus:ring-0"
      >
        {QUANTITY_OPTIONS.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <ChevronDown />
      </div>
    </div>
  </div>
);

const SaveForLaterButton = () => (
  <button className="flex items-center gap-2 border-2 w-max px-3 py-2 cursor-pointer hover:text-white hover:bg-[#6a4ef5] transition-colors duration-300">
    <Heart />
    <span className="font-inter font-bold text-xs">Odložiť na neskôr</span>
  </button>
);

const ProductItem = ({ product }) => {
  const getImageClass = () => {
    if (product.id === 3) return "mx-0 md:mx-2 lg:mx-6";
    return "";
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.alt}
              className={`${getImageClass()} max-w-30 sm:max-w-35 md:max-w-full`}
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-7 items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-semibold text-lg">
                {product.name}
              </h3>
              <span className="font-inter font-medium text-base text-[#999999]">
                {product.details}
              </span>
            </div>
            <SaveForLaterButton />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-10 items-end">
          <div className="flex flex-col gap-2 w-full sm:w-auto items-end">
            <div className="flex flex-col sm:flex-row justify-end items-center gap-2">
              <div className={`font-inter font-bold ${product.priceColor}`}>
                <span>{product.price}</span>
              </div>
              <div className="flex items-center gap-4">
                {product.originalPrice && (
                  <div className="font-inter font-normal text-base text-[#999999] line-through decoration-1">
                    <span>{product.originalPrice}</span>
                  </div>
                )}
                <Bin className="cursor-pointer" />
              </div>
            </div>
            {product.discount && (
              <div className="text-right">
                <span className="font-inter font-medium text-xs text-[#f54e80]">
                  {product.discountText}
                </span>
              </div>
            )}
          </div>
          <div className="w-full sm:w-auto">
            <QuantitySelector />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#f5f5f5]" />
    </div>
  );
};

export default ProductItem;
