import React, { useState } from "react";
import doctorImg from "../../../assets/HomePage/doctor.png";
import Icon from "../../ui/Icon/icon";

export default function Hero() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const [verified, setVerified] = useState(false);
 

  const handleAnalyze = () => {
    if (!symptom) return;

    let doctor = "";

    if (symptom.toLowerCase().includes("anxiety")) {
      doctor = "Psychiatrist";
    } else if (symptom.toLowerCase().includes("headache")) {
      doctor = "Neurologist";
    } else if (symptom.toLowerCase().includes("chest")) {
      doctor = "Cardiologist";
    } else {

      doctor = "General Physician";
    }

    setResult({ symptom, doctor });
  };

  return (
    <section className="w-full bg-[#F5F3EF] mt-[-20px] pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:grid md:grid-cols-2">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-[85%]">
<h1 className="text-[32px] sm:text-[44px] md:text-[64px]  font-bold font-heading leading-[1.2] md:leading-[1.1] text-[#1E1E1E] mt-12 md:mt-20">
  <span className="md:whitespace-nowrap">
    Find the Right Doctor
  </span>
  <br />
  and Book Your
  <br />
  Appointment
</h1>

          <p className="mt-4 md:mt-5 text-[14px] sm:text-[16px] md:text-[18px] font-medium font-body text-[#8C8C8C] max-w-lg">
            Access top-rated specialists, book in-person or video consultations,
            and take control of your health journey today.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end relative mt-10 md:mt-0">
          <img
            src={doctorImg}
            alt="doctor"
            className="w-[75%] sm:w-[55%] md:w-[70%] lg:w-[80%] max-w-[380px]"
          />
          {/* FLOATING SEARCH BOX */}
          <div className="absolute bottom-[1px] w-[92%] md:center border-gray-400 shadow-sm hover:shadow-md lg:right-[140px] md:w-[900px]  bg-white border border-[#E5E5E5] rounded-2xl p-4 sm:p-5 md:p-6 shadow-md bottom-70">
             
             {!result && (
<>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#202020] font-bold font-heading  md:mb-4 ">
              Describe your symptoms and I'll recommend the right specialist for you.
            </p>

            {/* INPUT */}           
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center bg-[#F3F3F3] rounded-xl px-3 py-2 md:px-4 md:py-3">
              <div className="flex items-center gap-2 md:gap-3 flex-1">
                <Icon name="search" className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                <input
                  type="text"
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="I have a Severe headache for some days"
                  className="flex-1 min-w-0 bg-transparent outline-none font-medium font-body text-[13px] md:text-[14px]"/>
              </div>

              <button
                onClick={handleAnalyze}
                className="bg-[#0F4C81] text-white px-4 md:px-5 py-2 rounded-lg font-medium font-body text-sm w-full sm:w-auto"
              >
                Analyze
              </button>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 md:mt-5">
              {[
                "Headache",
                "Chest pain",
                "Cold",
                "Joint Pain",
                "Toothache",
                "Cough",
                "Anxiety",
              ].map((tag) => (
                <span
                  key={tag}
                  onClick={() => setSymptom(tag)}
                  className={`cursor-pointer px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-[12px] md:text-[13px] font-medium font-body ${
                    symptom === tag
                      ? "bg-[#0F4C81] text-white"
                      : "bg-[#CCE4FF] text-[#0F4C81]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            </>
)}


{/* RESULT BOX */}
{result && (

<div
  className={`absolute w-[92%] md:center border-gray-400 shadow-sm hover:shadow-md lg:right-[-1px]  md:w-[900px] bg-white border border-[#E5E5E5] rounded-2xl p-4 sm:p-5 md:p-6 shadow-md ${
    result ? "-bottom-32" : "bottom-[-10px]"
  }`}
>

    {/* 👉 STEP 1: FORM (only when OTP is NOT shown) */}
    {!showOTP && (
      <>
        <p className="text-gray-700 font-medium font-body">
          <strong>Your Symptoms:</strong> {result.symptom}
        </p>
        <p className="text-gray-700 mt-2 font-medium font-body">
          <strong>Recommended:</strong> {result.doctor}
        </p>

        <div className="mt-4">
          <p className="font-medium font-body mb-[20px]">
            To See Available doctors, Please Verify
          </p>

          <div className="space-y-3">

            {/* NAME */}
            <div className="flex items-center gap-2 border rounded border-gray-400 px-3 py-2">
              <Icon name="user" className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Your First Name"
                className="flex-1 outline-none text-sm"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2 border rounded border-gray-400 px-3 py-2">
              <Icon name="phone" className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 outline-none text-sm"
              />
            </div>

          </div>

          <button
            onClick={() => setShowOTP(true)}
            className="w-full bg-[#37B495] text-white py-3 font-medium font-body rounded mt-4"
          >
            Send OTP
          </button>
        </div>
      </>
    )}
    <div />
    

    {/* 👉 STEP 2: OTP BOX (only when clicked) */}
    {showOTP && !verified && (
    <div className="p-4 sm:p-5 md:p-6">     <div className="mt-2 ">

        <p className="text-gray-700 mb-3 font-medium font-body">
          Enter OTP sent to your number
        </p>

        <div className="flex items-center gap-2 border rounded px-3 py-2 mb-4 bg-white">
          <Icon name="user" className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Enter OTP"
            className="flex-1 outline-none text-sm font-medium font-body"
          />
        </div>

       <button
  onClick={() => setVerified(true)}
  className="w-full bg-[#37B495] text-white py-3 font-medium font-body rounded"
>
  Verify OTP
</button>

      </div>
      </div>
    )}



    {verified && (
  <div className="">

    {/* ICON */}
  {/* ICON */}
<div className="flex justify-center mb-6">
  <div className="relative w-24 h-24 rounded-full bg-[#E6F4EF] flex items-center justify-center mt-5">

    {/* OUTER SOFT CIRCLE */}
    <div className="w-22 h-22 rounded-full border border-gray-400 flex items-center justify-center">

      {/* RIGHT ICON CENTERED */}
      <Icon name="right" />

    </div>

  </div>
</div>

    {/* TEXT */}
    <p className="text-gray-800 text-[14px] md:text-[16px] font-medium font-body w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto leading-relaxed">
      Hi <span className="font-semibold">User</span>! Based on your symptoms, we recommend consulting a{" "}
      <span className="font-semibold">{result.doctor}</span>
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

      {/* GREEN BUTTON */}
      <button className="bg-[#37B495] text-white px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
        View {result.doctor}
      <Icon name="horizontalarrow" className="w-4 h-4" />
      </button>

      {/* OUTLINE BUTTON */}
      <button
        onClick={() => {
          setVerified(false);
          setShowOTP(false);
          setResult(null);
          setSymptom("");
        }}
        className="border border-gray-400 px-6 py-2.5 rounded-lg min-w-[200px] font-medium font-body hover:bg-gray-50 transition"
      >
        Search Again
      </button>

    </div>
  </div>
)}
  
  </div>

)}
          </div>
        </div>

        
      </div>
    </section>
  );
}