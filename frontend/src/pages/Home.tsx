import HeroSection from "../components/HeroSection"
import "../index.css"
import { useEffect, useState } from "react"

function Home() {


  let [height, setHeight] = useState(0)
  let [width, setWidth] = useState(0)

  useEffect(() => {

    setHeight(window.screen.height)
    setWidth(window.screen.width)
  }, [])
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen  h-[130vh] bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
        <div className="w-screen  h-[130vh] bg-zinc-800/75">

          <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
            <HeroSection />
          </div>

        </div>

      </div>

      {/* iframe */}
      <div className="w-screen flex justify-center items-center mt-10">
        <iframe className="w-[450px] h-[250px] md:w-[900px] md:h-[400px]" src="https://www.youtube.com/embed/btXnoA1cf8k?si=6TzN1omicJ8zkqxT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      {/* Overview Section*/}
      <div className="  flex flex-wrap md:flex-nowrap justify-center items-center relative ">

        <div className="flex flex-col items-start  px-10">

          <p className="text-[#3A4cB4]">OVERVIEW</p>
          <h1 className="font-[Poppins] text-3xl font-semibold ">GET THE LATEST INFO ABOUT </h1>
          <h1 className="font-[Poppins] text-3xl font-bold text-[#388636]">TEKNOFEST</h1>

          <p className="text-[#707070]  py-4 md:mr-[500px]">Teknofest Pakistan is a cutting-edge technology and innovation festival, dedicated to fostering creativity, entrepreneurship, and scientific development. Drawing inspiration from the globally renowned Teknofest, this event brings together the brightest minds, forward-thinking startups, and tech enthusiasts from across the nation. Focused on promoting advancements in fields such as robotics, artificial intelligence, aerospace, and green technologies, Teknofest Pakistan offers participants an opportunity to showcase their innovations, compete in national competitions, and engage with industry experts.</p>

          <div className="flex  items-center justify-center shadow-xl shadow-silver p-3 rounded-lg">
            <svg className={`hover:bg-[#3A4cB4] bg-[#388636] py-2 px-2 rounded-full`} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            <div className="flex flex-col items-center justify-start w-[250px]">
              <h2 className="text-2xl font-semibold">Where</h2>
              <p className="text-[#707070] text-[14px]">Expo Center Karachi, Hall 3 & 4</p>
            </div>
          </div>
        </div>

        <div>


        </div>

        <div className="w-full mt-10 md:mt-0 md:absolute md:top-6 md:right-[-380px] flex justify-center items-center  gap-3">

          {height > 450 && width > 600 ? (
            <>
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <img src="/img1.jpg" alt="image" className="h-96 w-96 md:h-32 md:w-32 rounded-2xl" />
            <img src="/img2.png" alt="image " className="h-96 w-96 md:h-48 md:w-52 rounded-2xl mt-6" />
          </div>
            <img src="/img3.png" alt="image" className="h-96 w-96 md:h-44 md:w-44 rounded-2xl " />
          </>) : <div className="flex flex-col justify-center items-center">
            <img src="/img1.jpg" alt="image" className="h-96 w-96 md:h-32 md:w-32 rounded-2xl mb-7 md:mb-0" />
            <img src="/img2.png" alt="image " className="h-96 w-96 md:h-48 md:w-52 rounded-2xl mt-6 mb-7 md:mb-0" />
            <img src="/img3.png" alt="image" className="h-96 w-96 md:h-44 md:w-44 rounded-2xl " />
          </div>}

        </div>

      </div>
    </>
  )
}

export default Home