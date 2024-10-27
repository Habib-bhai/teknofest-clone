import { Link } from "react-router-dom"
import Card from "../components/Card"
import useData from "../context/context"

export default function Category() {

  const {objsToSend, setDataToSend, competitionsData} = useData()


  return (
    <>

    <h1 className=" mt-20 capitalize w-full text-center text-3xl text-[#3A4cB4] font-bold ">{objsToSend![0].category}</h1>

    <div className="mt-16 grid grid-cols-2 gap-2 md:gap-0 md:flex flex-wrap justify-center items-center ">


      {objsToSend?.map(items=> 
      <Link to={"/competition-details"} 
      onClick={()=> setDataToSend(competitionsData[items.objID])}>
        <Card price={items.participationFee} title={`${items.competitionName}`} src={`${items.competitionImg}`} />
        </Link>)}
    </div>
    </>
  )
}
