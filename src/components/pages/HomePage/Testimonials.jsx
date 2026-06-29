import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user1 from "../../../assets/HomePage/testro1.png";
import user2 from "../../../assets/HomePage/testro2.png";
import user3 from "../../../assets/HomePage/testro3.png";
import user4 from "../../../assets/HomePage/testro4.png";
import user6 from "../../../assets/HomePage/testro6.png";
import plus1 from "../../../assets/HomePage/pluse1.png";
import plus2 from "../../../assets/HomePage/pluse2.png";
import plus3 from "../../../assets/HomePage/pluse3.png";


import Icon from "../../ui/Icon/icon";

export default function Testimonials() {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Meena Kulkarni",
      text: "“From appointment booking to consultation, the entire process was smooth and well-organized. The hospital maintains excellent care standards.”",
      img: user1,
    },
    {
      name: "Sneha Patil",
      text: "T“The staff members were kind and helpful, making my hospital experience stress-free. I highly anyone seeking quality healthcare.”",
      img: user2,
    },
    {
      name: "Anita Sharma",
      text: "“During an emergency, the doctors acted quickly and provided excellent care. Their timely response truly made a difference in my recovery.”",
      img: user3,
    },
    {
      name: "Rahul Verma",
      text: "“From the moment I arrived, the staff and doctors were kind and efficient. Their timely care a big difference in my healing process.”",
      img: user4,
    },
    {
      name: "Priya Singh",
      text: "“The doctors listened carefully to my concerns and offered the right treatment at the right time. Their dedication truly helped me recover faster.”",
      img: user6,
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState("right");

  const next = () => {
    if (index < testimonials.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
  <section className="bg-[#F5F3EF] py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-800">
      Patient Testimonials
    </h2>

    <p className="text-gray-500 mt-3 text-[18px] font-bold font-heading mb-10 max-w-xl mx-auto">
      Hear what our patients have to say about <br className="hidden sm:block" /> their experiences
    </p>

    {/* Cards */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${
            window.innerWidth < 768 ? index * 100 : index * 33.33
          }%)`,
        }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3"
          >
            <div className="bg-white border rounded-xl p-4 md:p-5 shadow-sm text-left">

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    name="star"
                    className="w-4 h-4 text-yellow-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-[13px] md:text-sm mb-4 leading-relaxed font-bold font-heading">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                />
                <span className="font-bold font-heading text-black text-sm">
                  {item.name}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Arrows */}
    <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
  
  {/* LEFT BUTTON */}
  <button
    onClick={() => {
      prev();
      setActiveArrow("left");
    }}
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
      activeArrow === "left" ? "bg-[#3FB497]" : "bg-gray-300 "
    }`}
  >
    <Icon
      name="leftarrow"
      className={`w-4 h-4 ${ 
        activeArrow === "left" ? "text-black" : "bg-gray-500 "
      }`}
    />
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={() => {
      next();
      setActiveArrow("right");
    }}
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
      activeArrow === "right" ? "bg-[#3FB497]" : "bg-gray-300 "
    }`}
  >
    <Icon
      name="rightarrow"
      className={`w-4 h-4 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
        activeArrow === "right" ? "text-black" : "text-gray-700"
      }`}
    />
  </button>
  
</div>

  </div>
</section>


       <section className="bg-[#F5F3EF] py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div className="relative bg-gradient-to-r from-[#39B69A] to-[#2FA38F] rounded-[39px] py-34 px-6 md:px-16 text-center overflow-hidden">

          {/* PLUS ICONS (background) */}
          <img
            src={plus1}
            alt=""
            className="absolute left-1 top-40 w-32 opacity-70"
          />
          <img
            src={plus2}
            alt=""
            className="absolute right-16 bottom-1 w-33 opacity-70"
          />
          <img
            src={plus3}
            alt=""
            className="absolute right-50 top-12 w-20 opacity-70"
          />

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
  className="mt-6 bg-white text-[#2FA38F] px-10 py-3 rounded-full font-medium font-body hover:bg-gray-100 transition"
>
  Contact Us
</button>

        </div>


      </div>
    </section>
    </div>
  );
}