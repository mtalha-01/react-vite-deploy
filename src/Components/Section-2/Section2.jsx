import { Star, Dot } from "../../assets";
import Carousel from "../Section-2/Carousel";

const Section2 = () => {
  return (
    <section className="px-12 pt-4 pb-12 ">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Dot
              className="absolute top-0.5 left-0.5 animate-dot-clockwise"
              style={{ animationDelay: "0s" }}
            />
            <Dot
              className="absolute top-0.5 right-0.5 animate-dot-clockwise"
              style={{ animationDelay: "1.25s" }}
            />
            <Dot
              className="absolute bottom-0.5 right-0.5 animate-dot-clockwise"
              style={{ animationDelay: "2.5s" }}
            />
            <Dot
              className="absolute bottom-0.5 left-0.5 animate-dot-clockwise"
              style={{ animationDelay: "3.75s" }}
            />
            <Star />
          </div>

          <h4 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl">
            Mohlo by vás zaujímať
          </h4>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Section2;
