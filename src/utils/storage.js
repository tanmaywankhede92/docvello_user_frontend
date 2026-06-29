export const setDoctorSession = (doctor) => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "doctor");
  localStorage.setItem("user", JSON.stringify(doctor));
};

export const getRole = () => localStorage.getItem("role");

export const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
};