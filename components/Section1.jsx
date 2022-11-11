import { Repeat } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../public/images/flower2.webp";
import image2 from "../public/images/flower1.jpg";
import image3 from "../public/images/flower3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiperCore, { Autoplay } from "swiper";

const Section1 = () => {
  swiperCore.use(Autoplay);
  return (
    <section className="py-12">
      <Link href={"/posts/page"}>
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-10 text-center">Trending</h1>

          <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            <SwiperSlide>{slide(image1)}</SwiperSlide>
            <SwiperSlide>{slide(image1)}</SwiperSlide>
            <SwiperSlide>{slide(image1)}</SwiperSlide>
          </Swiper>
        </div>
      </Link>
    </section>
  );
};

export default Section1;

function slide(img) {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
    // backgroundSize: "cover",
  };
  return (
    <div
      className="grid md:grid-cols-3 md:gap-x-6 gap-y-6 md:gap-y-0 items-center justify-center"
      style={bg}
    >
      <div className="md:col-span-1">
        <Link href={"/"} className="flex items-center justify-center">
          <Image src={img} width={400} height={400} className="rounded" />
        </Link>
      </div>
      <div className="md:col-span-2">
        <div className="cat">
          <Link href={"/"}>
            {" "}
            <span className="text-orange-500 hover:text-orange-700">
              Business, Travel -{" "}
            </span>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <span className="text-gray-800 hover:text-gray-500">
              {new Date().getDate() + 1} / {new Date().getMonth()} /{" "}
              {new Date().getFullYear()}{" "}
            </span>{" "}
          </Link>
        </div>
        <div className="title">
          <p className="text-3xl md:text-5xl font-bold text-gray-600 hover:text-gray-400 text-justify">
            Your most unhappy customers are your greatest source of learning
          </p>
          <p className="py-3 text-gray-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            nulla cupiditate inventore velit. Alias, eum quisquam tempore minima
            ratione aliquid officiis cumque quas quidem laudantium similique
            consequatur, itaque, corporis fuga!
          </p>
          <div className="flex items-center gap-2">
            <Avatar
              alt="Borhan"
              src="/images/borhan.png"
              sx={{ width: 56, height: 56 }}
            />
            <div className="text-gray-500">
              <Link href={"/"}>
                {" "}
                <p className="font-bold text-md">Developer</p>
                <p>Student and Learner</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
