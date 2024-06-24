import { AppCard } from "../Core";
import { fetchSupervisors } from "../../services/loginLogic/fetchsupervisor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SupervisorLogin = ()=> {
  const navigate = useNavigate();
const [staff_id, setStaff_id] = useState("")
const [password, usePassword] = useState("")
const data ={
  staff_id:staff_id,
  password:password
}
  const handleLogin = ()=> {
    fetchSupervisors(data, navigate);
  }
  const hadleChange =(event)=>{
setStaff_id(event.target.value)
  }
  const handleChange2 =(event)=>{
    usePassword(event.target.value)
  }
  return (
    <AppCard>
      <div className="h-16 my-4">
        <img src="https://i.imgur.com/BuFYzum.png" alt="unilorin-logo" className="w-full h-full" />
      </div>
      <h3 className="text-xl text-black font-semibold">Faculty Of Education</h3>
      <h3 className="text-2xl my-3 text-black font-bold">Sign In As Supervisor</h3>
      <input
      value={staff_id}
      onChange={hadleChange}
        className="bg-background1 my-3 md:w-3/5 w-4/5 p-3 rounded-3xl italic"
        placeholder="Matric No"
        type="text"
      />
      <input
        value={password}
        onChange={handleChange2}
        className="my-3 md:w-3/5 w-4/5 p-3 rounded-3xl italic bg-background1"
        placeholder="Password"
        type="password"
      />
      <div className="text-left flex items-center pl-3 w-3/5">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-sm ml-2 font-bold text-black">Remember me</span>
      </div>
      <button onClick={handleLogin} style={{ backgroundColor: '#29176D' }} className="text-white mt-8 py-2 px-8 rounded-2xl">
        Sign In
      </button>
    </AppCard>
  );
}

