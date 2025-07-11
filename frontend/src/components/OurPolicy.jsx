import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold ">Swap It Easy, No Worries</p>
        <p className="text-gray-400">
          Not what you expected? <br />
          Enjoy our easy exchange policy stress-free and quick!
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold ">100% Quality Guaranteed</p>
        <p className="text-gray-400">
          We provide 100% Quality Guaranteed Foods.
        </p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold ">Here for You, Always</p>
        <p className="text-gray-400">
          Friendly, Fast, and Always Ready to Help.{" "}
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
