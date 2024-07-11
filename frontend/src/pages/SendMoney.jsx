import { useEffect,useState} from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Buttons"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const SendMoney=()=>{
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
  const id=searchParams.get("id");
  const name=searchParams.get("name");
 
  const [amount,setAmount]=useState(0);
    return<>
     <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Send Money"} />
        <div className="flex pt-6 pb-4">
        <div className="rounded-full h-12 w-12 bg-green-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center">
            {name[0]}
            </div>
            
            
        </div>
        <div className="flex flex-col justify-center font-bold">{name}</div>
        </div>
        
        <InputBox label={"Amount (in Rs)"} placeholder={"123"} onChange={(e)=>{setAmount(e.target.value)}} />
        
        <div className="pt-4 flex justify-center">
        <Button label={"Initiate Transfer"} onClick={async()=>{
            const response=await axios.post("http://localhost:3000/api/v1/account/transfer",{
                amount:amount,
                to:id
            },{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            })
            console.log(response);
           navigate("/success?balance="+response.data.remaining);
            
        }} />
        </div>
        
        </div>
        </div>

    </div>
    </>
}