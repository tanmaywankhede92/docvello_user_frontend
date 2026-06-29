import React from "react";
import Home4 from "../../../assets/HomePage/Home4.png";
import Home5 from "../../../assets/HomePage/Home5.png";
import Home6 from "../../../assets/HomePage/Home6.png";
import Home7 from "../../../assets/HomePage/Home7.png";
import Icon from "../../ui/Icon/icon";

export default function FeaturedDoctors() {

  const doctors = [
    {
      img: Home4,
      name: "Dr. Sarah Jenkins",
      role: "Cardiologist",
      rating: "4.9",
      reviews: "220 reviews",
    },
    {
      img: Home5,
      name: "Dr. Amit Patel",
      role: "Neurologist",
      rating: "4.8",
      reviews: "98 reviews",
    },
    {
      img: Home6,
      name: "Dr. Maya Alara",
      role: "Dermatologist",
      rating: "4.9",
      reviews: "215 reviews",
    },
    {
      img: Home7,
      name: "Dr. Robert Chen",
      role: "Orthopedics",
      rating: "4.9",
      reviews: "220 reviews",
    },
  ];

  return (
    <section className="w-full bg-[#F5F3EF] py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADING */}
        <h2 className="text-[24px] sm:text-[30px] md:text-[42px] font-bold font-heading text-[#1E1E1E]">
          Featured Doctors
        </h2>

        <p className="text-gray-500 mt-2 text-[13px] font-bold font-heading sm:text-[15px] md:text-[18px] max-w-md mx-auto">
          Meet some of our top-rated specialists
          <br className="hidden sm:block" /> ready to help you
        </p>

        {/* MOBILE = horizontal scroll | DESKTOP = grid */}
        <div className="mt-8 md:mt-12">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 md:mt-12">
  {doctors.map((doc, index) => (
    <div
      key={index}
      className="bg-white border border-[#E5E5E5] rounded-2xl p-4 shadow-sm hover:shadow-md transition w-full"
    >
      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden">
  <img
    src={doc.img}
    alt={doc.name}
    className="
      w-full 
      h-[180px] sm:h-[200px] md:h-[220px]
      object-cover 
      object-top
    "
  />
</div>

      {/* INFO */}
      <h3 className=" flex items-center mt-3 text-[18px] md:text-[24px] font-bold font-heading text-[#1E1E1E]">
        {doc.name}
      </h3>

      <p className="flex items-center text-[#1283D3] text-[16px] font-bold font-heading md:text-[18px] font-semibold mt-1">
        {doc.role}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-2 text-[13px] text-gray-500 font-bold font-heading">
        <Icon name="star" className="w-4 h-4 text-yellow-500" />
        <span>{doc.rating}</span>
        <span>({doc.reviews})</span>
      </div>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-[#3FB497] text-white py-2 rounded-lg text-sm font-medium">
        Book Appointment
      </button>
    </div>
  ))}
</div>
        </div>

      </div>
    </section>
  );
}