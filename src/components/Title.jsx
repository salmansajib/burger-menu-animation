import React from "react";

function Title({ title = "Click on the burger menu" }) {
  return (
    <div>
      <h1 className="py-20 font-semibold text-4xl capitalize text-center">
        {title}
      </h1>
    </div>
  );
}

export default Title;
