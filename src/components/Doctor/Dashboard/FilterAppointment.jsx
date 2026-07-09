import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FilterAppointment({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [status, setStatus] = useState("All");
  const [disease, setDisease] = useState("");
  if (!isOpen) return null;


  const statusOptions = [
    "All",
    "Completed",
    "Pending",
    "Cancelled",
  ];

  const diseases = [
    "Headache",
    "Anxiety",
    "Asthma",
    "Migraine",
    "Back Pain",
    "Throat Pain",
  ];

  const handleReset = () => {
    setStatus("All");
    setDisease("");
  };

  const handleApply = () => {
    console.log({
      status,
      disease,
    });

   onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[530px] rounded-2xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-10 py-7 border-b">
          <h2 className="text-[22px] font-bold text-[#202020]">
            Filter Appointments
          </h2>

          <button onClick={onClose}>
            <X size={34} strokeWidth={2.3} />
          </button>
        </div>

        {/* Body */}
        <div className="px-10 py-8">

          {/* Status */}
          <label className="block text-[18px] font-semibold text-[#202020] mb-5">
            Status
          </label>

          <div className="flex gap-3 flex-wrap mb-10">
            {statusOptions.map((item) => (
              <button
                key={item}
                onClick={() => setStatus(item)}
                className={`px-5 h-11 rounded-xl border text-[17px] transition
                  ${
                    status === item
                      ? "bg-[#009879] text-white border-[#009879]"
                      : "border-gray-300 text-gray-700 hover:border-[#009879]"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Disease */}
          <label className="block text-[18px] font-semibold text-[#202020] mb-4">
            Disease
          </label>

          <div className="relative mb-10">
            <select
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              className="appearance-none w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#009879]"
            >
              <option value="">Select Disease</option>

              {diseases.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">

            <button
              onClick={handleReset}
              className="w-[110px] h-12 rounded-xl border border-gray-300 font-semibold text-[18px] hover:bg-gray-50"
            >
              Reset
            </button>

            <button
              onClick={handleApply}
              className="w-[210px] h-12 rounded-xl bg-[#009879] text-white font-semibold text-[18px] hover:bg-[#00846A]"
            >
              Apply Filters
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}