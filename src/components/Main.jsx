import React from "react";

function Main({ count, setCount }) {
  return (
    <main>
      <h1 className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
        Vite + React + Tailwindcss v3
      </h1>
      <p className="mt-3">
        <button
          type="button"
          className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code className="text-[#8d96a7]">App.jsx</code> and save to test
        HMR updates.
      </p>
    </main>
  );
}

export default Main;
