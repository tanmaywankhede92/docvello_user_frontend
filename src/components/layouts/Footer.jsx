import Icon from "../ui/Icon/icon";
import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate();
const location = useLocation();

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Specialization", href: "/specialization" },
  { label: "Contact", href: "/contact" },
];
  
  return (
    <footer className="w-full border-t rounded-4xl border-[#929292] pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* LEFT */}
        <div className="space-y-4">
          <img src={logo} alt="logo" className="h-22 w-auto" />

          <p className="text-[16px] text-[#5E5E5E] font-semibold leading-relaxed max-w-xs font-medium font-body">
            Providing reliable healthcare access by connecting you with top-rated medical professionals in your area.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            <Icon name="instagram"/>
            <Icon name="facebook" />
            <Icon name="youtube" />
            <Icon name="twitter" />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-start md:justify-self-center">
          <h3 className="text-[18px] font-bold font-heading text-[#313131] mb-3 text-center md:text-left">
           Quick Links
          </h3>
          
          <ul className="space-y-4 text-[16px] font-medium font-heading md:text-left">
  {footerLinks.map((link) => {
    const isActive = location.pathname === link.href;

    return (
      <li key={link.href}>
        <button
          onClick={() => navigate(link.href)}
          className={`cursor-pointer transition-all duration-200 ${
            isActive
              ? "text-black font-semibold"
              : "text-[#5E5E5E] hover:text-black"
          }`}
        >
          {link.label}
        </button>
      </li>
    );
  })}
</ul>
        </div>


        {/* RIGHT */}
<div>
  <h3 className="text-[18px] font-bold font-heading text-[#313131] mb-6">
    Contact Information
  </h3>

  <div className="space-y-7 text-[14px] text-gray-600">
    
    {/* LOCATION */}
    <div className="flex items-start gap-3">
      <Icon name="Location" />
      <div>
        <h4 className=" text-[15px] font-bold  mb-1 text-gray-800">
          Location
        </h4>
        <p className="text-[15px] font-medium font-heading text-[#5E5E5E]">
          Office No. 21, Link Road, Andheri West, Mumbai, MH 400053
        </p>
      </div>
    </div>

    {/* PHONE */}
    <div className="flex items-start gap-3">
      <Icon name="Phone" />
      <div>
        <h4 className="text-[15px] font-bold mb-1 text-gray-800">
          Phone
        </h4>
        <p className="text-[15px] font-medium font-heading text-[#5E5E5E]">
          +91-XXXX-XXXX
        </p>
      </div>
    </div>

    {/* EMAIL */}
    <div className="flex items-start gap-3">
      <Icon name="Email"/>
      <div>
        <h4 className="text-[15px] font-bold mb-1 text-gray-800">
          Email
        </h4>
        <p className="text-[15px] font-medium font-heading text-[#5E5E5E]">
          123@gmail.com
          
        </p>
      </div>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}