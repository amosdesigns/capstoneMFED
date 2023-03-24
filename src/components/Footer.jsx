import React from 'react'
import poweredBy from "../assets/powered-by-vitawind-dark.png";

function Footer() {
  return (
    <footer>
      <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
        <a
          className="text-[#61dafb] transition-all hover:text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="text-[#61dafb] transition-all hover:text-blue-400"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
      <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
    </footer>
  );
}

export default Footer
