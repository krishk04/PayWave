import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning.jsx"
import { Button } from "../components/Buttons.jsx"
import { Heading } from "../components/Heading.jsx"
import { InputBox } from "../components/InputBox.jsx"
import { SubHeading } from "../components/SubHeading.jsx"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signup=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
        <Heading label={"Sign up"}/>
        <SubHeading label={"Enter your details to open an account"} />
        <InputBox onChange={(e)=>{setFirstName(e.target.value)}} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e)=>{setLastName(e.target.value)}} placeholder="John" label={"Last Name"} />
        <InputBox onChange={(e)=>{setUsername(e.target.value)}} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>{setPassword(e.target.value)}} placeholder="123466" label={"Password"} />
        <div className="pt-4 flex justify-center">
        
            <Button onClick={async () => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                  username,
                  firstName,
                  lastName,
                  password
                });
                localStorage.setItem("token",response.data.token);
               console.log(response.data.token);
               navigate("/dashboard")
              }} label={"Sign up"} />
        
        </div>
        <div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
        </div>
        

</div>
    </div>
}