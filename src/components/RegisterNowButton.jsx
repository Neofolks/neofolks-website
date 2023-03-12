import React from "react";
import '../styles/registerButton.css'
import ArrowRight from '../assets/icons/ArrowRight.svg'

function RegisterNowButton() {
  return (
    <button className="bg-[#f7f7f8] p-2 px-6 rounded-3xl max-w-[150px] font-semibold text-black" id="register-button">
      <h3>Register Now</h3>
    </button>
  );
}

export default RegisterNowButton;
