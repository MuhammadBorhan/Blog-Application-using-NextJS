import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../public/images/flower2.webp";

const Section4 = () => {
  return (
    <section className="py-12">
      <div className="flex justify-around">
        <h1 className="font-bold text-2xl pb-10">Business</h1>
        <h1 className="font-bold text-2xl pb-10">Travel</h1>
      </div>
      <div className="container mx-auto md:px-20 grid md:grid-cols-2 gap-6">
        <div>{slide(image1)}</div>
        <div>{slide(image1)}</div>
        <div>{slide(image1)}</div>
        <div>{slide(image1)}</div>
        <div>{slide(image1)}</div>
        <div>{slide(image1)}</div>
      </div>
    </section>
  );
};

export default Section4;

function slide(img) {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-6 gap-y-6 md:gap-y-0 items-center justify-center">
      <div className="md:col-span-1">
        <Link href={"/"} className="flex items-center justify-center">
          <Image src={img} width={200} height={200} className="rounded" />
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
          <p className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 text-justify">
            Your most unhappy customers are your greatest source of learning
          </p>
          <div className="flex items-center gap-2 mt-2">
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
