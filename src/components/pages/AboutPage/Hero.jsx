import React from "react";
import about1 from "../../../assets/AboutPage/about1.png";
import about2 from "../../../assets/AboutPage/about2.png";
import about3 from "../../../assets/AboutPage/about3.png";
import about4 from "../../../assets/AboutPage/about4.png";

export default function Hero() {
  return (
    <div className="w-full bg-[#f5f3ef] py-8 px-6 md:px-12">
      
      {/* TOP CONTENT */}
      <div className="max-w-7xl px-7 mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
            Leading the Way in
            <br />
            <span className="text-[#636363]">Modern Healthcare</span>
          </h1>

          <p className="text-[#939393] max-w-2xl mx-auto mt-5 font-medium font-body text-[18px] md:text-base leading-relaxed">
            HealthPlus is a premier medical platform dedicated <br />
            to providing accessible, high-quality, and patient- <br />
            centered care.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          
          {/* LEFT BIG IMAGE */}
          <div>
            <img
              src={about1}
              alt="Doctor"
              className="w-full h-[540px] object-cover object-top rounded-3xl"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">
            
            {/* TOP IMAGE */}
            <img
              src={about2}
              alt="Hospital"
              className="w-full h-[260px] object-cover rounded-3xl"
            />

            {/* BOTTOM IMAGE */}
            <img
              src={about3}
              alt="MRI"
              className="w-full h-[260px] object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-24">
          
          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-500 text-[18px] leading-relaxed mb-5 font-medium font-body">
              At Medicare, our journey began with a simple yet powerful
              vision to make quality healthcare accessible, reliable, and
              patient centered for everyone.
            </p>

            <p className="text-gray-500 text-[18px] leading-relaxed font-medium font-body mb-8">
              Founded by a team of passionate healthcare professionals
              and technology experts, we recognized the growing need
              for a seamless connection between patients and medical
              services. Long waiting times, lack of transparency, and
              limited access to trusted doctors inspired us to create a
              platform that simplifies healthcare for all.
            </p>

            <button className="bg-[#0D4D8B] hover:bg-[#083b6b] transition-all font-medium font-body duration-300 text-white px-8 py-3 rounded-xl ">
              Find Doctors
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={about4}
              alt="Patient"
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}