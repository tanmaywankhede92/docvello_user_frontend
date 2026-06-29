import {
  User,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-3">
      <div className="bg-white rounded-[28px] overflow-hidden flex h-[95vh] shadow-2xl">

        {/* Sidebar */}
        <aside className="w-64 bg-[#009879] text-white flex flex-col justify-between py-8 px-6">
          <div>
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-14 flex items-center gap-2">
              🩺 <span>DocVello</span>
            </h1>

            <nav className="space-y-5">
              <button className="bg-white text-[#009879] w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium">
                <User size={18} />
                Profile
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
                <Calendar size={18} />
                Appointment
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
                <Users size={18} />
                Patients
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
              <Settings size={18} />
              Settings
            </button>

            <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
              <LogOut size={18} />
              Log out
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <header className="h-20 flex justify-end items-center px-10">
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

          {/* Body */}
          <div className="flex flex-1 px-10 py-10 gap-10">

            {/* Left */}
            <div className="w-[48%]">

              <h1 className="text-4xl font-bold text-gray-800">
                Great Progress!
              </h1>

              <p className="text-gray-400  mb-10">
                Your Profile is just few steps away to complete.
              </p>

              {/* Card 1 */}
              <div className="border rounded-2xl p-4 shadow-sm mb-5">

                <h2 className="font-semibold text-xl">
                  Section A: Profile Details
                </h2>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  Doctor's basic details, medical registration,
                  education qualification, establishment details etc.
                </p>

                <button className="mt-6 bg-[#009879] text-white px-8 py-3 rounded-lg">
                  Continue
                </button>
              </div>

              {/* Card 2 */}
              <div className="border rounded-2xl p-4 mb-5 bg-gray-50">
                <h2 className="font-semibold text-xl text-gray-400">
                  Section B: Profile verification
                </h2>

                <p className="text-gray-400 text-sm mt-3">
                  Doctor identity proof, registration proof,
                  establishment ownership proof etc.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border rounded-2xl p-4 bg-gray-50">
                <h2 className="font-semibold text-xl text-gray-400">
                  Step C: Start getting patients
                </h2>

                <p className="text-gray-400 text-sm mt-3">
                  Location, Timings, Fees
                </p>
                
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 flex justify-center items-center">

              <div className="bg-black rounded-[35px] p-4 shadow-2xl">

                <div className="bg-white rounded-[20px] overflow-hidden w-[380px]">

                  {/* Mock Website */}
                  <div className="p-8">

                    <div className="flex justify-between items-center mb-8">
                      <div className="font-bold text-[#009879]">
                        DocVello
                      </div>

                      <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                    </div>

                    <div className="flex gap-5">

                      <div className="flex-1">
                        <h2 className="text-3xl font-bold leading-tight">
                          Find the Right Doctor and Book Your Appointment
                        </h2>

                        <div className="border rounded-lg p-3 mt-6">
                          <input
                            className="w-full outline-none text-sm"
                            placeholder="Describe your symptoms..."
                          />

                          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded mt-3">
                            Analyze
                          </button>
                        </div>

                        <div className="flex gap-2 mt-4 flex-wrap">
                          {[
                            "Headache",
                            "Cold",
                            "Fever",
                            "Diabetes",
                            "Anxiety",
                          ].map((item) => (
                            <span
                              key={item}
                              className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <img
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500"
                        className="w-28  rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* Green Section */}
                  <div className="bg-[#42c7b1] p-8">

                    <h3 className="text-center text-white text-2xl font-semibold mb-6">
                      Quick Appointment Booking
                    </h3>

                    <div className="grid grid-cols-3 gap-4">

                      {[
                        "Clinic Visit",
                        "Video Consult",
                        "Prescription Refill",
                      ].map((item) => (
                        <div
                          key={item}
                          className="bg-white rounded-xl p-5 text-center"
                        >
                          <div className="text-3xl mb-2">🏥</div>
                          <p className="font-medium text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="py-6 text-center">
                    <h3 className="font-bold text-xl">
                      Featured Doctors
                    </h3>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
