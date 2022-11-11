import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-slate-50">
      <div className="container mx-auto md:px-20 flex flex-col items-center py-16 gap-y-10">
        <div>
          <p className="text-2xl font-bold font-mono text-center pb-4">
            Subscribe Newslatter
          </p>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="footer-inpt"
              placeholder="Enter Your Email"
            />
            <input className="footer-button" type="submit" value="Subscribe" />
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-2 gap-4 text-gray-500 cursor-pointer">
            <a>
              <Facebook />
            </a>
            <a>
              <GitHub />
            </a>
            <a>
              <LinkedIn />
            </a>
            <a>
              <Instagram />
            </a>
          </div>
          <p className="text-gray-500">
            {" "}
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved By
            Borhan
          </p>
        </div>
      </div>
    </footer>
  );
};
