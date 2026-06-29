import React from "react";
import mapImage from "../../../assets/ContactPage/Location.png";
import Icon from "../../ui/Icon/icon";

export default function ContactSection() {
  return (
    <div className="w-full bg-[#f5f3ef] py-12 md:py-20 px-4 sm:px-6 md:px-12">
      {/* CONTAINER */}
      <div className="max-w-7xl px-0 md:px-8 mx-auto">
        {/* HEADING */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1d1d] leading-tight max-w-3xl">
            Talk to our care team and send your message in one place.
          </h1>

          <p className="text-gray-400 text-base md:text-lg mt-4 md:mt-5">
            Stay connected with us for all your healthcare needs.
          </p>
        </div>

        {/* MAIN GRID */}   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT FORM */}
          <div className="bg-[#f8f8f8] border border-gray-200 rounded-[28px] p-8">
            <h2 className="text-3xl font-bold text-[#1d1d1d] mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              {/* ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* FULL NAME */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="w-full h-[52px] border border-gray-300 rounded-lg px-4 outline-none focus:border-[#0D4D8B]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input


                    type="email"
                    className="w-full h-[52px] border border-gray-300 rounded-lg px-4 outline-none focus:border-[#0D4D8B]"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  className="w-full h-[52px] border border-gray-300 rounded-lg px-4 outline-none focus:border-[#0D4D8B]"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  className="w-full border border-gray-300 rounded-lg p-4 outline-none resize-none focus:border-[#0D4D8B]"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#0D4D8B] hover:bg-[#083b6b]  transition-all duration-300 text-white font-semibold py-4 rounded-xl">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#f8f8f8] p-8">
            <h2 className="text-3xl font-bold text-[#1d1d1d] mb-2">
              Contact Information
            </h2>

            {/* INFO BOXES */}
            <div className="space-y-5">
              {/* PHONE */}
              <div className="bg-white rounded-2xl pb-[1px] p-5 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-gray-300 flex items-center justify-center">
                  <Icon name="Phone" className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1d1d1d]">Phone</h3>

                  <p className="text-gray-400 mt-1">+91-XXXX-XXXX</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="bg-white rounded-2xl pb-[1px] p-5 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-gray-300 flex items-center justify-center">
                  <Icon name="Mail" className="w-7 h-7" />
                </div>

                <div> 
                  <h3 className="font-bold text-lg text-[#1d1d1d]">Email</h3>

                  <p className="text-gray-400 mt-1">123@mail.com</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-gray-300 flex items-center justify-center">
                  <Icon name="MapPin" className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1d1d1d]">Location</h3>

                  <p className="text-gray-400 mt-1 leading-relaxed">
                    Office No. 21, Link Road, Andheri West, Mumbai, MH 400053
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-8">
              <img
                src={mapImage}
                alt="Map"
                className="w-full h-[280px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
