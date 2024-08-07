import { AppCard } from "../Core";
import { fetchAdmin } from "../../services/loginLogic/adminlogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormSpinner } from "../FormSpinner";

export const AdminLogin= ()=> {
const [staff_id, setStaff_id] = useState("");
const [password, setPassword] = useState("");
const [onSubmit, setOnSubmit] = useState(false);
const navigate = useNavigate();

const data ={
  staff_id:staff_id,
  password:password
}
  const handleLogin = ()=> {
    if(staff_id === "" || password === ""){
      return;
    }
    setOnSubmit(true);
    fetchAdmin(data, navigate, (()=> {
      setOnSubmit(false);
    }));
  }
  const handleChange =(event)=>{
    setStaff_id(event.target.value)
  }
  const handleChange2 =(event)=>{
    setPassword(event.target.value)
  }
  return (
    <AppCard>
      <div className="h-16 my-4">
        <img src="https://i.imgur.com/BuFYzum.png" alt="unilorin-logo" className="w-full h-full" />
      </div>
      <h3 className="text-xl text-black font-semibold">ADMIN WELCOME</h3>
      <h3 className="text-2xl my-3 text-black font-bold">Sign In</h3>
      <input
      value={staff_id}
      onChange={handleChange}
        className="bg-background1 my-3 md:w-3/5 w-4/5 p-3 rounded-3xl italic"
        placeholder="User Id"
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
      <button
      onClick={handleLogin} style={{ backgroundColor: '#29176D' }} className="text-white mt-8 py-2 px-8 rounded-2xl">
       {onSubmit? <FormSpinner />: "Sign In"}
      </button>
    </AppCard>
  );
}

