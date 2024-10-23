import teknofest_logo from '../../public/teknofest-logo.png';
import cart_icon from '../../public/cart-iconnnn-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const [isMobileMenuOpen , setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen (!isMobileMenuOpen);
    return (
        <>
            <div className='flex items-center justify-center bg-green-700 font-mono text-white p-1'>50% DISCOUNT FOR NEXT 24 HOURS!! HURRY UP!</div>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-12 lg:px-8  text-green-700 text z-10 ">
               
                <div className='flex items-center'>
                    <img src={teknofest_logo} alt="teknofest_logo" className="max-w-[31%] h-auto px-6" />
                </div>
                <div className='md:hidden' onClick={toggleMobileMenu}>
                    <IoMenu className='text-white test-3xl cursor-pointer' />   
                </div>
                <ul className={`text-green-700 flex-col md:flex-row flex gap-2 md:text-2xl md:gap-7 items-center 
          md:flex md:space-x-8 absolute md:relative top-0 left-0 w-full md:w-auto 
          bg-white md:bg-transparent transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? 'top-14 left-0' : 'top-[-100%] left-0'} md:block`}>
                    
                    <li>
                        <NavLink to={"/"} target="_blank" className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} target="_blank" className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} target="_blank" className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/competitions"} target="_blank" className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">COMPETITIONS</NavLink>
                    </li>
                </ul>

                <div className='hidden lg:flex items-center space-x-1 bg-white border-2 border-green-700 rounded-md full p-1 ml-9 w-15'>

                    <div className='flex items-center'>
                        <NavLink to={"/cart"} className='text-2xl text-black relative' >
                            <img src={cart_icon} alt='cart-icon' className=' bg-white h-20 w-20 gap-5 p-4 ' />
                            <div className='absolute right-60 top-20 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-pink-50 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full'>0</div>
                        </NavLink>
                    </div>
                    <NavLink to={'/rs'}><span className='text-black text-lg font-bold'>Rs: 0.00</span></NavLink>

                </div>

            </nav>
        </>
    );
};

export default Navbar;


