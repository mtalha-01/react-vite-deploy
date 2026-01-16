import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import CountryBar from "./CountryBar";
import PaymentMethods from "./PaymentMethods";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-black mt-4 py-10 sm:py-14 md:py-18 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-14">
        <FooterTop />
        <FooterLinks />
        <CountryBar />
        <PaymentMethods />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
