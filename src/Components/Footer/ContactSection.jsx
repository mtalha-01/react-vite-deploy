const ContactSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h4 className="font-inter font-semibold text-xs sm:text-sm text-white">
        Kontaktné údaje
      </h4>

      <div className="font-inter font-normal text-xs sm:text-sm text-[#7b7b7b] flex flex-col gap-3 sm:gap-4">
        <span>+421 919 215 491</span>
        <span>Rastislavova 68, Košice</span>
      </div>
    </div>
  );
};

export default ContactSection;
