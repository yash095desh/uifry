import React from "react";

function FeatureHeading({title,subtitle}) {
  return (
    <div>
      <h3 className=" uppercase text-lg text-[#FF5555] font-[500] tracking-widest ">
        {title}
      </h3>
      <h1 className=" font-bold text-5xl">{subtitle}</h1>
    </div>
  );
}

export default FeatureHeading;
