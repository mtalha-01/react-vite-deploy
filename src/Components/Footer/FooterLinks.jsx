import ContactSection from "./ContactSection";
import SocialSection from "./SocialSection";
import LinksColumn from "./LinksColumn";

const FooterLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
      {/* Left side */}
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
        <ContactSection />
        <SocialSection />
      </div>

      {/* Right side */}
      <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16">
        <LinksColumn
          title="Customer service"
          links={[
            "Kontaktujte nás",
            "FAQs",
            "Vrátenie zásielky",
            "Doručenie",
            "Sledovanie zásielky",
            "",
          ]}
        />

        <LinksColumn
          title="Iné"
          links={[
            "Iné iné a niečo iné",
            "Iné iné a niečo iné",
            "Iné iné iné",
            "Iné iné iné",
          ]}
        />

        <LinksColumn title="Mobilecare" links={["O nás", "Blog", "Kariéra"]} />

        <LinksColumn
          title="Členstvo, zľavy a akcie"
          links={["Odporuč nás a dostaň zľavu 10%", "Vernostný program"]}
        />
      </div>
    </div>
  );
};

export default FooterLinks;
