import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="w-screen h-screen" style={{backgroundColor:color}}>
        <div className="absolute bottom-5 left-[40%]">
          <div className="flex items-center shadow-lg  p-3 gap-2 bg-white rounded-full">
            <button className="shadow-sm p-3 bg-red-500 rounded-full text-white" onClick={()=>setColor('red')}>
              Red
            </button>
            <button className="shadow-sm p-3 bg-green-500 rounded-full text-white"  onClick={()=>setColor('green')}>
              Green
            </button>
            <button className="shadow-sm p-3 bg-yellow-500 rounded-full text-white"  onClick={()=>setColor('yellow')}>
              Yellow
            </button>
            <div className="ml-2">
              <input type="text" className="px-2 border-red-400 border-2 placeholder:placeholder-slate-800 active:border-none rounded-sm" placeholder="#000000" onChange={(e)=>setColor(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
