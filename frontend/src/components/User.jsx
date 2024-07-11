import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "./Buttons"

export function User({user}){
    const Navigate=useNavigate();
    return <>
    <div className="flex justify-between pt-2">
            <div className="flex ">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                    
                </div>
                
            </div>
            <div className="flex flex-col justify-center pt-2 ">
            <Button label={"Send Money"} onClick={()=>{Navigate(`/send?id=`+user._id+'&name='+user.firstName)}} />
            </div>
            
            </div>
    </>
}