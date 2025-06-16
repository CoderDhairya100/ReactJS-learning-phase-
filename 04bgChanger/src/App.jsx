import { useState } from "react"


function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-500 px-3 py-2 rounded-3xl">


          <button
          onClick={() => setColor("Red")}
          className=" outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "red"}}>Red</button>


          <button 
          onClick={() => setColor("SkyBlue")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "SkyBlue"}}>Blue</button>


          <button 
          onClick={() => setColor("Black")}
          className="outline-none px-3 py-1 font-bold rounded-lg text-white shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Black"}}>Black</button>


          <button 
          onClick={() => setColor("White")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "White"}}>White</button>


          <button 
          onClick={() => setColor("Cyan")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Cyan"}}>Cyan</button>


          <button 
          onClick={() => setColor("Orange")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Orange"}}>Orange</button>


          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Yellow"}}>Yellow</button>


          <button 
          onClick={() => setColor("Green")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Green"}}>Green</button>


          <button 
          onClick={() => setColor("Violet")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Violet"}}>Violet</button>


          <button 
          onClick={() => setColor("Silver")}
          className="outline-none px-3 py-1 font-bold rounded-lg shadow-black shadow-md
          active:scale-95 transition-transform duration-150" 
          style={{backgroundColor: "Silver"}}>Silver</button>


        </div>
      </div>
    </div>
  )
}

export default App
