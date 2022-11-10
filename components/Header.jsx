import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between text-center p-6 gap-y-3 sm:gap-y-0">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <h2>Design</h2>
        </div>
        <div className="flex gap-4">
          <a>Facebook</a>
          <a>Github</a>
          <a>Linkedin</a>
        </div>
      </div>
    </header>
  );
};
