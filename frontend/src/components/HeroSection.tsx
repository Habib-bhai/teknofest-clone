function HeroSection() {
  return (
    <div className="w-[90vw] h-[120vh] flex flex-wrap md:flex-nowrap justify-center items-center">
        
            <img src="/website.gif" alt="gif" className="w-96 h-96 md:w-[543px] md:h-[679px]" />
        
        <div className="text-white mt-[-350px] md:mt-0 text-center md:text-left">
            <h2 className="font-['Poppins']  text-xl font-semibold mb-4">upcoming new event 2024</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 flex items-center"><p className="h-16 w-[3px] bg-[#f64543] mr-5"> </p> TEKNOFEST PAKISTAN</h1>
            <p className="flex items-center gap-1 mb-3 justify-center md:justify-start text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>12 & 13th October 2024</p>

            <p className="flex items-center gap-1 mb-3 justify-center md:justify-start text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>Expo Center Karachi, hall 3 & 4 </p>
            <p className="p-4 text-xl">Empowering innovation, igniting future leaders. Teknofest Pakistan – where technology meets limitless possibilities</p>


            <div className="text-white md:mt-10 flex flex-col justify-center items-center gap-5">
            <button className="bg-[#388636] transition-colors duration-300 ease-in-out hover:bg-[#2c5f9a]  w-24 h-10 rounded-full text-[14px]">BOOKKARU</button>

         <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-2">
            <button className="bg-[#388636] transition-colors duration-300 ease-in-out hover:bg-[#2c5f9a]  px-10 py-2 rounded-full text-[14px]">GRAB YOUR PASS</button >
            <button className="bg-[#388636] transition-colors duration-300 ease-in-out hover:bg-[#2c5f9a]  px-10 py-2 rounded-full text-[14px]">SEE COMPETITIONS</button>
         </div>   

            <button className="bg-[#388636] transition-colors duration-300 ease-in-out hover:bg-[#2c5f9a] w-48 h-10 rounded-full text-[14px]">PROJECT REGISTRATION</button>
        </div>

        </div>

      

    </div>
  )
}

export default HeroSection