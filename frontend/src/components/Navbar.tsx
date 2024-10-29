import teknofest_logo from '../../public/teknofest-logo.png';
import cart_icon from '../../public/cart-iconnnn-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    return (
        <>
            <div className='flex items-center justify-center bg-green-700 font-mono text-white p-2'>50% DISCOUNT FOR NEXT 24 HOURS!! HURRY UP!</div>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-12 lg:px-8  text-green-700 z-10 ">

                <div className='flex items-center'>
                    <img src={teknofest_logo} alt="teknofest_logo" className="max-w-[31%] h-auto px-6" />
                </div>

                <div className='md:hidden' onClick={toggleMobileMenu}>

                    {isMobileMenuOpen ? (
                        <IoClose className='text-green-700 test-3xl cursor-pointer' />
                    ) : (
                        <IoMenu className='text-green-700 test-3xl cursor-pointer' />
                    )}
                </div>
                <ul className={`flex flex-col md:flex-row gap-6 md:gap-8 absolute md:relative top-0 left-0 
                    w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out 
                    ${isMobileMenuOpen ? 'top-[100px] left-0' : 'top-[-500%]'} md:top-0 md:flex`}>

                    <li>
                        <NavLink to={"/"}  className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}  className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="hover:text-cyan-200 transition-colors duration-300 text-2xl font-bold">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/competitions"} className="hover:text-cyan-200 transition-colors duration-800 text-2xl font-bold">COMPETITIONS</NavLink>
                    </li>
                </ul>

                <div className='hidden lg:flex items-center space-x-3 bg-white border-2 border-green-700 rounded-md p-2 ml-9 w-auto h-auto shadow-lg transition-all duration-500 hover:rounded-full hover:bg-slate-500'>

                    <div className='flex items-center'>
                        <NavLink to={"/cart"} className='text-xl text-black relative flex items-center' >
                            <img src={cart_icon} alt='cart-icon' className=' bg-white h-10 w-10 object-contain ' />
                            
                            <div className="absolute top-2 right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-2 -translate-y-2">0</div>
                        </NavLink>
                    </div>
                    <NavLink to={'/rs'}><span className='text-black text-sm font-bold'>Rs: 0.00</span></NavLink>

                </div>

            </nav>
        </>
    );
};

export default Navbar;