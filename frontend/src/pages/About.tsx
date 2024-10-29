import image1 from '../../public/about-section-img1.webp';
import image2 from '../../public/about-section-img2.webp';
import image3 from '../../public/about-section-img3.webp';
import img from '../../public/bg.jpg';
// import map_img from '../../public/map_img.jpg'
import pass_icon from '../../public/pass-iconnn1.png';
import arrow_icon from '../../public/arrow-icon2.png';
import competition_icon from '../../public/competition-icon3.png';
import { NavLink } from "react-router-dom";
import speaker1 from '../../public/speaker1.webp';
import speaker2 from '../../public/speaker2.webp';
import speaker3 from '../../public/speaker3.webp';
import speaker4 from '../../public/speaker4.webp';
import bg_img from '../../public/bg.jpg';
function About() {
  return (
    <>
      <div className="relative  ">
        <img src={img} alt="cover" className="w-full h-[20rem] object-cover" />
        <h1 className="text-4xl font-['Poppins']  text-white font-bold absolute top-[50%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 ">ABOUT US</h1>
      </div>

      <div className="w-[90vw] h-[80vh] flex flex-wrap md:flex-nowrap justify-center items-center">
        <div>
          <h3 className="text-xl text-blue-700 mx-3">OVERVIEW</h3>
          <h1 className="text-4xl font-bold font-['Poppins']  text-blue-950 mt-2 mx-3">GET THE LATEST INFO ABOUT <span className="text-green-700"><br />TEKNOFEST</span>  </h1> <br />
          <p className="text-gray-500 font-semibold mt-2 mx-3">Teknofest Pakistan is a cutting-edge technology and innovation festival, dedicated to<br /> fostering creativity,
            entrepreneurship, and scientific development. Drawing inspiration <br /> from the globally renowned Teknofest, this event brings together the brightest minds,
            forward-thinking <br /> startups, and tech enthusiasts from across the nation. Focused on promoting advancements in <br /> fields such as robotics, artificial intelligence, aerospace, and green
            technologies, Teknofest Pakistan <br /> offers participants an opportunity to showcase their innovations, compete in national competitions, and engage with industry experts.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:w-1/2 mt-10 lg:mt-0 relative ">
          <img src={image1} alt="img1" className="rounded-lg shadow-2xl w-50 h-50 object-cover " />
          <img src={image2} alt="img2" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          <img src={image3} alt="img3" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
        </div>
      </div>

      <div className=" flex flex-col items-center mt-10">
        {/* <img src={map_img} alt="map" className="w-[200rem] h-[30rem]" /> */}
        <div className="w-[90vw] h-[120vh] flex flex-wrap md:flex-nowrap justify-end mr-[34rem]">
          <div>
            <h3 className="text-sm md:text-sm text-blue-700 mx-3">WHY ATTEND TEKNOFEST</h3>
            <h1 className="text-5xl font-bold font-['Poppins'] text-blue-950 mt-2 mx-3">WHAT YOU'LL <br /> DISCOVER AT<span className="text-green-700"><br />TEKNOFEST</span></h1>
            <br />
            <p className="text-gray-500 font-semibold mt-2 mx-3">
              Attending Teknofest Pakistan offers a unique <br />opportunity to witness and engage with <br />groundbreaking innovations in technology, including <br />  AI, robotics, and
              engineering. It provides a platform for <br />  networking with industry leaders, innovators, and tech<br />enthusiasts, fostering collaboration and knowledge <br /> exchange.
              Participants can sharpen their skills<br />through hands-on workshops, exciting competitions, <br />and challenges that spark creativity and problem-solving.<br />
              With exclusive exhibitions and project<br />showcases, Teknofest inspires innovation while providing a<br />glimpse into the future of tech, making it<br />  an
              unmissable event for anyone passionate about<br />technological advancement in Pakistan
            </p>
          </div>
        </div>
        <div className="w-[90vw] h-[80vh] space-x-8">
        <div className="grid grid-cols-2 gap-6 lg:w-1/2 lg:mt-0 relative items-start  ">

          <div className="bg-slate-100 rounded-lg shadow-lg p-5 flex flex-col items-center">
            <img src={pass_icon} className="w-30 h-20 " />
            <h2 className="text-3xl font-bold text-blue-900 hover:text-green-700">GRAB YOUR PASS</h2>
            <p className="text-gray-500">Grab Your Pass</p>
            <NavLink to={'/learn-more'} className="bg-gradient-to-r from-[#333970] to-[#325632]  text-white font-bold py-2 px-4 rounded mt-4">Learn more</NavLink>
          </div>

          <div className="bg-slate-100 rounded-lg shadow-lg p-5 flex flex-col items-center" >
            <img src={arrow_icon} className="w-10 h-17 " />
            <h2 className="text-3xl font-bold text-blue-900 hover:text-green-700">PROJECTS</h2>
            <p className="text-gray-500">Present innovative projects that<br /> push the  boundaries of technology.</p>
            <NavLink to={'/learn-more'} className="bg-gradient-to-r from-[#333970] to-[#325632]  text-white font-bold py-2 px-4 rounded mt-6">Learn more</NavLink>
          </div>

          <div className="bg-slate-100 rounded-lg shadow-lg p-5 flex flex-col items-center">
            <img src={competition_icon} className="w-10 h-17 " />
            <h2 className="text-3xl font-bold text-blue-900 hover:text-green-700">COMPETITIONS</h2>
            <p className="text-gray-500">Participate in thrilling tech challenges<br /> with exciting rewards.</p>
            <NavLink to={'/learn-more'} className="bg-gradient-to-r from-[#333970] to-[#325632]  text-white font-bold py-2 px-4 rounded mt-6">Learn more</NavLink>
          </div>
        </div>

      </div>
      </div>
      <div className="bg-slate-100 object-cover py-16 px-10 ">
        <h1 className="uppercase text-md text-blue-900 text-center md:text-left  md:pl-20 pt-10">Event Speakers</h1>
        <h1 className="uppercase text-4xl md:text-5xl text-blue-900 font-bold text-center md:text-left md:pl-20 mt-2">meet our speakers</h1>
        <div className="flex justify-center md:justify-end md:pr-20 mt-9">
          <button className="bg-green-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md hover:rounded-full transition duration-100">VIEW MORE SPEAKERS </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-8 ">

          <div className=" rounded-lg flex flex-col mt-9 ">
            <img src={speaker1} loading="lazy" className="w-[100%] h-[15rem] rounded-2xl" />
          </div>
          <div className=" rounded-lg flex flex-col mt-9 ">
            <img src={speaker2} loading="lazy" className="w-[100%] h-[15rem] rounded-2xl" />
          </div>
          <div className=" rounded-lg flex flex-col mt-9 ">
            <img src={speaker3} loading="lazy" className="w-[100%] h-[15rem] rounded-2xl " />
          </div>
          <div className=" rounded-lg flex flex-col mt-9">
            <img src={speaker4} loading="lazy" className="w-[100%] h-[15rem] rounded-2xl " />
          </div>
        </div>
        
        <div className= "mt-9 relative bg-cover bg-center">
          <img src={bg_img}  className="w-full h-[30rem] "  />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-bold text-2xl text-center">LET'S DO IT HURRY <br />
              <span className="text-7xl">Join the Future of</span> <br/>
              <span className="text-[15px]">Become a part of Teknofest – Exhibit your vision or explore the best in tech.</span>
            </h1>
            <div className="mt-[18rem] justify-center ">
            <button className="bg-white text-green-900 font-bold py-2 px-4 rounded-md hover:rounded-full transition duration-100 hover:bg-green-800 hover:text-white">GRAB YOUR PASS</button>  
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default About;

