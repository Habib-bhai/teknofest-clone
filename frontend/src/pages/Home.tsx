import HeroSection from "../components/HeroSection"

function Home() {
  return (
    <div className="w-screen  h-[130vh] bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
      <div className="w-screen  h-[130vh] bg-zinc-800/75">

     <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
    <HeroSection/>
     </div>

      </div>
    </div>
  )
}

export default Home