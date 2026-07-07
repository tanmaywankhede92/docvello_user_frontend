import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  Upload,
  CircleCheckBig,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EstablishmentProoff() {
 const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [ownerType, setOwnerType] = useState("owner");

const navigate = useNavigate();
  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
        <aside className="w-[290px] bg-[#009879] text-white flex flex-col justify-between py-8 px-6">
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
          <header className="h-[86px] border-b border-[#DBDBDB]  flex justify-end  items-center px-10 bg-white">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt=""
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold">Christina Hanks</h3>
                <p className="text-gray-500 text-sm">
                  christina@gmail.com
                </p>
              </div>
            </div>
          </header>

{/* Content */}
<div className="flex-1 overflow-y-auto bg-[#FAFAFA] px-8 py-6 flex flex-col items-center">

  {/* Step */}
  <p className="text-[18px] text-[#8B8B8B] font-medium">
  Step - 3/3
</p>

  {/* Progress */}
  <div className="flex gap-4 mt-3 mb-6">
  <div className="w-[150px] h-[6px] rounded-full bg-[#009879]" />
  <div className="w-[150px] h-[6px] rounded-full bg-[#009879]" />
  <div className="w-[150px] h-[6px] rounded-full bg-[#009879]" />
</div>

  {/* Card */}
  <div className="w-[560px] bg-white border border-[#D9D9D9] rounded-[28px] px-9 py-8">

    {/* Success Box */}
    <div className="bg-[#EAF8F3] rounded-xl px-5 flex gap-3 mb-2">
      <CircleCheckBig
        size={22}
        className="text-[#009879] mt-1 flex-shrink-0"
      />

      <div>
        <h3 className="font-semibold text-[#009879] text-[18px]">
          Upload Successful
        </h3>

        <p className="text-[#009879] text-[16px] leading-7">
         Your Tax Receipt has been successfully uploaded and is
pending review.
        </p>
      </div>
    </div>

    {error && (
  <div className="bg-[#FDECEC] border border-[#F8B4B4] rounded-xl px-5 py-4 flex gap-3 mb-5">
    <AlertTriangle
      size={22}
      className="text-[#E53935] mt-1 flex-shrink-0"
    />

    <div>
      <h3 className="font-semibold text-[#E53935] text-[18px]">
        Upload Failed
      </h3>

      <p className="text-[#E53935] text-[15px] leading-6">
        {error}
      </p>
    </div>
  </div>
)}

    {/* Heading */}
    <h1 className="text-[34px] font-bold text-center mb-4">
      Establishment Proof
    </h1>

    <div className="mt-6 mb-8">
  <p className="text-[22px] font-medium mb-4">
    I am
  </p>

  <div className="space-y-4">

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="owner"
        value="owner"
        checked={ownerType === "owner"}
        onChange={(e) => setOwnerType(e.target.value)}
        className="w-5 h-5 accent-[#009879]"
      />
      <span className="text-[20px]">
        the owner of establishment
      </span>
    </label>

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="owner"
        value="rent"
        checked={ownerType === "rent"}
        onChange={(e) => setOwnerType(e.target.value)}
        className="w-5 h-5 accent-[#009879]"
      />
      <span className="text-[20px]">
        have rented at other establishment
      </span>
    </label>

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="owner"
        value="other"
        checked={ownerType === "other"}
        onChange={(e) => setOwnerType(e.target.value)}
        className="w-5 h-5 accent-[#009879]"
      />
      <span className="text-[20px]">
        have rented at other establishment
      </span>
    </label>

  </div>
</div>

    {/* Upload Box */}
    <label className="border border-[#D7D7D7] rounded-xl h-[165px] flex flex-col justify-center items-center cursor-pointer">

      <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-4">
        <Upload size={24} />
      </div>

      <p className="font-semibold text-[22px]">
        Click to upload or Drag & drop
      </p>

      <p className="text-[#A4A4A4] text-[15px] mt-2">
        SVG, PNG, JPG & GIF (max. 800X400px)
      </p>

      <input
  type="file"
  className="hidden"
  onChange={(e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setError(""); // Remove error after upload
    }
  }}
/>
    </label>

    {/* Description */}
    <p className="text-[#8B8B8B] text-[18px] leading-8 mt-5">
      Please upload your medical registration proof.
      Only licensed and genuine doctors are listed on Medihub.
    </p>

    {/* Acceptable */}
    <h3 className="font-semibold text-[20px] mt-7 mb-3">
  Acceptable documents
</h3>

<p className="text-[18px] text-[#333]">
  Clinic Registration Proof/ Waste Disposal Proof/ Tax receipt
</p>

    <div className="space-y-3">

      <div className="flex items-center gap-3">
        <CircleCheckBig size={20} className="text-[#38C172]" />
        <span className="text-[17px]">
          Medical Registration Certification
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CircleCheckBig size={20} className="text-[#38C172]" />
        <span className="text-[17px]">
          544457 Maharashtra Medical Council
        </span>
      </div>

    </div>

    {/* Buttons */}
    <div className="flex gap-4 mt-8">

      <button
        onClick={() => navigate("/doctor/dashboard/medicalproof")}
        className="flex-1 h-[50px] rounded-lg border border-[#009879] text-[#009879] text-[18px] font-medium"
      >
        Back
      </button>

      <button
  onClick={() => {
    if (!file) {
      setError("Please upload your establishment proof.");
     return;
    }

    navigate("/doctor/dashboard/registrationthree");
  }}
  className="flex-1 h-[50px] rounded-lg bg-[#009879] text-white text-[18px] font-medium hover:bg-[#00816B]"
>
  Next
</button>

    </div>

  </div>

</div>
</div>

    </div>
  );
}