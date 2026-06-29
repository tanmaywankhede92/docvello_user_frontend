import React from "react";
import { useNavigate } from "react-router-dom";


import Specializtion1 from "../../../assets/SpecializationsPage/Specializtion1.png";
import Specializtion2 from "../../../assets/SpecializationsPage/Specializtion2.png";
import Specializtion3 from "../../../assets/SpecializationsPage/Specializtion3.png";
import Specializtion4 from "../../../assets/SpecializationsPage/Specializtion4.png";
import Specializtion5 from "../../../assets/SpecializationsPage/Specializtion5.png";
import Specializtion6 from "../../../assets/SpecializationsPage/Specializtion6.png";
import Specializtion7 from "../../../assets/SpecializationsPage/Specializtion7.png";
import Specializtion8 from "../../../assets/SpecializationsPage/Specializtion8.png";
import Specializtion9 from "../../../assets/SpecializationsPage/Specializtion9.png";
import Specializtion10 from "../../../assets/SpecializationsPage/Specializtion10.png";
import Specializtion11 from "../../../assets/SpecializationsPage/Specializtion11.png";
import Specializtion12 from "../../../assets/SpecializationsPage/Specializtion12.png";


const specializations = [
  { title: "Cardiology", doctors: "120+ Doctors", img: Specializtion1 },
  { title: "Psychiatrist", doctors: "90+ Doctors", img: Specializtion2 },
  { title: "Neurology", doctors: "100+ Doctors", img: Specializtion3 },
  { title: "General Physician", doctors: "150+ Doctors", img: Specializtion4 },
  { title: "Peditatrics", doctors: "130+ Doctors", img: Specializtion5},
  { title: "Dentistry", doctors: "200+ Doctors", img: Specializtion6 }, 
  { title: "Orthopedics", doctors: "80+ Doctors", img: Specializtion7 },
  { title: "Dermatology", doctors: "40+ Doctors", img: Specializtion8 },
  { title: "ENT Specialist", doctors: "20+ Doctors", img: Specializtion9 },
  { title: "Gynecology", doctors: "60+ Doctors", img: Specializtion10 },
  { title: "Obstetrician", doctors: "40+ Doctors", img: Specializtion11 },
  { title: "Psychology", doctors: "40+ Doctors", img: Specializtion12 },   
];

const Symptoms = () => {
    const navigate = useNavigate(); 
  
  return (
    <section className="bg-[#F5F3EF] py-16 px-4">
      <div className="max-w-7xl mx-auto px-7 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-15 text-start text-gray-800">
         Specialization
        </h2>
        
        
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {specializations.map((item, index) => (
            <div
  key={index}
onClick={() => {
  if (item.title === "Cardiology") {
    navigate("/cardiology");
  } else if (item.title === "Psychiatrist") {
    navigate("/psychiatrist");
  }else if (item.title === "Neurology") {
    navigate("/neurology");
  }
  else if (item.title === "General Physician") {
    navigate("/generalphysician");
  }
  else if (item.title === "Peditatrics") {
    navigate("/peditatrics");
  }
}}

  className="bg-white rounded-xl p-6 border border-gray-400 shadow-sm hover:shadow-md transition cursor-pointer"
>
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-[24px] font-bold font-heading text-black">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {item.doctors}
              </p>
            </div>
          ))}
        </div>      
      </div>
    </section>
    
  );
};

export default Symptoms;