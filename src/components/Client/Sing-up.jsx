/* eslint-disable react/prop-types */
import { useState } from "react"
import SingUpComercial from "./Sing-ups/Sing-up-comercial"
import SingUpPersonal from "./Sing-ups/Sing-up-personal"

export default function SingUp({clickChangePanel}){
    const [typeAccount,setTypeAccount] =useState(true);
    
    const clickTypeAccount =()=>{
        setTypeAccount(!typeAccount)
    }
   

    return(
        <>
            {
               typeAccount? < SingUpPersonal clickChangePanel={clickChangePanel} clickTypeAccount={clickTypeAccount} typeAccount /> 
               : < SingUpComercial clickChangePanel={clickChangePanel} clickTypeAccount={clickTypeAccount} typeAccount />
            }
        </>
    )
}