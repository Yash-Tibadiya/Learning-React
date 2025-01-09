import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [paassword, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}()~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-xl h-72 shadow-md rounded-lg px-4 my-8 bg-slate-800 mx-auto">
        <h1 className="text-3xl pt-8 text-white font-bold text-center">
          Password Generator 🔐
        </h1>
        <div className="flex rounded-lg overflow-hidden mb-4 mt-8">
          <input
            type="text"
            value={paassword}
            className="w-full py-1 px-3 bg-slate-700 text-white outline-none"
            placeholder="Password"
            readOnly
          />
          <button className="bg-slate-600 py-1 px-3 text-white text-lg font-bold">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2 py-1 px-3 rounded-lg bg-slate-700 text-white text-lg font-bold">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 py-1 px-3 rounded-lg bg-slate-700 text-white text-lg font-bold">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 py-1 px-3 rounded-lg bg-slate-700 text-white text-lg font-bold">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharecterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharecterInput">Charecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
