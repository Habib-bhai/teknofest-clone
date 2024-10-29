import React from 'react';
import img from '../../public/bg.jpg';
export default function ContactPage() {
  return (
    <>
      <div className="relative ">
        <img src={img} alt="cover" className="w-full h-[20rem]" />
        <h1 className="text-4xl font-['Poppins'] text-white font-bold absolute top-[50%] left-[45%] ">CONTACT US</h1>
      </div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">


          <div className="bg-green-700 text-white rounded-3xl p-9 ">
            <h2 className="text-2xl font-bold mb-4">EVENT VENUE:</h2>
            <p className="mb-9">Expo Center Karachi, Hall 3 & 4</p>

            <h2 className="text-2xl font-bold mb-4">RECEPTION INFO:</h2>
            <p className="mb-9">Booking: +92 333 2115542</p>

            <h2 className="text-2xl font-bold mb-4">TICKET INFO:</h2>
            <p>Phone: +92 333 2115542</p>
            <br />
            <p>Email: contact@teknofestpakistan.com</p>
          </div>


          <div className=" p-8">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">SEND US A MESSAGE</h2>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/2 p-3 border rounded-full focus:outline-none bg-slate-100"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-3 border rounded-full focus:outline-none bg-slate-100"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full p-3 border rounded-full focus:outline-none bg-slate-100"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-full focus:outline-none bg-slate-100"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border rounded-md h-32 resize-none bg-slate-100 focus:outline-none leading-snug"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="bg-green-700 text-white font-bold py-2 px-3 rounded-md hover:bg-green-700 transition-transform duration-300 hover:scale-105">
                  SEND MESSAGE →
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
