import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-cyan-400 rounded-[10px] outline-none ${styles} hover:bg-cyan-600 hover:text-white duration-300`}>
    Get Started
  </button>
);

export default Button;