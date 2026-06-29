import React from "react";
import Home1 from "../../../assets/HomePage/Home1.png";
import Home2 from "../../../assets/HomePage/Home2.png";
import Home3 from "../../../assets/HomePage/Home3.png";

export default function QuickBooking() {
  const cards = [
    {
      img: Home1,
      title: "Clinic Visit",
      desc: "Book an in-person appointment with a specialist near you.",
    },
    {
      img: Home2,
      title: "Video Consult",
      desc: "Consult with a doctor online from the comfort of your home.",
    },
    {
      img: Home3,
      title: "Verified Doctors",
      desc: "All doctors are carefully verified with valid medical licenses.",
    },
  ];

  return (
    <section className="w-full bg-[#37B495] py-8 md:py-12 mt-[4px]">
      <div className="max-w-7xl mx-auto sm:px-6 text-center">

        {/* HEADING */}
        <h2 className="text-white text-[22px] sm:text-[30px] md:text-[42px] font-bold font-heading leading-snug">
          Quick Appointment Booking
        </h2>

        <p className="text-white/90 mt-2 text-[13px] sm:text-[16px] md:text-[18px] font-medium mx-auto leading-relaxed">
          Choose how you want to connect with our healthcare
          <br/> professionals
        </p>

        {/* CARDS */}
        <div className="mt-6 md:mt-12 flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[320px] sm:max-w-none bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-sm text-center hover:shadow-md transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 object-contain"
              />

              <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-bold font-heading text-[#1E1E1E]">
                {card.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium font-body text-[#7A7A7A] mt-2 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}