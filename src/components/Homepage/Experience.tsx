import Image from "next/image";
import React from "react";
import line from "@/assets/images/line.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import videoImage from "@/assets/images/videoImage.png";
import videoImage2 from "@/assets/images/videoImage2.png";

const ArrowLeft = (props: any) => {
  return (
    <div {...props}>
      <svg
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.414 9.13456H22C22.2652 9.13456 22.5196 9.23992 22.7071 9.42746C22.8946 9.61499 23 9.86935 23 10.1346C23 10.3998 22.8946 10.6541 22.7071 10.8417C22.5196 11.0292 22.2652 11.1346 22 11.1346H3.414L10.708 18.4266C10.8958 18.6143 11.0013 18.869 11.0013 19.1346C11.0013 19.4001 10.8958 19.6548 10.708 19.8426C10.5202 20.0303 10.2656 20.1358 10 20.1358C9.73445 20.1358 9.47977 20.0303 9.292 19.8426L0.292 10.8426C0.198874 10.7497 0.124989 10.6393 0.0745754 10.5178C0.0241623 10.3963 -0.00178719 10.2661 -0.00178719 10.1346C-0.00178719 10.003 0.0241623 9.87279 0.0745754 9.7513C0.124989 9.62981 0.198874 9.51945 0.292 9.42656L9.292 0.426564C9.47977 0.23879 9.73445 0.133301 10 0.133301C10.2656 0.133301 10.5202 0.23879 10.708 0.426564C10.8958 0.614337 11.0013 0.869012 11.0013 1.13456C11.0013 1.40012 10.8958 1.65479 10.708 1.84256L3.414 9.13456Z"
          fill="#384B40"
        />
      </svg>
    </div>
  );
};

const ArrowRight = (props: any) => {
  return (
    <div {...props}>
      <svg
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.586 9.13456H1C0.734784 9.13456 0.48043 9.23992 0.292893 9.42746C0.105357 9.61499 0 9.86935 0 10.1346C0 10.3998 0.105357 10.6541 0.292893 10.8417C0.48043 11.0292 0.734784 11.1346 1 11.1346H19.586L12.292 18.4266C12.1042 18.6143 11.9987 18.869 11.9987 19.1346C11.9987 19.4001 12.1042 19.6548 12.292 19.8426C12.4798 20.0303 12.7344 20.1358 13 20.1358C13.2656 20.1358 13.5202 20.0303 13.708 19.8426L22.708 10.8426C22.8011 10.7497 22.875 10.6393 22.9254 10.5178C22.9758 10.3963 23.0018 10.2661 23.0018 10.1346C23.0018 10.003 22.9758 9.87279 22.9254 9.7513C22.875 9.62981 22.8011 9.51945 22.708 9.42656L13.708 0.426564C13.5202 0.23879 13.2656 0.133301 13 0.133301C12.7344 0.133301 12.4798 0.23879 12.292 0.426564C12.1042 0.614337 11.9987 0.869012 11.9987 1.13456C11.9987 1.40012 12.1042 1.65479 12.292 1.84256L19.586 9.13456Z"
          fill="#384B40"
        />
      </svg>
    </div>
  );
};
const VideoCard = ({ name, image }: { name: string; image: any }) => {
  console.log(name);
  return (
    <div className="flex flex-col mr-8 ">
      <div className="rounded-xl overflow-hidden">
        <Image
          src={image}
          alt="video"
          className="h-[380px] w-full object-cover transition-all duration-300 hover:scale-110 cursor-pointer "
        />
      </div>
      <h2 className="text-[22px] font-semibold mt-4">{name}</h2>
    </div>
  );
};

function Experience() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };
  const experienceItems = [
    {
      name: "Balinese Day with a local family",
      image: videoImage,
    },
    {
      name: "Visit a local temple",
      image: videoImage2,
    },
    {
      name: "Balinese Day with a local family",
      image: videoImage,
    },
    {
      name: "Visit a local temple",
      image: videoImage2,
    },
  ];
  return (
    <div className="my-[100px] experience max-sm:my-[50px]">
      <Image src={line} alt="line" className="w-full " />
      <div className="py-[100px] px-16 max-lg:px-6 max-sm:py-[30px]">
        <h1 className="text-primary text-[32px] font-semibold mb-[40px] max-sm:text-[28px]">
          Experience Highlights
        </h1>
        <Slider {...settings}>
          {experienceItems.map((item, id) => (
            <VideoCard name={item.name} image={item.image} key={id} />
          ))}
        </Slider>
      </div>
      <Image src={line} alt="line" className="w-full " />
    </div>
  );
}

export default Experience;
