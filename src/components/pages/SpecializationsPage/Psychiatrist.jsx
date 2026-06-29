import React, { useState } from "react";
import Specializtion1 from "../../../assets/SpecializationsPage/Specializtion2.png";

import Echocardiography from "../../../assets/SpecializationsPage/Echocardiography.png";
import MedicationManagement from "../../../assets/SpecializationsPage/MedicationManagement.png";
import AngioplastyStenting from "../../../assets/SpecializationsPage/AngioplastyStenting.png";

import doctorImg10 from "../../../assets/DoctorsPage/doctor10.png";
import doctorImg11 from "../../../assets/DoctorsPage/doctor11.png";
import doctorImg7 from "../../../assets/DoctorsPage/doctor7.png";
import successImg from "../../../assets/DoctorsPage/success.png";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Icon from "../../ui/Icon/icon";

const doctors = [
     {
        name: "Dr.James Walker",
        specialty: "Consultant Psychiatrist",
        fee: "₹300",
        degree: "MBBS, MRCPsych",
        rating: 4.9,
        reviews: 376,
        experience: "15 years Exp",
        distance: "4.5m",
        available: "Available Monday",
        image: doctorImg10,
      },

   {
      name: "Dr.Daniel Wilson",
      specialty: "Senior Psychiatrist",
      fee: "₹500",
      degree: "MBBS, MD psychiatry",
      rating: 4.9,
      reviews: 356,
      experience: "20 years Exp",
      distance: "2.5m",
      available: "Available Today",
      image: doctorImg11,
    },

    {
       name: "Dr.Emily Carter",
       specialty: "Senior Psychiatrist",
       fee: "₹500",
       degree: "MD, Psychiatry",
       rating: 4.9,
       reviews: 306,
       experience: "12 years Exp",
       distance: "2.5m",
       available: "Available Today",
       image: doctorImg7,
     },
];

export default function Psychiatrist() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
const [showAppointmentModal, setShowAppointmentModal] = useState(false);
const [selectedDate, setSelectedDate] = useState(null);
const [selectedTime, setSelectedTime] = useState(null);
const [showConfirmModal, setShowConfirmModal] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [consultationType, setConsultationType] = useState("In-Person");
  

  return (
    <>
      <Navbar />

      <div className="bg-[#F5F3EE] max-w-7xl mx-auto min-h-screen px-4 md:px-10 py-10">

        {/* TOP */}
        <div className="flex items-start gap-5">

          <img
            src={Specializtion1}
            alt="cardiology"
            className="w-[70px] h-[70px] object-contain"
          />

          <div>

            <h1 className="text-[48px] font-bold font-heading text-[#17242D] leading-none">
              Psychiatrist
            </h1>

            <p className="text-[22px] text-[#9C9C9C] mt-5 font-medium">
              Comprehensive care for mental health and neurological conditions.
            </p>

          </div>
        </div>

        {/* OVERVIEW */}
        <div className="bg-[#41B89A] rounded-[28px] mt-12 px-8 py-10 shadow-lg">

          <h2 className="text-white text-[36px] font-bold mb-5">
            Overview:
          </h2>

          <p className="text-white text-[22px] leading-[42px] font-medium">
            Psychiatrist is a medical specialty focused on the diagnosis, treatment, and prevention of mental health disorders and neurological conditions. Our world class psychiatrists utilize advanced diagnostic tools and innovative treatments to ensure optimal mental health, managing everything from routine check-ups to complex psychiatric interventions.
          </p>

        </div>

        {/* SYMPTOMS */}
        <div className="mt-24 text-center">

          <h2 className="text-[56px] font-bold font-heading text-[#17242D] mb-14">
            Symptoms Treated
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">

            {[
              "Chest pain or Discomfort",
              "Shortness of Breath",
              "High Blood Pressure",
              "Irregular Heartbeat",
              "Dizziness or Fainting",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-gray-500 rounded-full px-7 py-4 bg-white"
              >

                <Icon name="exclametry" />

                <p className="text-[20px] font-medium text-[#1E1E1E]">
                  {item}
                </p>

              </div>
            ))}

          </div>

          {/* Treatment Options */}
          <div>

            <h2 className="text-center text-[#0E1B25] text-5xl font-bold font-heading mb-14 mt-24">
              Treatment Options
            </h2>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1 */}
              <div className="bg-[#F8F8F8] border border-gray-400 rounded-[30px] p-10 text-center hover:shadow-lg duration-300">

                <img
                  src={Echocardiography}
                  alt="Echocardiography"
                  className="w-28 h-28 object-contain mx-auto mb-6"
                />

                <h3 className="text-[24px] font-bold font-heading text-[#111827] mb-4">
                  Echocardiography
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Non-invasive ultrasound imaging and electrical monitoring to evaluate heart function and detect abnormalities.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-[#F8F8F8] border border-gray-400 rounded-[30px] p-10 text-center hover:shadow-lg duration-300">

                <img
                  src={MedicationManagement}
                  alt="Medication Management"
                  className="w-28 h-28 object-contain mx-auto mb-6"
                />

                <h3 className="text-[24px] font-bold font-heading text-[#111827] mb-4">
                  Medication Management
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Prescribed pharmaceutical interventions to control blood pressure, cholesterol,
                    and heart rhythms.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-[#F8F8F8] border border-gray-400 rounded-[30px] p-10 text-center hover:shadow-lg duration-300">

                <img
                  src={AngioplastyStenting}
                  alt="Angioplasty & Stenting"
                  className="w-28 h-28 object-contain mx-auto mb-6"
                />

                <h3 className="text-[24px] font-bold font-heading text-[#111827] mb-4">
                  Angioplasty & Stenting
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Minimally invasive procedures to open blocked or narrowed arteries, improving blood flow to the heart.
                </p>

              </div>

            </div>

          </div>

          {/* Recommended Doctors */}
          <div className="mt-24">

            <h2 className="text-center text-[56px] font-bold font-heading text-[#17242D] mb-14">
              Recommended Doctors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {doctors.map((doc, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-300 p-5"
                >

                  {/* Top */}
                  <div className="flex gap-4 items-center">

                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div className="text-left">

                      <h3 className="font-bold font-heading text-lg">
                        {doc.name}
                      </h3>

                      <p className="text-[#41B89A] text-[18px] font-medium">
                        {doc.specialty}
                      </p>

                      <p className="text-gray-400 text-sm">
                        {doc.degree}
                      </p>

                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap mt-5">

                    <span className="flex items-center gap-1">
                      <Icon name="star" />
                      {doc.rating} ({doc.reviews})
                    </span>

                    <span className="flex items-center gap-1">
                      <Icon name="watch" />
                      {doc.experience}
                    </span>

                    <span className="flex items-center gap-1">
                      <Icon name="location" />
                      {doc.distance}
                    </span>

                  </div>

                  {/* Tags */}
                  <div className="flex gap-3 mt-5">

                    <span className="flex items-center gap-1 px-3 py-1 text-xs bg-white rounded-full border">
                      <Icon name="telephone" />
                      In-person
                    </span>

                    <span className="flex items-center gap-1 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                      <Icon name="meet" />
                      Video
                    </span>

                    <span className="flex items-center gap-1 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                      {doc.available}
                    </span>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-5">

                    <p className="font-semibold text-lg">
                      {doc.fee}
                    </p>

                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
                    >
                      View Profile
                    </button>

                  </div>

                </div>

              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Sidebar Profile */}
    {/* Overlay */}
{selectedDoctor && (
  <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">

    {/* Sidebar */}
    <div className="w-full sm:w-[430px] bg-[#F5F3EE] h-screen overflow-y-auto relative shadow-2xl">

      {/* Close */}
      <button
        onClick={() => setSelectedDoctor(null)}
        className="absolute right-5 top-5 text-[26px] text-gray-500"
      >
        ✕
      </button>

      <div className="px-5 pt-8 pb-6">

        {/* Top Profile */}
        <div className="flex flex-col items-center text-center">

          <img
            src={selectedDoctor.image}
            alt={selectedDoctor.name}
            className="w-[96px] h-[96px] rounded-full object-cover"
          />

          <h2 className="text-[20px] font-bold text-[#1D1D1D] mt-4 leading-none">
            {selectedDoctor.name}
          </h2>

          <p className="text-[#43C6A3] text-[14px] font-semibold mt-2">
            {selectedDoctor.specialty}
          </p>

          <p className="text-[#A0A0A0] text-[12px] mt-2">
            Westside Clinic, {selectedDoctor.degree} - Florida
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-8">

          {/* Rating */}
          <div className="flex flex-col items-center">

            <div className="flex items-center gap-2">
              <Icon name="star1" />
              <span className="text-[16px] font-semibold">
                {selectedDoctor.rating}
              </span>
            </div>

            <p className="text-[11px] text-[#7D7D7D] mt-1">
              {selectedDoctor.reviews}+ Reviews
            </p>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center">

            <div className="flex items-center gap-2">
              <Icon name="suitcase" />
              <span className="text-[16px] font-semibold">
                15 Years
              </span>
            </div>

            <p className="text-[11px] text-[#7D7D7D] mt-1">
              Experience
            </p>
          </div>
        </div>

        {/* About */}
        <div className="mt-8 pt-2">

          <h3 className="text-[16px] font-bold border-b border-[#D5D5D5] text-[#222] mb-4">
            About
          </h3>

          <p className="text-[13px]  text-[#9A9A9A] font-medium">
            Dr. Robert Fox is a senior Cardiologist With Over 15 Years of Experience in treating cardiovascular diseases. He specializes in preventative cardiology and echocardiography.
          </p>
        </div>

        {/* Consultation Fees */}
        <div className="mt-8">

          <h3 className="text-[16px] font-bold text-[#222] mb-5 border-b border-[#D5D5D5]">
            Consultation Fees
          </h3>

          <div className="space-y-5">

            <div className="flex justify-between pb-4">

              <span className="text-[14px] text-[#A3A3A3]">
                Video Consultation
              </span>

              <span className="font-bold text-[18px]">
                ₹100
              </span>
            </div>

            <div className="flex justify-between">

              <span className="text-[14px] text-[#A3A3A3]">
                In-Clinic Visit
              </span>

              <span className="font-bold text-[18px]">
                {selectedDoctor.fee}
              </span>
            </div>
          </div>
        </div>

        {/* Slots */}
        <div className="mt-9">

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-[16px] font-bold text-[#222]  border-b border-[#D5D5D5]">
              Available Slots
            </h3>

            <p className="text-[13px] font-semibold text-[#71D3B5]">
              Today, Mar 2026
            </p>
          </div>

         <div className="grid grid-cols-3 gap-3">
  {[
    "09:00 AM",
    "10:30 AM",
    "11:00 AM",
    "02:00 PM",
    "03:30 PM",
    "04:00 PM",
  ].map((time, index) => (

    <button
      key={index}
      onClick={() => setSelectedTime(time)}
      className={`h-[54px] rounded-md text-[15px] font-semibold transition-all ${
        selectedTime === time
          ? "bg-[#52D2AE] text-white"
          : "bg-[#ECEAE5] text-[#2C2C2C]"
      }`}
    >
      {time}
    </button>

  ))}
</div>
        </div>

      
        {/* Appointment Button */}
<button
  onClick={() => setShowAppointmentModal(true)}
  className="w-full h-[52px] bg-[#0B4D88] rounded-md text-white text-[18px] font-semibold mt-10 hover:bg-[#083d6d] transition-all"
>
  Book Appointment
</button>

      </div>
      
    </div>
    
  </div>
)}

{/* Appointment Modal */}
{showAppointmentModal && (
  <div className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center">

    <div className="w-[95%] max-w-[600px] bg-white rounded-2xl p-6 relative shadow-2xl">

      {/* Close */}
      <button
        onClick={() => setShowAppointmentModal(false)}
        className="absolute right-5 top-5 text-[28px] text-gray-500"
      >
        ✕
      </button>

      {/* Heading */}
      <h2 className="text-[32px] font-bold text-[#1E1E1E]">
        Book Appointment
      </h2>

      {/* Consultation */}
      <div className="mt-8">

        <p className="text-[15px] text-[#A3A3A3] mb-3">
          Consultation
        </p>

       <div className="flex gap-3">

  {/* In Person */}
  <button
    onClick={() => setConsultationType("In-Person")}
    className={`flex-1 h-[52px] rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${
      consultationType === "In-Person"
        ? "bg-[#49C5A1] text-white"
        : "border border-gray-300 text-[#222] bg-white"
    }`}
  >
    <Icon name="call" />
    In-Person
  </button>

  {/* Video */}
  <button
    onClick={() => setConsultationType("Video Call")}
    className={`flex-1 h-[52px] rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${
      consultationType === "Video Call"
        ? "bg-[#49C5A1] text-white"
        : "border border-gray-300 text-[#222] bg-white"
    }`}
  >
    <Icon name="meet1" />
    Video Call
  </button>

</div>
      </div>

     
      {/* Dates */}
<div className="mt-7">

  <p className="text-[15px] text-[#A3A3A3] mb-3">
    Select Date
  </p>

 <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">

    {[
      "Sun, Apr 19",
      "Mon, Apr 20",
      "Tue, Apr 21",
      "Wed, Apr 22",
      "Thu, Apr 23",
      "Fri, Apr 24",
      "Sat, Apr 25",
    ].map((date, index) => (

      <button
        key={index}
        onClick={() => setSelectedDate(date)}
        className={`min-w-fit flex-shrink-0 px-5 h-[44px] rounded-lg border text-[14px] font-medium whitespace-nowrap transition-all ${
  selectedDate === date
    ? "bg-[#49C5A1] text-white border-[#49C5A1]"
    : "bg-white border-gray-300 text-[#333]"
}`}
      >
        {date}
      </button>
    ))}
  </div>
</div>

{/* Time Section */}
{selectedDate && (

  <div className="mt-7">

    <p className="text-[15px] text-[#A3A3A3] mb-3">
      Select Time
    </p>

  <div className="grid grid-cols-4 gap-3">

  {[
    "09:30 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:30 PM",
    "01:00 PM",
    "02:30 PM",
    "03:00 PM",
  ].map((time, index) => (

    <button
      key={index}
      onClick={() => setSelectedTime(time)}
      className={`h-[46px] rounded-lg border text-[14px] font-medium transition-all ${
        selectedTime === time
          ? "bg-[#49C5A1] text-white border-[#49C5A1]"
          : "border-gray-300 text-[#222]"
      }`}
    >
      {time}
    </button>
  ))}
</div>

   <button
  onClick={() => {
    if (selectedTime) {
      setShowAppointmentModal(false);
      setShowConfirmModal(true);
    }
  }}
  className="w-full h-[56px] bg-[#0B4D88] rounded-lg text-white text-[18px] font-semibold mt-7"
>
  Continue
</button>

  </div>
)}

      
     

    </div>
  </div>
)}


{/* Confirm Booking Modal */}
{showConfirmModal && (

  <div className="fixed inset-0 z-[70] bg-black/40 flex items-center justify-center px-4">

    <div className="w-full max-w-[520px] bg-white rounded-2xl p-6 relative shadow-2xl">

      {/* Close */}
      <button
        onClick={() => setShowConfirmModal(false)}
        className="absolute right-5 top-5 text-[28px] text-gray-500"
      >
        ✕
      </button>

      {/* Heading */}
      <h2 className="text-[30px] font-bold text-[#1E1E1E] mb-6">
        Book Appointment
      </h2>

      {/* Details Box */}
      <div className="bg-[#F7F7F7] rounded-xl p-4 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">Doctor</span>
          <span className="font-medium">{selectedDoctor?.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Type</span>
          <span className="font-medium">
            {selectedDoctor?.specialty}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Date</span>
          <span className="font-medium">{selectedDate}</span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <span className="text-gray-500">Time</span>
          <span className="font-medium">{selectedTime}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Fee</span>
          <span className="font-bold">{selectedDoctor?.fee}</span>
        </div>
      </div>

      {/* Reason */}
      <div className="mt-6">

        <p className="text-[15px] text-[#A3A3A3] mb-3">
          Reason for visit
        </p>

        <textarea
          placeholder="Describe Your Concern"
          className="w-full h-[120px] rounded-xl border border-gray-300 p-4 outline-none resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-7">

        <button
          onClick={() => {
            setShowConfirmModal(false);
            setShowAppointmentModal(true);
          }}
          className="flex-1 h-[52px] rounded-lg border border-gray-300 text-[#222] font-medium"
        >
          Back
        </button>

       <button
  onClick={() => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  }}
  className="flex-1 h-[52px] rounded-lg bg-[#0B4D88] text-white font-medium"
>
  Confirm Booking
</button>

      </div>
    </div>
  </div>
)}

{/* Success Modal */}
{showSuccessModal && (
  <div className="fixed inset-0 z-[80] bg-black/40 flex items-center justify-center px-4">

    <div className="w-full max-w-[520px] bg-white rounded-[24px] relative shadow-2xl px-8 pt-8 pb-7 text-center">

      {/* Close */}
      <button
        onClick={() => setShowSuccessModal(false)}
        className="absolute right-6 top-5 text-black"
      >
        <span className="text-[40px] font-light leading-none">×</span>
      </button>

      {/* Top Heading */}
      <h2 className="text-[22px] font-bold text-[#1E1E1E] text-left">
        Booking Confirmed
      </h2>

      {/* Success Icon */}
      <img
        src={successImg}
        alt="success"
        className="w-[95px] h-[95px] mx-auto mt-8"
      />

      {/* Main Title */}
      <h3 className="text-[24px] font-bold text-[#1E1E1E] mt-7">
        Appointment Booked!
      </h3>

      {/* Description */}
      <p className="text-[#A0A0A0] text-[15px] leading-8 mt-5 font-medium px-2">
        Your physical appointment with{" "}
        <span className="text-[#6F6F6F] font-semibold">
          {selectedDoctor?.name}
        </span>{" "}
        on{" "}
        <span className="text-[#6F6F6F] font-semibold">
          {selectedDate}
        </span>{" "}
        at{" "}
        <span className="text-[#6F6F6F] font-semibold">
          {selectedTime}
        </span>{" "}
        has been confirmed.
      </p>

      {/* Done Button */}
      <button
        onClick={() => {
          setShowSuccessModal(false);
          setSelectedDoctor(null);
          setSelectedDate(null);
          setSelectedTime(null);
        }}
        className="mt-8 w-[160px] h-[56px] bg-[#0B4D88] rounded-[14px] text-white text-[18px] font-medium hover:bg-[#083d6d] transition-all"
      >
        Done
      </button>

    </div>
  </div>
)}

      <Footer />
    </>
  );
}
