import Navbar from "./Navbar";

<Navbar />
import {  NavLink } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className=" font-[Poppins] w-full mt-8 flex flex-col justify-center items-center bg-gradient-to-r from-[#333970] to-[#325632]">
                <img src="/AMP.png" alt="logo" className="w-48 h-48 rounded-full mt-10" />


                <div className="md:px-40">

                    <h1 className=" text-xl  font-semibold  text-center mt-6 text-white ">Empowering innovation, igniting future leaders. Teknofest Pakistan where technology meets limitless possibilities</h1>
                </div>

                <div className="flex justify-center items-center gap-3 mt-10">

                <NavLink to={"https://www.facebook.com/TeknofestPakistan"} target="_blank"><img src="/facebook.png" alt="" className="w-10 h-10 p-3 bg-white/40 rounded-full hover:bg-[#388636]" /> </NavLink>

                    <NavLink to={"https://www.instagram.com/teknofest.pakistan/"} target="_blank"><img src="/instagram.png" alt="" className="w-10 h-10 p-3 bg-white/40 rounded-full hover:bg-[#388636]" /> </NavLink>
                    
                    <NavLink to={"https://www.youtube.com/@TeknoFestPakistan"} target="_blank"> <img src="youtube.png" alt="" className="w-10 h-10 p-3 bg-white/40 rounded-full hover:bg-[#388636]" /> </NavLink>

                    <NavLink to={"https://www.linkedin.com/company/teknofestpakistan/"} target="_blank"> <img src="linkedin.png" alt="" className="w-10 h-10 p-3 bg-white/40 rounded-full hover:bg-[#388636]" /> </NavLink>
                </div>

                <p className="h-[1px] bg-white/20  w-[50%] mt-10"></p>

                <div className="flex flex-wrap justify-center items-center gap-8 mt-10 text-white text-xl font-semibold px-10 md:px-0">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "text-[#388636]" : ""}>Home</NavLink>

                    <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-[#388636]" : ""}>About Us</NavLink>

                    <NavLink to={"/competitions"} className={({ isActive }) => isActive ? "text-[#388636]" : ""}>Competitions</NavLink>

                    <NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-[#388636]" : ""}>Contact Us</NavLink>
                </div>

                <h1 className="text-white mt-10 text-xl font-semibold px-6 md:px-0 text-center">Copyright ©2023 TeknoFest All Rights Reserved Copyright</h1>

                <h1 className="text-white mt-10 text-xl font-semibold mb-10">Powerd By: <span className="text-[#388636]"> workup solutions</span></h1>

            </div>

        </>
    )

}

export default Footer;