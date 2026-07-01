import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../ui/Icon/icon";


export default function MissionVision() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#f5f3ef] py-20 px-6 md:px-12">
      
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#111827]">
            Mission & Vision
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mt-5 max-w-3xl mx-auto font-medium font-body leading-relaxed">
            Our guiding principles that drive us to deliver exceptional <br />
            healthcare services every single day.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MISSION CARD */}
          <div className="bg-[#f8f8f8] border border-gray-300 rounded-[30px] p-10">

            {/* ICON */}
             <Icon name="mission" />

            {/* TITLE */}
            <h2 className="text-4xl font-bold font-heading text-[#111827] mb-6 mt-6">
              Our Mission
            </h2>

            {/* TEXT */}
            <p className="text-gray-500 text-[20px] leading-relaxed font-medium font-body">
              To elevate the standard of healthcare by providing
              patient-centric, accessible, and innovative medical
              services. We strive to empower our community with the
              tools and treatments they need to lead healthier lives.
            </p>
          </div>

          {/* VISION CARD */}
          <div className="bg-[#f8f8f8] border border-gray-300 rounded-[30px] p-10">

            {/* ICON */}
            <Icon name="vision" />

            {/* TITLE */}
            <h2 className="text-4xl font-bold font-heading text-[#111827] mb-6 mt-6">
              Our Vision
            </h2>

            {/* TEXT */}
            <p className="text-gray-500 text-[20px] leading-relaxed font-medium font-body">
              To be recognized globally as a pioneering healthcare
              platform where cutting-edge medical technology meets
              deep human empathy, setting a new benchmark for
              medical excellence and preventative care.
            </p>
          </div>

        </div>


        
      </div>


           <div className="max-w-7xl mx-auto px-7 text-center mt-[80px]">
        <div className="relative bg-gradient-to-r from-[#39B69A] to-[#2FA38F] rounded-[39px] py-34 px-6 md:px-16 text-center overflow-hidden">
             {/* CONTENT */}
          <h2 className="text-white text-2xl md:text-4xl font-bold font-heading">
            Need Immediate Medical Help?
          </h2>

          <p className="text-white/90 mt-3 text-[18px] font-medium font-body ">
            Our emergency services are available 24/7. <br />
            Don’t hesitate to contact us.
          </p>

          {/* BUTTON */}
         <button
  onClick={() => navigate("/contact")}
  className="mt-6 bg-white text-[#2FA38F] px-10 py-3 rounded-full font-medium font-body
   hover:bg-gray-100 transition"
>
  Contact Us
</button>

        </div>
        </div>
    </div>
    
  );
}