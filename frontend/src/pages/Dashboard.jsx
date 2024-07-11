import { useEffect,useState } from "react";
import {Appbar} from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import {Users} from "../components/Users.jsx"
import axios from "axios"
export const Dashboard=()=>{
    const [value,setValue]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(function(response){
            setValue(response.data.balance);
        })

    },[value])
    return (
        <div>
            <Appbar />
            <div className="m-8">
            <Balance value={value} />
            <Users></Users>
            </div>
            
        </div>
    )
}