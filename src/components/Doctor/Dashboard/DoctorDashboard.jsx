import React from "react";

const stats = [
  { title: "Today's Appointment", value: "150", trend: "+4.5%", last: "100" },
  { title: "Total Appointment", value: "55", trend: "+4.2%", last: "40" },
  { title: "Total Patients", value: "1,245", trend: "+8.1%", last: "1,110" },
];

const appointments = [
  {
    id: 1,
    patient: "Abigail Richards",
    phone: "+91-XXXX-XXXX",
    disease: "Anxiety",
    status: "Approve",
    
  },
  {
    id: 2,
    patient: "Ryan Morris",
    phone: "+91-XXXX-XXXX",
    disease: "Throat Pain",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Jerome Watts",
    phone: "+91-XXXX-XXXX",
    disease: "Asthma",
    status: "Approve",
  },
  {
    id: 4,
    patient: "Katherine Murphy",
    phone: "+91-XXXX-XXXX",
    disease: "Headache",
    status: "Rejected",
  },
];

export default function DoctorDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-black">Appointments</h1>
        <button className="bg-[#0C9F84] text-white px-5 py-3 rounded-xl font-semibold">
          + Add Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >
            <p className="text-gray-600 mb-4">{item.title}</p>
            <div className="flex items-end gap-3">
              <h2 className="text-5xl font-bold text-gray-900">{item.value}</h2>
              <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                {item.trend}
              </span>
            </div>
            <p className="text-gray-600 mt-6">Last Month: {item.last}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <input
            type="text"
            placeholder="Search for Appointments"
            className="w-full max-w-xl border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
          <button className="ml-4 border border-gray-300 px-5 py-3 rounded-xl font-semibold">
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#EAF7E5]">
              <tr>
                <th className="px-6 py-4">Sr.No</th>
                <th className="px-6 py-4">Patient Number</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Disease</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className="border-t border-gray-200">
                  <td className="px-6 py-5">{a.id}</td>
                  <td className="px-6 py-5">{a.patient}</td>
                  <td className="px-6 py-5">{a.phone}</td>
                  <td className="px-6 py-5">{a.disease}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        a.status === "Approve"
                          ? "bg-green-50 text-green-700"
                          : a.status === "Pending"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-red-50 text-red-700"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">View / Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 flex items-center justify-between">
          <p className="text-gray-700 font-medium">
            Showing 12-18 of 154 Appointments
          </p>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg border">1</button>
            <button className="w-10 h-10 rounded-lg border">2</button>
            <button className="w-10 h-10 rounded-lg border">3</button>
            <button className="w-10 h-10 rounded-lg border">15</button>
          </div>
        </div>
      </div>
    </div>
  );
}
