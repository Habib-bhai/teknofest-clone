import { Link } from "react-router-dom"
import Card from "../components/Card"
import useData from "../context/context"

function Competitions() {

   const { setDataToSend, competitionsData, setObjsToSend } = useData()

   const robotics =  competitionsData.filter(items => items.category === "robotics-and-electronics")


   const engineering =  competitionsData.filter(items => items.category === "engineering-competitions")

   const programming_and_development =  competitionsData.filter(items => items.category === "programming-and-development")

   const dataScience =  competitionsData.filter(items => items.category === "data-science-and-ai")

   const cyberSecurity =  competitionsData.filter(items => items.category === "cyber-security")

   const business =  competitionsData.filter(items => items.category === "business-and-finance")



   return (
      <div className="w-screen">
         {/* Heading with bg-image */}
         <div className="w-screen h-[50vh] bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
            <div className="w-screen h-[50vh] bg-zinc-800/75 flex justify-center items-center">
               <h1 className="text-white text-4xl font-bold">COMPETITIONS</h1>
            </div>
         </div>

         {/* ALL Categories */}
         <div>
            <h1 className="text-center text-4xl font-semibold text-gray-800 mt-12 mb-5">ALL CATEGORIES</h1>

            <div className="w-screen flex gap-2 justify-center items-center flex-wrap">

               <Link to={"/category"} onClick={()=> setObjsToSend(robotics) }><div className="w-40 h-36 bg-[url('/categories/robotics.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" >ROBOTICS and Electronics</h1>
                  </div>
               </div></Link>

            
               <Link to={"/category"} onClick={()=> setObjsToSend(engineering)}> <div className="w-40 h-36 bg-[url('/categories/engineering.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" >ENGINEERING COMPETITIONS</h1>
                  </div>

               </div></Link>


               <Link to={"/category"} onClick={()=> setObjsToSend(programming_and_development)}> <div className="w-40 h-36 bg-[url('/categories/developmentAndProgramming.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" >DEVELOPMENT & PROGRAMMING</h1>
                  </div>

               </div> </Link>



               <Link to={"/category"} onClick={()=> setObjsToSend(dataScience)}> <div className="w-40 h-36 bg-[url('/categories/dataScienceAndAi.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" >DATA SCIENCE & ARTIFICIAL INTELLIGENCE</h1>
                  </div>

               </div> </Link> 



               <Link to={"/category"} onClick={()=> setObjsToSend(cyberSecurity)}> <div className="w-40 h-36 bg-[url('/categories/cyberSecurity.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" >CYBER SECURITY</h1>
                  </div>

               </div></Link>


               <Link to={"/category"} onClick={()=> setObjsToSend(business)}><div className="w-40 h-36 bg-[url('/categories/businessAndFinance.png')] bg-no-repeat bg-cover">

                  <div className="bg-white/60 m-5 transition-colors duration-500 ease-in-out hover:bg-white ">
                     <h1 className="text-center text-sm text-[#3a4cb4] font-bold  mt-12 mb-5" > BUSINESS & FINANCE</h1>
                  </div>

               </div> </Link>


            </div>
         </div>

         {/* Robotics and Electronics */}
         <div className="w-screen text-center ">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">ROBOTICS & ELECTRONICS</h1>
            <p className="px-10">“Do you dream of building the future of robotics and automation? In the Robotics and Electronics category, you’ll construct and program robots to compete in high-stakes challenges. Whether it’s robot battles or autonomous tasks, your creation is what counts. Can you make the robot that takes it all?”</p>
            <div className="w-screen grid grid-cols-2 gap-4 md:gap-0 md:flex  justify-center items-center flex-wrap">

               <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[1])}><Card src="/categories/robotics/robotics1.png" title="CIRCUIT DESIGN BATTLE" price={2000} /></Link>

              <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[2])}> <Card src="/categories/robotics/robotics2.png" title="PCB MASTERY" price={2000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[3])}>   <Card src="/categories/robotics/robotics3.png" title="ROBOT SOCCER CHALLENGE" price={4000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[4])}> <Card src="/categories/robotics/robotics4.png" title="SKY WARRIORS" price={8000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[5])}> <Card src="/categories/robotics/robotics5.png" title="ROBO RACE " price={2000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[6])}> <Card src="/categories/robotics/robotics6.png" title="LINE FOLLOWING ROBOT - LFR (LEVEL1) " price={2000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[7])}> <Card src="/categories/robotics/robotics6.png" title="LINE FOLLOWING ROBOT - LFR (LEVEL2) " price={3000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[8])}>  <Card src="/categories/robotics/robotics7.png" title="ROBO SUMO " price={5000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[9])}>  <Card src="/categories/robotics/robotics9.png" title="LIGHT WEIGHT ROBO WAR " price={5000} /></Link>

            <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[10])}> <Card src="/categories/robotics/robotics8.png" title="HEAVY WEIGHT ROBO WAR " price={8000} /></Link> 

            </div>


            {/* CYBER SECURITY */}
            <div className="w-screen text-center ">
               <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">CYBER - SECURITY</h1>
               <p className="px-10">“Think you have what it takes to outsmart hackers and protect critical systems? In the Cyber-Security category, you’ll dive into real-world simulations where you’ll either break into or defend against attacks. Show us your skills in vulnerability hunting, ethical hacking, and network defense. Are you ready to step up and prove you’re the ultimate cyber expert?”</p>

               <div className="w-screen flex gap-10 justify-center items-center flex-wrap">
                 <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[0])}><Card src="/categories/cyberSecurity/cyberSecurity1.png" price={2500} title="VULN HUNT" /></Link> 

               </div>
            </div>

         </div>


         {/* Development and Programming */}
         <div className="w-screen text-center ">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">DEVELOPMENT & PROGRAMMING</h1>
            <p className="px-10">“Ready to build the next big thing? In Web and App Development, you’ll bring your coding, design, and innovation skills to the table. Whether you’re a full-stack wizard or a mobile app genius, this is where you create, deploy, and impress. Can you take on the challenge and build something extraordinary under pressure?”</p>

            <div className="w-screen grid grid-cols-2 gap-4 md:gap-0 md:flex  justify-center items-center flex-wrap">
             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[12])}>  <Card src="/categories/programming/programming1.png" price={1000} title="CODE EXPRESS" /></Link>

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[13])}> <Card src="/categories/robotics.png" price={1000} title="CODE TO CONQUER" /></Link> 

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[11])}>  <Card src="/categories/programming/programming2.png" price={4000} title="FULL STACK FRENZY" /></Link>

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[14])}>  <Card src="/categories/programming/programming3.png" price={4000} title="APPATHON" /></Link>

            </div>
         </div>


         {/* DATA SCIENCE AND AI */}
         <div className="w-screen text-center ">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">DATA SCIENCE AND ARTIFICIAL INTELLIGENCE</h1>
            <p className="px-10">“Got a knack for uncovering hidden insights in data or building intelligent machines? In Data Science & AI, you’ll transform complex datasets into actionable insights and design cutting-edge AI models. This is where math meets innovation. Are you ready to turn data into something powerful?”</p>

            <div className="w-screen grid grid-cols-2 gap-4 md:gap-0 md:flex justify-center items-center flex-wrap">
              <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[15])}> <Card src="/categories/dataScienceAndAi/dataScienceAndAi1.png" price={2000} title="DATA WRANGLING WARRIORS" /></Link>

              <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[22])}> <Card src="/categories/dataScienceAndAi/dataScienceAndAi2.png" price={2000} title="ML & NLP MASTERY CHALLENGE" /></Link>

              <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[16])}> <Card src="/categories/dataScienceAndAi/dataScienceAndAi3.png" price={2000} title="COMPUTER VISIONARY CHALLENGE" /></Link>
            </div>
         </div>

         {/* BUSINESS AND FINANCE */}
         <div className="w-screen text-center ">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">BUSINESS AND FINANCE</h1>
            <p className="px-10">“Think you can crack the code to business success or dominate the financial markets? In the Business & Finance category, you’ll develop strategies, analyze markets, and create innovative solutions that could shape the future of finance. Do you have what it takes to become a leader in the business world?”</p>

            <div className="w-screen flex gap-10 justify-center items-center flex-wrap">
               <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[17])}><Card src="/categories/businessAndFinance/Idea_pitching.png" price={2000} title="PITCH YOUR IDEA" /></Link>

            </div>
         </div>

         {/* ENGINEERING COMPETITIONS*/}
         <div className="w-screen text-center ">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-5">ENGINEERING COMPETITIONS</h1>
            <p className="px-10">“Got the brains and creativity to solve real-world engineering problems? In this category, you’ll design, build, and test your way through a series of hands-on challenges. From bridge construction to circuit design, you’ll need both theory and ingenuity to come out on top. Can you engineer the winning solution?”</p>

            <div className="w-screen  grid grid-cols-2 gap-4 md:gap-0 md:flex justify-center items-center flex-wrap">
             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[18])}><Card src="/categories/engineering/engineering1.png" price={2000} title="BRIDGEQUEST" /></Link>

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[19])}> <Card src="/categories/engineering/engineering2.png" price={1000} title="CAD CRAZE" /></Link> 

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[20])}>  <Card src="/categories/engineering/engineering3.png" price={3000} title="WATER ROCKET WAR" /></Link>

             <Link to={"/competition-details"} onClick={() => setDataToSend(competitionsData[21])}>  <Card src="/categories/engineering/engineering4.png" price={3000} title="SKY SOARERS" /></Link>

            </div>
         </div>

        

      </div>
   )
}

export default Competitions