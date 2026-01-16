import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pro14 from "../../assets/images/14pro.png";
import macBook from "../../assets/images/MacBook-Pro-16.png";
import airPodsPro from "../../assets/images/ airpods-pro.png";
import backPhoneImg from "../../assets/images/17ProBack.webp";
import laptopBackImg from "../../assets/images/laptop-back.webp";
import airPodBackImg from "../../assets/images/Pods-back.webp";

import { AnimatedHeart, Plus, Tick, SmallArrow } from "../../assets";

const Carousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    { front: pro14, back: backPhoneImg, title: "iPhone 17 PRO (2023)" },
    { front: macBook, back: laptopBackImg, title: "MacBook Pro 16" },
    { front: airPodsPro, back: airPodBackImg, title: "AirPods Pro" },
    { front: pro14, back: backPhoneImg, title: "iPhone 17 PRO (2023)" },
    { front: macBook, back: laptopBackImg, title: "MacBook Pro 16" },
    { front: airPodsPro, back: airPodBackImg, title: "AirPods Pro" },
  ];

  // Per-slide state for heart and Quick Buy open/added
  const [likedStates, setLikedStates] = useState(slides.map(() => false));
  const [poppedStates, setPoppedStates] = useState(slides.map(() => false));
  const [openStates, setOpenStates] = useState(slides.map(() => false));
  const [addedStates, setAddedStates] = useState(slides.map(() => false));
  const [selectedGB, setSelectedGB] = useState(slides.map(() => null));

  const toggleHeart = (index) => {
    const newLiked = [...likedStates];
    const newPopped = [...poppedStates];
    newLiked[index] = !newLiked[index];
    newPopped[index] = true;
    setLikedStates(newLiked);
    setPoppedStates(newPopped);
    setTimeout(() => {
      const resetPopped = [...newPopped];
      resetPopped[index] = false;
      setPoppedStates(resetPopped);
    }, 150);
  };

  const toggleQuickBuy = (index) => {
    const newOpen = [...openStates];
    const newAdded = [...addedStates];

    if (newAdded[index]) {
      newAdded[index] = false;
      newOpen[index] = true;
    } else {
      newOpen[index] = !newOpen[index];
    }

    setOpenStates(newOpen);
    setAddedStates(newAdded);
  };

  const handleGBClick = (e, index, gb) => {
    e.stopPropagation();

    const newAdded = [...addedStates];
    const newOpen = [...openStates];
    const newSelected = [...selectedGB];

    newAdded[index] = true;
    newOpen[index] = false;
    newSelected[index] = gb;

    setAddedStates(newAdded);
    setOpenStates(newOpen);
    setSelectedGB(newSelected);
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((item, index) => (
          <div key={index}>
            <div className="flex justify-start">
              <div className="w-80 relative overflow-hidden">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div>
                      {index < 2 && (
                        <span className="font-inter font-semibold text-xs bg-[#D0FF16] px-1 py-0.5">
                          Novinka
                        </span>
                      )}
                    </div>
                    <AnimatedHeart
                      onClick={() => toggleHeart(index)}
                      className={`w-7 h-7 cursor-pointer transition-transform duration-150 hover:animate-wiggle
                        ${
                          likedStates[index]
                            ? "fill-[#6A4EF5] stroke-transparent"
                            : "fill-white stroke-black"
                        }
                        ${poppedStates[index] ? "scale-125" : "scale-100"}
                      `}
                    />
                  </div>

                  <div className="group relative mt-6 h-50 flex justify-center items-center">
                    <img
                      src={item.front}
                      alt="front"
                      className="absolute transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-0"
                    />
                    <img
                      src={item.back}
                      alt="back"
                      className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-3"
                    />

                    <div
                      onClick={() => toggleQuickBuy(index)}
                      className={`absolute top-40 w-70 overflow-hidden flex flex-col justify-center transition-all duration-300 opacity-0 group-hover:opacity-100
                    bg-black p-2 text-white font-semibold cursor-pointer
                    ${openStates[index] ? "h-21.25" : "h-12"}`}
                    >
                      {addedStates[index] ? (
                        <div className="flex items-center gap-2 justify-center">
                          <span>
                            {selectedGB[index]
                              ? `Pridané do košíka`
                              : "Pridané"}
                          </span>
                          <Tick />
                        </div>
                      ) : !openStates[index] ? (
                        <div className="flex justify-center items-center gap-2 pt-1">
                          <Plus />
                          <span>
                            {selectedGB[index]
                              ? selectedGB[index]
                              : "Rýchly nákup"}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3 select-none">
                          <div className="text-xs flex justify-between gap-2 font-normal flex-wrap">
                            {["64GB", "128GB", "256GB", "512GB"].map((gb) => (
                              <span
                                key={gb}
                                onClick={(e) => handleGBClick(e, index, gb)}
                                className="p-1 hover:bg-gray-800"
                              >
                                {gb}
                              </span>
                            ))}
                          </div>

                          <div className="flex justify-center text-xs gap-8 font-normal">
                            <span
                              onClick={(e) => handleGBClick(e, index, "1TB")}
                              className="p-1 hover:bg-gray-800"
                            >
                              1TB
                            </span>
                            <span className="line-through p-1">2TB</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mt-14">
                    <span className="font-inter font-semibold text-base">
                      {item.title}
                    </span>
                    <span className="font-inter font-medium text-sm text-[#7b7b7b]">
                      Smartfóny
                    </span>
                    <span className="font-inter font-semibold text-lg">
                      1299 €
                    </span>

                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-4 h-4 rounded-full bg-[#F4E8CE]"></div>
                      <div className="w-4 h-4 rounded-full bg-[#594F63]"></div>
                      <div className="w-4 h-4 rounded-full bg-[#F0F2F2]"></div>
                      <div className="w-4 h-4 rounded-full bg-[#403E3D]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-end items-center mt-6">
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="w-10 h-10 bg-white border-2 flex justify-center items-center transition hover:bg-[#6A4EF5]"
        >
          <SmallArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
