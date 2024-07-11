import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Buttons"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin=()=>{
    const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox label={"Username"} placeholder={"harkirat@gmail.com"} />
        <InputBox label={"Password"} placeholder={"123456"} />
        <div className="pt-4 flex justify-center">
        <Button label={"Sign in"} onClick={()=>{navigate("/dashboard")}} />
        </div>
        <div>
            <BottomWarning label={"Don't have an ccount yet?"} buttonText={"Sign up"} to={"/signup"}/>
        </div>
        </div>
        </div>

    </div>
}