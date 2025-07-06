import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Our store offers quality, stylish clothing for everyone, blending
            trends with affordability. We prioritize customer satisfaction,
            sustainability, and unique designs.
          </p>
          <p>
            We bring you affordable, high-quality fashion for every style.
            Committed to satisfaction, sustainability, and uniqueness, we
            celebrate individuality.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to offer accessible, quality fashion that empowers
            individuality, prioritizes sustainability, and delivers a seamless,
            customer-focused shopping experience.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance : </b>
          <p className="text-gray-600">
            We ensure top-quality standards in every product through careful
            sourcing, rigorous checks, and dedication to delivering durable,
            stylish clothing you’ll love.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience : </b>
          <p className="text-gray-600">
            We prioritize convenience with easy navigation, fast shipping, and
            secure checkout, ensuring a smooth shopping experience from browsing
            to doorstep delivery.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional CUstomer Service : </b>
          <p className="text-gray-600">
            We prioritize exceptional customer service, offering quick
            assistance, easy returns, and dedicated support to ensure a seamless
            and satisfying shopping experience.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
