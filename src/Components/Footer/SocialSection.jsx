import { Facebook, Instagram, Youtube, Whatsapp, Tiktok } from "../../assets";

const SocialSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-inter font-semibold text-sm text-white">
        Sledujte nás
      </h4>

      <div className="flex items-center gap-4">
        <Facebook className="text-white" />
        <Instagram className="text-white" />
        <Youtube className="text-white" />
        <Whatsapp className="text-white" />
        <Tiktok className="text-white" />
      </div>
    </div>
  );
};

export default SocialSection;
