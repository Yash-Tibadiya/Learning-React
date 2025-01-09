import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("gray");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-11">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
            <button
              onClick={() => setBgColor("red")}
              className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setBgColor("green")}
              className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setBgColor("black")}
              className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setBgColor("purple")}
              className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setBgColor("blue")}
              className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
