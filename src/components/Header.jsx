import React from 'react'
import logo from "../../logo.svg";
function Header() {
  return (
    <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
      <img
        src={logo}
        className="animate-speed h-60 motion-safe:animate-spin"
        alt="logo"
      />
    </header>
  );
}

export default header
