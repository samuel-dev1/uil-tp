import { AppCard } from "../Core";
import { fetchSupervisors } from "../../services/loginLogic/fetchsupervisor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SupervisorLogin = () => {
  const navigate = useNavigate();
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [onSubmit, setOnSubmit] = useState(false); // Added state to manage submission
  const [error, setError] = useState(""); // Added state to manage errors

  const data = {
    staff_id: staffId,
    password: password
  };

  const handleLogin = () => {
    if (staffId === "" || password === "") {
      setError("Both fields are required");
      return;
    }
    
    setOnSubmit(true);
    setError(""); // Clear any previous errors
    
    fetchSupervisors(data, navigate, (err) => {
      setOnSubmit(false);
      if (err) {
        setError(err.message || 'Login failed'); // Handle login failure
      }
    });
  };

  const handleChangeStaffId = (event) => {
    setStaffId(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <AppCard>
      <div className="h-16 my-4">
        <img src="https://i.imgur.com/BuFYzum.png" alt="unilorin-logo" className="w-full h-full" />
      </div>
      <h3 className="text-xl text-black font-semibold">Faculty Of Education</h3>
      <h3 className="text-2xl my-3 text-black font-bold">Sign In As Supervisor</h3>
      
      {error && <p className="text-red-500 mb-3">{error}</p>}
      
      <input
        value={staffId}
        onChange={handleChangeStaffId}
        className="bg-background1 my-3 md:w-3/5 w-4/5 p-3 rounded-3xl italic"
        placeholder="Staff ID"
        type="text"
      />
      <input
        value={password}
        onChange={handleChangePassword}
        className="my-3 md:w-3/5 w-4/5 p-3 rounded-3xl italic bg-background1"
        placeholder="Password"
        type="password"
      />
      <div className="text-left flex items-center pl-3 w-3/5">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-sm ml-2 font-bold text-black">Remember me</span>
      </div>
      <button 
        onClick={handleLogin} 
        style={{ backgroundColor: '#29176D' }} 
        className="text-white mt-8 py-2 px-8 rounded-2xl"
        disabled={onSubmit} // Disable button during submission
      >
        {onSubmit ? 'Signing In...' : 'Sign In'}
      </button>
    </AppCard>
  );
};
