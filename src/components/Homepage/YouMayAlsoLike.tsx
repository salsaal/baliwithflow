import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage from "@/assets/images/youMayLikeImage.png";
import sliderImage2 from "@/assets/images/youMayLikeImage2.png";
import sliderImage3 from "@/assets/images/youMayLikeImage3.png";

import location from "@/assets/svgs/location-white.svg";
import duration from "@/assets/svgs/duration-white.svg";
import Link from "next/link";
import prevArrow from "@/assets/svgs/slider-prev-arrow.svg";
import nextArrow from "@/assets/svgs/slider-next-arrow.svg";

const ArrowLeft = (props: any) => {
  return (
    <div {...props}>
      <Image src={prevArrow} alt="prev" className="!max-w-[none]" />
    </div>
  );
};

const ArrowRight = (props: any) => {
  return (
    <div {...props}>
      <Image src={nextArrow} alt="next" className="!max-w-[none]" />
    </div>
  );
};
const Card = ({ data }: { data: any }) => {
  var settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="flex flex-col mx-4 max-sm:mx-0 max-sm:mr-4">
      <div className="rounded-xl overflow-hidden">
        <Slider {...settings}>
          {[1, 1, 1, 1].map((_, id) => (
            <Image
              key={id}
              src={data.image}
              alt="image"
              className="h-[380px] transition-all duration-300 hover:scale-110 cursor-pointer object-cover"
            />
          ))}
        </Slider>
      </div>
      <div className="px-2">
        <div className="w-full flex items-center mt-4 gap-2">
          <div className="flex px-4 py-[6px] bg-primary rounded-3xl">
            <Image src={location} alt="location" />
            <p className="text-[14px] text-white ml-2 ">{data.location}</p>
          </div>
          <div className="flex px-4 py-[6px] bg-[#407C59] rounded-3xl max-sm:whitespace-nowrap">
            <Image src={duration} alt="duration" />
            <p className="text-[14px] text-white ml-2 max-sm:mr-2">
              {data.tripType}
            </p>
          </div>
          <div className="flex px-4 py-[6px] bg-[#FDF3E8] rounded-3xl">
            <p className="text-[14px] text-primary ">{data.privacy}</p>
          </div>
        </div>
        <h2 className="text-[24px] font-semibold mt-2">{data.name}</h2>
        <h2 className="text-[22px]  mt-2 font-medium text-[#407C59]">
          {data.price}
        </h2>
        <p className="text-lg text-[#5A5A5A] my-2 line-clamp-3">
          {data.description}
        </p>
      </div>
      <div className="flex items-center mt-4 gap-8">
        <button className="px-5 py-3 bg-primary flex  text-white rounded-[15px] cursor-pointer">
          Book Escape
        </button>
        <Link
          href=""
          className="text-primary cursor-pointer border-b-1 border-b-primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
function YouMayAlsoLike() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const places = [
    {
      image: sliderImage2,
      location: "Cangu",
      tripType: "Half Day Trip",
      privacy: "Private",
      name: "Surf in Canggu",
      price: "From IDR 35,00,000.00/ person",
      description:
        "Wake up, grab your board and head to the beach while it's still quiet. This is yourmoment to catch your first wave — and do it with someone who knows these waters by heart.",
    },
    {
      image: sliderImage,
      location: "Cangu",
      tripType: "Half Day Trip",
      privacy: "Private/Group",
      name: "Balinese Healing in Retreat",
      price: "From IDR 60,00,000.00/ person",
      description:
        "You know that moment when you realise you've been carrying too much — in your body, your head, your heart? This is the kind of space that helps you let go.",
    },
    {
      image: sliderImage3,
      location: "Cangu",
      tripType: "Full Day Trip",
      privacy: "Private",
      name: "Balinese Day with a local family",
      price: "From IDR 15,00,000.00/ person",
      description:
        "Slow down. Watch the light move across the rice fields. Learn how to makecoconut oil the way it's been done for generations. This is Bali with soul — the",
    },
  ];
  return (
    <div className="px-16 youMayLike mb-40 max-md:px-6">
      <h1 className="text-[52px] text-primary font-semibold text-center mb-[80px] max-sm:mb-[40px] max-sm:text-[40px]">
        You may also like
      </h1>
      <Slider {...settings}>
        {places.map((item, id) => (
          <Card data={item} />
        ))}
      </Slider>
    </div>
  );
}

export default YouMayAlsoLike;
