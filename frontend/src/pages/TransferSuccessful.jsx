import { useEffect,useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Buttons"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { useNavigate, useSearchParams } from "react-router-dom"
import {Checkmark} from "react-checkmark"
import axios from "axios"


export const TransferSuccessful=()=>{
   const [balance,setBalance]=useState(0);
  
 const navigate=useNavigate();
 useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }
    })
    .then(function(response){
        setBalance(response.data.balance);
    })
 },[])
 
  
    return<>
     <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max justify-center">
        <Heading label={"Thank You!"} />
        <div className="flex pt-6 pb-4">
        <Checkmark />
        <div className="flex flex-col justify-center font-bold"></div>
        </div>
        <div>
            Your remaining balance is Rs {balance}
        </div>
        
        
        <div className="pt-2 flex justify-center font-semibold">
        Transfer Successful
        </div>
        <Button label={"Go Back"} onClick={()=>{navigate("/dashboard")}} />
        
        </div>
        </div>

    </div>
    </>
}