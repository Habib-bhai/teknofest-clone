
import teknofest_logo from '../../public/teknofest-logo.png';
import cart_icon from '../../public/cart-iconnnn-removebg-preview.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-center bg-green-700 font-mono text-white p-1'>50% DISCOUNT FOR NEXT 24 HOURS!! HURRY UP!</div>


            <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-12 lg:px-8  text-green-700 text z-10 ">

                <div>
                    <img src={teknofest_logo} alt="teknofest_logo" className="max-w-[31%] h-auto px-6" />
                </div>
                <ul className="flex space-x-8">
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

                <div className='flex items-center space-x-1 bg-white border-2 border-green-700 rounded-md full p-1 ml-9 w-15'>

                    <div className='flex items-center'>
                        <NavLink to={"/cart"} className='text-2xl text-black' >
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


