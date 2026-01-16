import {
  Van,
  Visa,
  MasterYellow,
  MasterBlue,
  AmexCard,
  GPay,
  ApplePay,
  PayPal,
} from "../../assets";

const PAYMENT_METHODS = [
  { icon: Visa, key: "visa" },
  { icon: MasterYellow, key: "master-yellow" },
  { icon: MasterBlue, key: "master-blue" },
  { icon: AmexCard, key: "amex" },
  { icon: GPay, key: "gpay" },
  { icon: ApplePay, key: "applepay" },
  { icon: PayPal, key: "paypal" },
];

const CustomCheckbox = () => (
  <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 border-2 border-black flex justify-center items-center bg-white peer-checked:bg-black transition-colors duration-200">
      <svg
        className="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 8"
        fill="white"
      >
        <path d="M11.033.408a.75.75 0 0 0-1.065 0L4.38 6.003 2.033 3.648A.766.766 0 1 0 .968 4.75l2.88 2.88a.75.75 0 0 0 1.065 0l6.12-6.12a.75.75 0 0 0 0-1.102" />
      </svg>
    </div>
  </label>
);

const ActionButton = ({ children, primary = false }) => {
  const baseClass =
    "flex-1 font-inter font-bold text-base border-2 border-black p-3 cursor-pointer hover:border-[#6a4ef5] hover:text-white hover:bg-[#6a4ef5] transition-colors duration-300";
  const primaryClass = "bg-black text-white";

  return (
    <button className={`${baseClass} ${primary ? primaryClass : ""}`}>
      {children}
    </button>
  );
};

const OrderSummary = () => {
  return (
    <div className="w-full border-2 border-[#F5F5F5]">
      {/* Delivery Info */}
      <div className="bg-[#F5F5F5] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-5 gap-3 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-6">
          <Van />
          <span>Doručíme</span>
        </div>
        <div className="font-inter font-medium text-sm text-[#999999]">
          <span>Pon, 19. 8 - Ut, 20. 8.</span>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Payment Methods */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 sm:gap-0">
          <span className="font-inter font-semibold text-sm whitespace-nowrap">
            Akceptujeme platby
          </span>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2">
            {PAYMENT_METHODS.map((method) => (
              <method.icon key={method.key} />
            ))}
          </div>
        </div>

        {/* Voucher Input */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <span className="font-inter font-normal text-lg whitespace-nowrap">
            Voucher
          </span>
          <div className="w-full sm:w-auto flex items-center gap-3 border-2 border-[#f5f5f5] bg-white p-3">
            <input
              type="text"
              placeholder="Zľavový kód"
              className="w-full bg-transparent outline-none placeholder-gray-400 focus:placeholder-gray-700 font-medium text-base text-center sm:text-left"
            />
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="font-inter font-medium text-lg flex justify-between pt-2 sm:pt-4">
            <span>Spolu položky</span>
            <span>3778 €</span>
          </div>
          <div className="font-inter font-medium text-lg flex justify-between">
            <span>Doprava:</span>
            <span>0 €</span>
          </div>
          <hr className="border-t-2 border-[#f5f5f5]" />
        </div>

        {/* Total */}
        <div className="font-inter font-medium text-lg flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
          <div className="flex gap-1 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <span>Spolu:</span>
            <span className="before:content-['('] after:content-[')'] text-[#999999]">
              vrátane DPH
            </span>
          </div>
          <span className="font-inter font-bold text-2xl">3778 €</span>
        </div>

        {/* Show Price Without Tax */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <CustomCheckbox />
          <span className="font-inter font-medium text-base text-[#7C7C7C]">
            zobraziť cenu bez DPH
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center pt-2">
          <ActionButton>Pokračovať v nákupe</ActionButton>
          <ActionButton primary>Do pokladne</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
