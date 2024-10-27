import Form from "../components/Form"
import useData from "../context/context"
import Card from "../components/Card"
import { Link } from "react-router-dom"


function CompetitionDetails() {

  const { dataToSend, competitionsData, setDataToSend } = useData()

  const related = competitionsData.filter(items => items.category === dataToSend?.category)

  return (
    <div className="w-screen mt-20 ">

      <div  className="w-screen flex gap-10 justify-center items-center flex-wrap md:flex-nowrap text-left  ">

        {/* main image */}
        <div id="main-details" className="img h-[60%] overflow-hidden  object-cover ">
          <img src={`/public${dataToSend?.competitionImg}`} alt="shoes" width={500} height={500} className=" w-[500px] h-[300px] md:h-[400px] object-contain transition transform duration-500 ease-out hover:scale-125  " />
        </div>

        <div className="w-96 md:mt-12 flex flex-col justify-center items-center ">
          {/* heading, price and description */}
          <h1 className="text-4xl font-bold mb-8  w-full text-left text-[#3a4cb4] ">{dataToSend?.competitionName}</h1>
          <h2 className="text-2xl mb-5 font-bold w-full text-left tracking-wide text-gray-800">RS. {dataToSend?.participationFee}.00</h2>
          <p className=" text-gray-600 mb-12">{dataToSend?.competitionDescription}</p>
          <h2 className="text-2xl font-bold tracking-wide text-[#3a4cb4]">DOWNLOAD / VIEW RULES BELOW</h2>
          <a href="#" className="text-green-600 mt-5 underline w-full text-left transition-colors duration-300 ease-in-out hover:text-[#3a4cb4]">{dataToSend?.competitionName}-RULE-BOOK</a>
        </div>

      </div>


      <div className="mt-20 px-56 w-screen flex justify-center items-center flex-wrap">
        <Form />
      </div>

      <div className=" w-full flex justify-center items-center mt-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3a4cb4] ">OTHER RELATED COMPETITIONS</h1>
      </div>
      
      <div className="mt-16 grid grid-cols-2 gap-2 md:gap-0 md:flex flex-wrap justify-center items-center ">
        {related?.map(items=> 
      <Link to={"/competition-details"} 
      onClick={()=> setDataToSend(competitionsData[items.objID])}>
        <Card price={items.participationFee} title={`${items.competitionName}`} src={`${items.competitionImg}`} />
        </Link>)}
        </div>



    </div>
  )
}

export default CompetitionDetails