import { X, Camera, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AddAppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [photo, setPhoto] = useState(null);

  if (!isOpen) return null;

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[520px] h-[620px] rounded-2xl bg-white shadow-2xl p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6"
        >
          <X size={34} strokeWidth={2.5} />
        </button>

        {/* Heading */}
        <h2 className="text-[34px] font-bold text-[#202020]">
          Add New Appointment
        </h2>

        <p className="text-[#A2A2A2] text-lg mt-2 mb-4">
          Enter the details to add new appointment
        </p>

       {/* Upload */}
<div className="flex items-center gap-5 mb-6">

  {/* Profile Image */}
<div className="w-20 h-20 rounded-full border border-dashed border-gray-500 overflow-hidden flex items-center justify-center">
  {photo ? (
    <img
      src={photo}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  ) : (
    <Camera size={34} className="text-gray-400" />
  )}
  
</div>

 <div>
  {photo ? (
    <button
      onClick={() => setPhoto(null)}
      className="border border-red-500 text-red-500 rounded-xl px-6 py-3 hover:bg-red-50"
    >
      Remove Photo
    </button>
  ) : (
    <>
      <input
        type="file"
        id="photo"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoChange}
      />

      <label
        htmlFor="photo"
        className="cursor-pointer border border-gray-300 rounded-xl px-6 py-3 font-medium hover:bg-gray-50 inline-block"
      >
        Upload Photo
      </label>
       <p className="text-sm text-gray-400 mt-3">
    SVG, PNG, JPG or GIF (max. 800x400px)
  </p>
    </>
  )}

 
</div>
  

</div>


        {/* Row */}
        <div className="grid grid-cols-2 gap-6 mb-4">

          <div>
            <label className="font-semibold text-lg block mb-3">
              First Name
            </label>

            <input
              type="text"
              className="w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#009879]"
            />
          </div>

          <div>
            <label className="font-semibold text-lg block mb-3">
              Phone Number
            </label>

            <input
              type="text"
              className="w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#009879]"
            />
          </div>

        </div>

        {/* Disease */}
        <div className="mb-4">
          <label className="font-semibold text-lg block mb-3">
            Disease
          </label>

          <div className="relative">

            <select className="appearance-none w-full h-12 rounded-xl border border-gray-300 px-4 outline-none">

              <option>Select Disease</option>
              <option>Headache</option>
              <option>Anxiety</option>
              <option>Migraine</option>
              <option>Asthma</option>

            </select>

            <ChevronDown
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

          </div>
        </div>

        {/* Status */}
        <div className="mb-5">

          <label className="font-semibold text-lg block mb-3">
            Status
          </label>

          <div className="relative">

            <select className="appearance-none w-full h-12 rounded-xl border border-gray-300 px-4 outline-none">

              <option>Select Status</option>
              <option>Complete</option>
              <option>Pending</option>
              <option>Cancelled</option>

            </select>

            <ChevronDown
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-5">

          <button
            onClick={onClose}
            className="w-[170px] h-12 rounded-xl border border-gray-300 text-[18px] font-medium hover:bg-gray-50"
          >
            Cancel
          </button>

          <button className="w-[300px] h-12 rounded-xl bg-[#009879] text-white text-[18px] font-medium hover:bg-[#00846A]">
            Add Appointment
          </button>
        </div>
      </div>
    </div>
  );
}