import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Competitions from "./pages/Competitions"
import CompetitionDetails from "./pages/CompetitionDetails"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Category from "./pages/Category"

function App() {
  return (
    <div className="overflow-x-hidden ">
    <Navbar/>
     <Routes>
    <Route path="/*" element={<Home/>} />
    <Route path="/about*" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/competitions" element={<Competitions/>} />
    <Route path="/category" element={<Category/>} />
    <Route path="/competition-details" element={<CompetitionDetails/>} />
     </Routes>

     <Footer/> 
    </div>
  )
}

export default App
