import React from "react";
import { useNavigate } from "react-router-dom";
import cardiology from "../../../assets/HomePage/Cardiology.png";
import neurology from "../../../assets/HomePage/Neurology.png";
import peditatrics from "../../../assets/HomePage/Peditatrics.png";
import optometry from "../../../assets/HomePage/Optometry.png";
import psychiatrist from "../../../assets/HomePage/Psychiatrist.png";
import dentistry from "../../../assets/HomePage/Dentistry.png";

const specializations = [
  { title: "Cardiology", doctors: "120+ Doctors", img: cardiology },
  { title: "Neurology", doctors: "90+ Doctors", img: neurology },
  { title: "Peditatrics", doctors: "100+ Doctors", img: peditatrics },
  { title: "Optometry", doctors: "150+ Doctors", img: optometry },
  { title: "Psychiatrist", doctors: "130+ Doctors", img: psychiatrist },
  { title: "Dentistry", doctors: "200+ Doctors", img: dentistry },    
];

const Specializations = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F5F3EF] py-16 px-4">
      <div className="max-w-7xl mx-auto px-7 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800">
          Popular Specializations
        </h2>
        <p className="text-gray-500 mt-3 text-[18px] font-bold font-heading mb-10 max-w-xl mx-auto">
          Find experienced doctors across all major <br /> medical specialties
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-400 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-[24px] font-bold font-heading text-black">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 font-bold font-heading">
                {item.doctors}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
      <button
       onClick={() => navigate("/specialization")}
       className="mt-10 bg-[#0F4C81] hover:bg-[#0F4C81] font-medium font-body text-white px-6 py-2 rounded-lg transition">
       View More
      </button>
      </div>
    </section>
  ); 
};

export default Specializations;