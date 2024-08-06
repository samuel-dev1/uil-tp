import { useEffect, useState } from 'react'
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"


export const TPPostingLetter = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const Getdetails = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/stud/print-details-all?matric_no=${user?.matric_no}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch student details.');
      }

      const data = await response.json();
      const student = data.data;
      console.log('student',student);
      setData(student);
      
    } catch (error) {
      console.error('Error occurred while fetching student details:', error);
    }
  };

  useEffect(() => {
    Getdetails();
  }, []);

  return (
    <>
      <div className="h-full w-full p-20">
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">Click the button below to download the</h1>
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">posting letter</h1>

{data?.address !== null
&&
<>
<div className="mt-20">
  <Button
  handleSubmit={()=>navigate("/letter", { state: {data: data}})}
  label="Download" />
</div>
</>
}
  </div>
    </>
  )
}
