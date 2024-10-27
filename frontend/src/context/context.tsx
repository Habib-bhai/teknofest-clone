import { createContext, ReactNode, useContext, useState } from "react";
import { competitionsData , Data} from "../competitionData";

type Value = {
  competitionsData: Data[],
  dataToSend: Data | null
  setDataToSend:  React.Dispatch<React.SetStateAction<Data>>,
  objsToSend: Data[] | null,
  setObjsToSend: React.Dispatch<React.SetStateAction<Data[]>>,
  cartCount: number,
  setCartCount: React.Dispatch<React.SetStateAction<number>>
}


let context = createContext<Value | undefined>(undefined)


export default function useData(){
   const contextValue  =useContext(context)
   if(!contextValue) throw new Error("Context is undefined");
   return contextValue
}

export  const ContextProvider: React.FC<{children: ReactNode}> =({children})=> {

  const [dataToSend, setDataToSend] = useState(competitionsData[1])
  const [objsToSend, setObjsToSend] = useState<Data[]>(competitionsData)

  const [cartCount, setCartCount] = useState(0)
  return (
    <context.Provider value={{competitionsData, dataToSend, setDataToSend, objsToSend, setObjsToSend, cartCount, setCartCount  }}>
           {children} 
    </context.Provider>
  )
}
