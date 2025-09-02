import React from "react";

function Navigation({ isOpen }) {
  return (
    <div
      className={`fixed top-[80px] right-0 bg-zinc-950 w-full max-w-[500px] h-full  ${
        isOpen ? "translate-x-0" : "translate-x-[550px]"
      } transition-transform duration-[1000ms] ease-in-out`}
    >
      <p className="text-gray-50 text-2xl p-10">Nav Items</p>
    </div>
  );
}

export default Navigation;
