import { Button } from "./Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./User";
export function Users(){
    const [users,setUsers]=useState([]);
    const [filter,setFilter]=useState("");
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then(function(response){
              setUsers(response.data.user)
        })
    },[filter])
    return <>
        
 
    
    <div className="flex flex-col p-4">
        <div className="flex mt-6 text-lg font-bold pb-2">
            Users
        </div>
        <input onChange={(e)=>{setFilter(e.target.value)}} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500" placeholder="Search Mockups, Logos..." required />
        {users.map(user=><User user={user} />)}
     
    </div>


    
    </>
}