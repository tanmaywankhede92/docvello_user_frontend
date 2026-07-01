import {
  User,
  CalendarDays,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function BasicDetails() {
  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-emerald-600 text-white flex flex-col">
        <div className="p-8">
          <h1 className="text-3xl font-bold">DocVello</h1>
        </div>

        <div className="px-6 space-y-4">
          <button className="w-full bg-white text-emerald-600 rounded-xl py-4 px-5 flex items-center gap-3 font-medium shadow">
            <User size={20} />
            Profile
          </button>

          <button className="w-full rounded-xl py-4 px-5 flex items-center gap-3 hover:bg-white/10">
            <CalendarDays size={20} />
            Appointment
          </button>
          <button className="w-full rounded-xl py-4 px-5 flex items-center gap-3 hover:bg-white/10">
            <Users size={20} />
            Patients
          </button>
        </div>

        <div className="mt-auto p-6">
          <button className="flex items-center gap-3">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-24 bg-white border-b flex justify-end items-center px-10">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="w-14 h-14 rounded-full"
            />

            <div>
              <h2 className="font-semibold text-xl">Christina Hanks</h2>
              <p className="text-gray-500 text-sm">
                christina@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white w-[520px] rounded-3xl border p-10 shadow-sm">
            {/* Step */}
            <p className="text-center text-gray-500 mb-4">
              Step - 1/5
            </p>

            <div className="flex justify-center gap-3 mb-10">
              <div className="w-20 h-2 bg-emerald-600 rounded-full"></div>
              <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
            </div>

            <h1 className="text-4xl font-bold text-center mb-10">
              Basic Details
            </h1>

            {/* Name */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-600">
                Name
              </label>

              <div className="relative">
                <select className="w-full border rounded-lg p-3 appearance-none">
                  <option>Dr</option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-4 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Specialization */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-600">
                Specialization
              </label>

              <div className="relative">
                <select className="w-full border rounded-lg p-3 appearance-none">
                  <option>Cardiologist</option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-4 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block mb-3 text-gray-600">
                Gender
              </label>

              <div className="flex gap-8">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked
                    className="accent-emerald-600 w-5 h-5"
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-emerald-600 w-5 h-5"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* City */}
            <div className="mb-8">
              <label className="block mb-2 text-gray-600">
                City
              </label>

              <div className="relative">
                <select className="w-full border rounded-lg p-3 appearance-none">
                  <option>Nagpur</option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-4 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 border border-emerald-600 text-emerald-600 py-3 rounded-lg font-medium">
               Back
              </button>
              <button className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}