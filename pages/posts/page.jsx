import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const Page = () => {
  return (
    <Layout>
      <section className="container mx-auto md:px-10 py-16 w-1/2">
        <div className="flex items-center justify-center gap-2">
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

        <div className="text-center py-6">
          <h1 className="text-3xl font-bold font-serif mb-2">
            Your most unhappy customers are your greatest source of learning
          </h1>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum
            neque facilis minus molestias inventore vero unde commodi veritatis
            ipsam.
          </p>
        </div>

        <div>
          {" "}
          <Image src={"/images/flower1.jpg"} width={600} height={300} />
        </div>

        <div className="pt-6">
          <p className="text-justify text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            ex cumque laudantium dolore magnam expedita unde libero nihil sequi
            praesentium in esse aliquam culpa modi neque tempore facere
            quisquam, possimus ab fugiat pariatur! A dolore repellat sapiente
            temporibus exercitationem!
          </p>
          <p className="text-justify text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            ex cumque laudantium dolore magnam expedita unde libero nihil sequi
            praesentium in esse aliquam culpa modi neque tempore facere
            quisquam, possimus ab fugiat pariatur! A dolore repellat sapiente
            temporibus exercitationem!
          </p>
          <p className="text-justify text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            ex cumque laudantium dolore magnam expedita unde libero nihil sequi
            praesentium in esse aliquam culpa modi neque tempore facere
            quisquam, possimus ab fugiat pariatur! A dolore repellat sapiente
            temporibus exercitationem!
          </p>
          <p className="text-justify text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            ex cumque laudantium dolore magnam expedita unde libero nihil sequi
            praesentium in esse aliquam culpa modi neque tempore facere
            quisquam, possimus ab fugiat pariatur! A dolore repellat sapiente
            temporibus exercitationem!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
