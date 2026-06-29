import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      
    };

    syncUser();

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);
const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
  setUser(null);
  setProfileMenuOpen(false);
  setMobileProfileOpen(false);
  setMenuOpen(false);
  navigate("/login");
};

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Find Doctors", href: "/doctors" },
    { label: "Specialization", href: "/specialization" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <img
          src={logo}
          alt="logo"
          className="h-10 sm:h-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <ul className="hidden md:flex gap-8 text-[16px] font-medium text-gray-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => navigate(link.href)}
                  className={`transition-all duration-200 ${
                    isActive ? "text-black font-semibold" : "hover:text-black"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
        {user ? (
          <button
            onClick={() => setProfileMenuOpen((prev) => !prev)}
            className="hidden md:flex items-center justify-center"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:scale-105 transition"
            >
              <circle
                cx="32"
                cy="32"
                r="31"
                fill="white"
                stroke="#0F4C81"
                strokeWidth="2"
              />
              <path
                d="M32.0094 33.2805C35.544 33.2805 38.4094 30.4151 38.4094 26.8805C38.4094 23.3458 35.544 20.4805 32.0094 20.4805C28.4748 20.4805 25.6094 23.3458 25.6094 26.8805C25.6094 30.4151 28.4748 33.2805 32.0094 33.2805Z"
                stroke="#0F4C81"
                strokeWidth="2.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.2495 43.5203C42.2495 40.8045 41.1707 38.1999 39.2503 36.2795C37.3299 34.3591 34.7253 33.2803 32.0095 33.2803C29.2937 33.2803 26.6891 34.3591 24.7688 36.2795C22.8484 38.1999 21.7695 40.8045 21.7695 43.5203"
                stroke="#0F4C81"
                strokeWidth="2.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {profileMenuOpen && (
              <div className="absolute right-35 mt-23 w-30  bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setProfileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
                >
                  Profile
                </button>

                <button
                  onClick={() => {
                    navigate("/profile");
                    setProfileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
                >
                  My History
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-red-600 border-t border-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="hidden md:block bg-[#0F4C81] text-white px-5 py-2 rounded-md text-[16px]"
          >
            Login
          </button>
        )}

        <button
          className="md:hidden text-3xl text-[#0F4C81]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-[16px] font-medium text-gray-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      navigate(link.href);
                      setMenuOpen(false);
                    }}
                    className={`block w-full text-left ${
                      isActive ? "text-black font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
{user ? (
  <div className="mt-4">
    <button
      onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
      className="w-full bg-[#0F4C81] text-white py-2 px-4 rounded-md flex justify-between items-center"
    >
      <span>{user.name}</span>
      <span>{mobileProfileOpen ? "▲" : "▼"}</span>
    </button>

    {mobileProfileOpen && (
      <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
        <button
          onClick={() => {
            navigate("/profile");
            setMenuOpen(false);
            setMobileProfileOpen(false);
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-100"
        >
          Profile
        </button>

        <button
          onClick={() => {
            navigate("/history"); // Change route if needed
            setMenuOpen(false);
            setMobileProfileOpen(false);
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-100"
        >
          My History
        </button>

        <button
          onClick={() => {
            handleLogout();
            setMenuOpen(false);
            setMobileProfileOpen(false);
          }}
          className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 border-t"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <button
    onClick={handleLoginClick}
    className="mt-4 w-full bg-[#0F4C81] text-white py-2 rounded-md"
  >
    Login
  </button>
)}
        </div>
      )}
    </header>
  );
}
