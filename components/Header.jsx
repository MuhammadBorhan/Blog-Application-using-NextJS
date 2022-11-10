import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between text-center py-4 px-12 gap-y-3 sm:gap-y-0">
        <div>
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div>
          <h2 className="font-bold text-3xl uppercase">Design</h2>
        </div>
        <div className="flex gap-4 text-gray-500 cursor-pointer">
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
      </div>
    </header>
  );
};
