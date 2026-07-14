import {
  User,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dash1 from "../../../assets/Dashboard/dash1.png";
import { Eye, CircleX } from "lucide-react";
import AddAppointmentModal from "./AddAppointmentModal";
import FilterAppointment from "./FilterAppointment";

export default function Appointments() {
    const navigate = useNavigate();
     const location = useLocation();
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [isFilterOpen, setIsFilterOpen] = useState(false);
     
  return (
<div className="min-h-screen flex flex-col lg:flex-row bg-[#F5F5F5] overflow-hidden">

        {/* Sidebar */}
        <aside className="hidden lg:flex w-[290px] bg-[#009879] text-white flex-col justify-between px-6 py-8">
          <div>
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-14 flex items-center gap-2">
              🩺 <span>DocVello</span>
            </h1>

            <nav className="space-y-5">
  {/* Profile */}
  <button
    onClick={() => navigate("/doctor/registration")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/registration"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <User size={18} />
    Profile
  </button>

  {/* Appointment */}
  <button
    onClick={() => navigate("/doctor/dashboard/appointments")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/appointments"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <Calendar size={18} />
    Appointment
  </button>

  {/* Patients */}
  <button
    onClick={() => navigate("/doctor/dashboard/patients")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/patients"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <Users size={18} />
    Patients
  </button>
</nav>
          </div>

          <div className="space-y-4">
  {/* Settings */}
  <button
    onClick={() => navigate("/doctor/dashboard/settings")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/settings"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <Settings size={18} />
    Settings
  </button>

  {/* Logout */}
  <button
    onClick={() => navigate("/doctor/logout")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/logout"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <LogOut size={18} />
    Log out
  </button>
</div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header */}
          <header className="h-[70px] lg:h-[86px] border-b border-[#DBDBDB] flex justify-end items-center px-4 sm:px-6 lg:px-10 bg-white">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt=""
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-sm lg:text-base">Christina Hanks</h3>
                <p className="text-gray-500 text-xs lg:text-sm">
                  christina@gmail.com
                </p>
              </div>
            </div>
          </header>

{/* Body */}
<div className="flex-1 bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 py-5 lg:py-8 overflow-auto">
  {/* Top */}
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold text-[#1D1D1D]">
      Appointments
    </h1>

 <button
  onClick={() => setIsModalOpen(true)}
  className="bg-[#009879] hover:bg-[#00826A] text-white w-full sm:w-auto px-6 py-3 rounded-lg font-medium"
>
  + Add Appointment
</button>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 max-w-3xl">
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      <p className="text-gray-500 text-sm">Today's Appointment</p>

      <div className="flex items-center gap-3 mt-2">
        <h2 className="text-3xl lg:text-5xl font-bold">150</h2>
      </div>

      <p className="text-gray-500 mt-4">
        Last Month: <span className="font-semibold">100</span>
      </p>
    </div>

    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      <p className="text-gray-500 text-sm">Total Appointment</p>

      <div className="flex items-center gap-3 mt-2">
        <h2 className="text-5xl font-bold">55</h2>
      </div>

      <p className="text-gray-500 mt-4">
        Last Month: <span className="font-semibold">40</span>
      </p>
    </div>
  </div>

  {/* Table Card */}
  <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
    {/* Search */}
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between p-5 border-b">
      <input
        type="text"
        placeholder="Search for Appointments"
        className="w-full sm:w-[320px] lg:w-[420px] border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#009879]"
      />

 <button
  onClick={() => setIsFilterOpen(true)}
  className="border w-full sm:w-auto px-6 py-2 rounded-lg hover:bg-gray-50"
>
  Filter
</button>
    </div>

    {/* Table */}
    <table className="w-full">
      <thead className="bg-[#F2FAF5]">
        <tr className="text-left text-gray-700">
          <th className="px-6 py-4">Sr.No</th>
          <th>Patient Name</th>
          <th>Phone Number</th>
          <th>Disease</th>
          <th>Status</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            id: 1,
            name: "Abigail Richards",
            phone: "+91-XXXX-XXXX",
            disease: "Anxiety",
            status: "Approved",
            color: "bg-green-100 text-green-700",
          },
          {
            id: 2,
            name: "Ryan Morris",
            phone: "+91-XXXX-XXXX",
            disease: "Throat Pain",
            status: "Pending",
            color: "bg-yellow-100 text-yellow-700",
          },
          {
            id: 3,
            name: "Jerome Watts",
            phone: "+91-XXXX-XXXX",
            disease: "Asthma",
            status: "Approved",
            color: "bg-green-100 text-green-700",
          },
          {
            id: 4,
            name: "Katherine Murphy",
            phone: "+91-XXXX-XXXX",
            disease: "Headache",
            status: "Rejected",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 5,
            name: "Janie Simmons",
            phone: "+91-XXXX-XXXX",
            disease: "Back Pain",
            status: "Rejected",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 6,
            name: "Hanry Parker",
            phone: "+91-XXXX-XXXX",
            disease:"Migraine",
            status: "Aprove",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 7,
            name: "mike warren",
            phone: "+91-XXXX-XXXX",
            disease: "Weakness",
            status: "Rejected",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 8,
            name: "Olivia Davis",
            phone: "+91-XXXX-XXXX",
            disease: "Anxity",
            status: "Weakness",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 9,
            name: "Abhigai Richards",
            phone: "+91-XXXX-XXXX",
            disease: "Anxity",
            status: "Aprove",
            color: "bg-red-100 text-red-600",
          },
          {
            id: 10,
            name: "Janie kande",
            phone: "+91-XXXX-XXXX",
            disease: "Headache",
            status: "Approve",
            color: "bg-red-100 text-red-600",
          },
        ].map((item) => (
          <tr
            key={item.id}
            className="border-t hover:bg-gray-50 transition"
          >
            <td className="px-6 py-5">{item.id}</td>

            <td className="font-medium">{item.name}</td>

            <td>{item.phone}</td>

            <td>{item.disease}</td>

            <td>
              <span
                className={`px-4 py-1 rounded-full text-sm ${item.color}`}
              >
                {item.status}
              </span>
            </td>

            <td>
              <div className="flex justify-center gap-3 text-lg">
                <div className="flex justify-center gap-3">
    <Eye size={18}/>
    <CircleX size={18} color="red"/>
</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Footer */}
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center px-4 lg:px-6 py-5 border-t">
      <p className="text-gray-500">
        Showing 12-18 of 154 Appointments
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border">&lt;</button>

        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-[#EAF7F3] text-[#009879] font-semibold">
          1
        </button>

        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border">2</button>

        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border">3</button>

        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border">15</button>

        <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border">&gt;</button>
      </div>
    </div>
  </div>
</div>

      </div>
<AddAppointmentModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>

<FilterAppointment
  isOpen={isFilterOpen}
  onClose={() => setIsFilterOpen(false)}
/>
      </div>  
       

  );
}
