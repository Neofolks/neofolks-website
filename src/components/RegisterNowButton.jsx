import React from "react";
import '../styles/registerButton.css'
import ArrowRight from '../assets/icons/ArrowRight.svg'

function RegisterNowButton() {
  return (
    <button className="bg-[#f7f7f8] py-2 px-4 rounded-3xl font-semibold text-black flex justify-center items-center gap-1" id="register-button">
      <h3>Register Now</h3>
      <img src={ArrowRight} alt="" />
    </button>
  );
}

export default RegisterNowButton;
