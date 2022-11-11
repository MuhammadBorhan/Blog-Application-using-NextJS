import React from "react";
import image1 from "../public/images/flower2.webp";
import image2 from "../public/images/flower1.jpg";
import image3 from "../public/images/flower3.jpg";
import Link from "next/link";
import { Avatar } from "@mui/material";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiperCore, { Autoplay } from "swiper";

const Section3 = () => {
  swiperCore.use(Autoplay);
  return (
    <section className="py-12">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-10 text-center">Most Popular</h1>
        <Swiper slidesPerView={2} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{slide(image1)}</SwiperSlide>
          <SwiperSlide>{slide(image1)}</SwiperSlide>
          <SwiperSlide>{slide(image1)}</SwiperSlide>
          <SwiperSlide>{slide(image1)}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Section3;

function slide(img) {
  return (
    <div className="grid gap-y-10">
      <div>
        <Link href={"/"} className="flex items-center justify-center">
          <Image src={img} width={400} height={300} className="rounded" />
        </Link>
      </div>
      <div className="px-20">
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
          <p className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 text-justify">
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
