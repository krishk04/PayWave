import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Buttons"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"


export const SendMoney=()=>{
    return<>
     <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Send Money"} />
        <div className="flex pt-6 pb-4">
        <div className="rounded-full h-12 w-12 bg-green-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center">
            {"H"}
            </div>
            
            
        </div>
        <div className="flex flex-col justify-center font-bold">Friend's Name</div>
        </div>
        
        <InputBox label={"Amount (in Rs)"} placeholder={"123"} />
        
        <div className="pt-4 flex justify-center">
        <Button label={"Initiate Transfer"} />
        </div>
        
        </div>
        </div>

    </div>
    </>
}