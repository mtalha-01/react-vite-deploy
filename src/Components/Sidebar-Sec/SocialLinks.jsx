import { Facebook, Instagram, Youtube, Whatsapp, Tiktok } from "../../assets";

const SocialLinks = () => (
  <div className="flex flex-col gap-6">
    <span className="font-inter font-semibold text-sm text-white">
      Sledujte nás
    </span>
    <div className="flex items-center gap-5">
      <Facebook className="text-white" />
      <Instagram className="text-white" />
      <Youtube className="text-white" />
      <Whatsapp className="text-white" />
      <Tiktok className="text-white" />
    </div>
  </div>
);

export default SocialLinks;
