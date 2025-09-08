import React from "react";

function Title({ title = "Click on the burger menu" }) {
  return (
    <div>
      <h1 className="py-20 font-semibold text-4xl capitalize text-center bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-title">
        {title}
      </h1>
    </div>
  );
}

export default Title;
