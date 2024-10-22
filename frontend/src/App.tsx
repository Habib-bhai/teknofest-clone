import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Competitions from "./pages/Competitions"
import CompetitionDetails from "./pages/CompetitionDetails"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
    <Route path="/*" element={<Home/>} />
    <Route path="/about*" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/competitions" element={<Competitions/>} />
    <Route path="/competitions:competitionDetails" element={<CompetitionDetails/>} />
     </Routes>

     <Footer/> 
    </>
  )
}

export default App;
