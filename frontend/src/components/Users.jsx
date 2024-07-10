import { Button } from "./Buttons";

export function Users(){
    return <>
        
 
    
    <div className="flex flex-col p-4">
        <div className="flex mt-6 text-lg font-bold pb-2">
            Users
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500" placeholder="Search Mockups, Logos..." required />
        <div className="flex justify-between pt-2">
        <div className="flex ">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {"H"}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {"Harkirat"} {"Singh"}
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-col justify-center pt-2 ">
        <Button label={"Send Money"} />
        </div>
        
        </div>

     
    </div>


    
    </>
}