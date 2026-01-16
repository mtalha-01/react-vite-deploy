import {
  Visa,
  MasterYellow,
  MasterBlue,
  AmexCard,
  GPay,
  ApplePay,
  PayPal,
} from "../../assets";

const PaymentMethods = () => {
  return (
    <div className="flex flex-wrap justify-end items-center gap-2 sm:gap-3 md:gap-4">
      <Visa className="w-10 h-auto sm:w-12 md:w-auto" />
      <MasterYellow className="w-10 h-auto sm:w-12 md:w-auto" />
      <MasterBlue className="w-10 h-auto sm:w-12 md:w-auto" />
      <AmexCard className="w-10 h-auto sm:w-12 md:w-auto" />
      <GPay className="w-10 h-auto sm:w-12 md:w-auto" />
      <ApplePay className="w-10 h-auto sm:w-12 md:w-auto" />
      <PayPal className="w-10 h-auto sm:w-12 md:w-auto" />
    </div>
  );
};

export default PaymentMethods;
