import React from "react";
import successImg from "../../../assets/DoctorsPage/success.png";
import doctorImg1 from "../../../assets/DoctorsPage/doctor1.png";
import doctorImg2 from "../../../assets/DoctorsPage/doctor2.png";
import doctorImg3 from "../../../assets/DoctorsPage/doctor3.png";
import doctorImg4 from "../../../assets/DoctorsPage/doctor4.png";
import doctorImg5 from "../../../assets/DoctorsPage/doctor5.png";
import doctorImg6 from "../../../assets/DoctorsPage/doctor6.png";
import doctorImg7 from "../../../assets/DoctorsPage/doctor7.png";
import doctorImg8 from "../../../assets/DoctorsPage/doctor8.png";
import doctorImg9 from "../../../assets/DoctorsPage/doctor9.png";
import doctorImg10 from "../../../assets/DoctorsPage/doctor10.png";
import doctorImg11 from "../../../assets/DoctorsPage/doctor11.png";
import doctorImg12 from "../../../assets/DoctorsPage/doctor12.png";
import doctorImg13 from "../../../assets/DoctorsPage/doctor13.png";
import doctorImg14 from "../../../assets/DoctorsPage/doctor14.png";
import doctorImg15 from "../../../assets/DoctorsPage/doctor15.png";
import doctorImg16 from "../../../assets/DoctorsPage/doctor16.png";
import doctorImg17 from "../../../assets/DoctorsPage/doctor17.png";
import doctorImg18 from "../../../assets/DoctorsPage/doctor18.png";
import doctorImg19 from "../../../assets/DoctorsPage/doctor19.png";
import doctorImg20 from "../../../assets/DoctorsPage/doctor20.png";
import doctorImg21 from "../../../assets/DoctorsPage/doctor21.png";
import doctorImg22 from "../../../assets/DoctorsPage/doctor22.png";
import doctorImg23 from "../../../assets/DoctorsPage/doctor23.png";
import doctorImg24 from "../../../assets/DoctorsPage/doctor24.png";
import doctorImg25 from "../../../assets/DoctorsPage/doctor25.png";
import doctorImg26 from "../../../assets/DoctorsPage/doctor26.png";
import doctorImg27 from "../../../assets/DoctorsPage/doctor27.png";
import doctorImg28 from "../../../assets/DoctorsPage/doctor28.png";
import doctorImg29 from "../../../assets/DoctorsPage/doctor29.png";
import doctorImg30 from "../../../assets/DoctorsPage/doctor30.png";


import Icon from "../../ui/Icon/icon";

const doctors = [
  {
    name: "Dr. Robert Fox",
    specialty: "Senior Cardiologist",
    fee: "₹500",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "15 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg1,
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Cardiologist",
    fee: "₹400",
    degree: "MD, MBBS",
    rating: 4.7,
    reviews: 94,
    experience: "10 years Exp",
    distance: "2.5km",
    available: "Available Tomorrow",
    image: doctorImg2,
  },
  {
    name: "Dr. Marcus Johnson",
    specialty: "Heart Surgeon",
    fee: "₹400",
    degree: "MD, FAAOS",
    rating: 5.0,
    reviews: 256,
    experience: "17 years Exp",
    distance: "3km",
    available: "Available Thursday",
    image: doctorImg3,
  },
   {
    name: "Dr.Sarah Mitchell",
    specialty: "Cardiologist",
    fee: "₹300",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "20 years Exp",
    distance: "4.5m",
    available: "Available Monday",
    image: doctorImg4,
  },
   {
    name: "Dr. Josh Milton",
    specialty: "Senior Cardiologist",
    fee: "₹400",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "15 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg5,
  },
  
   {
    name: "Dr. Aruther Wolfe",
    specialty: "Cardiologist",
    fee: "₹400",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "9 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg6,
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
   {
    name: "Dr. Michael Anderson",
    specialty: "Lead Psychiatrist",
    fee: "₹300",
    degree: "MBBS, MD",
    rating: 4.7,
    reviews: 376,
    experience: "18 years Exp",
    distance: "4.7m",
    available: "Available Tomorrow",
    image: doctorImg8,
  },
   {
    name: "Dr.Sophia Martinez",
    specialty: "Senior Cardiologist",
    fee: "₹400",
    degree: "MD,PHD",
    rating: 5.0,
    reviews: 255,
    experience: "10 years Exp",
    distance: "3km",
    available: "Available Thursday",
    image: doctorImg9,
  },
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
    name: "Dr.Isabella Rossi",
    specialty: "Consultant Cardiologist",
    fee: "₹400",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "11 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg12,
  },
   {
    name: "Dr.Emma Wilson",
    specialty: "Senior Pediatrician",
    fee: "₹400",
    degree: "MD,Pediatrics",
    rating: 4.9,
    reviews: 376,
    experience: "14 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg13,
  },
   {
    name: "Dr.Liam Anderson",
    specialty: "Consultant Pediatrician",
    fee: "₹500",
    degree: "MBBS, MD",
    rating: 4.7,
    reviews: 376,
    experience: "12 years Exp",
    distance: "2.5m",
    available: "Available Tomorrow",
    image: doctorImg14,
  },
   {
    name: "Dr.Liam Anderson",
    specialty: "Consultant Pediatrician",
    fee: "₹300",
    degree: "MBBS, MD",
    rating: 4.7,
    reviews: 96,
    experience: "12 years Exp",
    distance: "2.5km",
    available: "Available Tommorow",
    image: doctorImg15,
  },
   {
    name: "Dr.Sophia Bennett",
    specialty: "Pediatric Specialist",
    fee: "₹400",
    degree: "MD Pediatrics",
    rating: 4.9,
    reviews: 376,
    experience: "17 years Exp",
    distance: "2.5m",
    available: "Available Thursday",
    image: doctorImg16,
  },
   {
    name: "Dr.Noah Martinez",
    specialty: "Pediatrician",
    fee: "₹500",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "20 years Exp",
    distance: "2.5m",
    available: "Available Monday",
    image: doctorImg17,
  },
   {
    name: "Dr.Olivia Taylor",
    specialty: "Child Specialist",
    fee: "₹400",
    degree: "MD Pediatrics",
    rating: 4.9,
    reviews: 376,
    experience: "10 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg18,
  },
   {
    name: "Dr.Daniel Scott",
    specialty: "Pediatrician",
    degree: "MBBS, MD Pediatrics",
    fee: "₹500",
    rating: 4.9,
    reviews: 376,
    experience: "11 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg19,
  },
   {
    name: "Dr.Ava Anderson",
    specialty: "Consultant Gynecologist",
    fee: "₹500",
    degree: "MBBS, MD OB-GYN",
    rating: 4.9,
    reviews: 376,
    experience: "9 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg20,
  },
   {
    name: "Dr.Sophia Williams",
    specialty: "Gynecologist",
    degree: " MD Obstetrics & Gynecology",
    fee: "₹400",
    rating: 4.7,
    reviews: 94,
    experience: "10 years Exp",
    distance: "2.5m",
    available: "Available Tomorrow",
    image: doctorImg21,
  },
   {
    name: "Dr.Charlotte Taylor",
    specialty: "Senior Obstetrician ",
    fee: "₹500",
    degree: "MD Obstetrics & Gynecology",
    rating: 4.9,
    reviews: 256,
    experience: "18 years Exp",
    distance: "3m",
    available: "Available Today",
    image: doctorImg22,
  },
   {
    name: "Dr.Mia Clark",
    specialty: "Gynecologist",
    fee: "₹400",
    degree: "MBBS, MD Gynecology",
    rating: 4.9,
    reviews: 376,
    experience: "8 years Exp",
    distance: "4.5m",
    available: "Available Monday",
    image: doctorImg23,
  },
   {
    name: "Dr. Harper Müller",
    specialty: "Women's Health Specialist ",
    fee: "₹500",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "12 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg24,
  },
   {
    name: "Dr. Ella Dubois",
    specialty: "Consultant Gynecologist",
    fee: "₹400",
    degree: "MD Gynecology",
    rating: 4.9,
    reviews: 376,
    experience: "15 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg25,
  },
   {
    name: "Dr. Benjamin Cole",
    specialty: "Senior Dermatologist",
    fee: "₹300",
    degree: "MD, Dermatology",
    rating: 4.9,
    reviews: 326,
    experience: "13 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg26,
  },
   {
    name: "Dr. Sebastian Cruz",
    specialty: "Dermatologist",
    fee: "₹400",
    degree: "MBBS, MD Dermatology",
    rating: 4.7,
    reviews: 96,
    experience: "12 years Exp",
    distance: "2.5m",
    available: "Available Tomorrow",
    image: doctorImg27,
  },
   {
    name: "Dr. Stella Rivera",
    specialty: "Dermatologist",
    fee: "₹400",
    degree: "MBBS, MD Dermatology",
    rating: 5.0,
    reviews: 256,
    experience: "15 years Exp",
    distance: "3km",
    available: "Available Monday",
    image: doctorImg28,
  },
   {
    name: "Asha Deshmukh",
    specialty: "Lead Dermatologist",
    fee: "₹500",
    degree: "MBBS, MD",
    rating: 4.9,
    reviews: 376,
    experience: "25 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg29,
  },
   {
    name: "Dr. Dominic Reed",
    specialty: "Senior Dermatologist",
    fee: "₹400",
    degree: "MD Dermatology",
    rating: 4.9,
    reviews: 876,
    experience: "40 years Exp",
    distance: "2.5m",
    available: "Available Today",
    image: doctorImg30,
  },
];

const FilterButton = ({ label }) => (
  <button className="px-4 py-2 rounded-full border border-gray-400 bg-white text-sm hover:bg-gray-100">
    {label}
  </button>
);

const DoctorCard = ({ doc, onViewProfile }) => (
  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-400 flex flex-col gap-4 w-full">
    
    {/* Top */}
    <div className="flex gap-4 items-center ">
      <img
        src={doc.image}
        alt={doc.name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
      />

      <div>
        <h3 className="font-bold font-heading text-base md:text-lg ">{doc.name}</h3>
        <p className="text-teal-600 text-base md:text-xl font-medium">
          {doc.specialty}
        </p>
        <p className="text-gray-400 text-sm">{doc.degree}</p>
      </div>
    </div>

    {/* Info Row */}
    <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
      <span className="flex items-center gap-1">
        <Icon name="star" /> {doc.rating} ({doc.reviews})
      </span>

      <span className="flex items-center gap-1">
        <Icon name="watch" /> {doc.experience}
      </span>

      <span className="flex items-center gap-1">
        <Icon name="location" /> {doc.distance}
      </span>
    </div>

    {/* Tags */}
   <div className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap pb-2">
  <span className="flex items-center gap-1 px-3 py-1 text-xs bg-white rounded-full">
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
    <div className="flex items-center justify-between mt-2">
      <p className="font-semibold text-lg flex items-center gap-1">
       {doc.fee}
        <span className="text-sm text-gray-500 font-normal">
          / per visit
        </span>
      </p>

      <button
  onClick={() => onViewProfile(doc)}
  className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
>
  View Profile
</button>
    </div>
  </div>
);

export default function FindDoctor() {
  const [selectedFilter, setSelectedFilter] = React.useState("All");
const [selectedDoctor, setSelectedDoctor] = React.useState(null);
const [showAppointmentModal, setShowAppointmentModal] = React.useState(false);
const [selectedDate, setSelectedDate] = React.useState(null);
const [selectedTime, setSelectedTime] = React.useState(null);
const [showConfirmModal, setShowConfirmModal] = React.useState(false);
const [showSuccessModal, setShowSuccessModal] = React.useState(false);
const [searchTerm, setSearchTerm] = React.useState("");
const [searchedDoctors, setSearchedDoctors] = React.useState(doctors);
const [showFilterModal, setShowFilterModal] = React.useState(false);
const [selectedAvailability, setSelectedAvailability] = React.useState("All");
const [consultationType, setConsultationType] = React.useState("In-Person");
const [inputValue, setInputValue] = React.useState("");




const filteredDoctors = doctors.filter((doc) => {

  // Category Filter
  const matchesFilter =
    selectedFilter === "All"
      ? true
      : doc.specialty
          .toLowerCase()
          .includes(selectedFilter.toLowerCase());

  // Search Filter
  const matchesSearch =
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());

  // Availability Filter
  const matchesAvailability =
    selectedAvailability === "All"
      ? true
      : doc.available
          .toLowerCase()
          .includes(selectedAvailability.toLowerCase());

  return matchesFilter && matchesSearch && matchesAvailability;
});
  return (
    <div className="bg-[#f3f1ec] min-h-screen flex flex-col items-center py-6 md:py-10 px-3 md:px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-strart">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 md:mb-10">
          Find A Doctor
        </h1>

        {/* Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-lg shadow-sm p-3 max-w-2xl mb-8 gap-3">
  
  <Icon name="search" className="text-gray-400 text-" />

<input
  type="text"
  placeholder="Search By name or specialization"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  className="flex-1 py-2 outline-none text-gray-600"
/>
<button
  onClick={() => setSearchTerm(inputValue)}
  className="bg-blue-900 text-white px-6 py-2 rounded-lg w-full sm:w-auto"
>
  Search

</button>
</div>


        {/* Filters */}
<div className="flex flex-wrap gap-2 md:gap-4 mb-8">

  {[
    "All",
    "Cardiologist",
    "Psychiatrist",
    "Pediatrician",
    "Gynecologist",
    "Dermatologist",
  ].map((item, index) => (
    <button
      key={index}
      onClick={() => setSelectedFilter(item)}
      className={`px-4 py-2 rounded-full border transition-all duration-300 ${
        selectedFilter === item
          ? "bg-[#0F4C81] text-white border-[#0F4C81]"
          : "bg-white border-gray-400 hover:bg-gray-100"
      }`}
    >
      {item}
    </button>
  ))}
<button
  onClick={() => {
    setSelectedFilter("All");
    setShowFilterModal(true);
  }}
  className="rounded-full border border-gray-400 bg-white p-1 hover:bg-gray-100"
>
  <Icon name="filter" />
</button>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc, index) => (
  <DoctorCard
    key={index}
    doc={doc}
    onViewProfile={setSelectedDoctor}
  />
))}
        </div>
        
{/* Overlay */}
{selectedDoctor && (
  <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">

    {/* Sidebar */}
    <div className="w-full md:w-[430px] bg-[#F5F3EE] h-screen overflow-y-auto relative shadow-2xl">

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

         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

    <div className="w-[95%] md:w-[90%] max-w-[600px] bg-white rounded-2xl p-4 md:p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">

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

       <div className="flex flex-col sm:flex-row gap-3">

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

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

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
      <div className="flex flex-col sm:flex-row gap-4 mt-7">

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

    <div className="w-[95%] max-w-[520px] bg-white rounded-[24px] relative shadow-2xl px-4 md:px-8 pt-8 pb-7 text-center">

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


      </div>
    </div>
  );
}