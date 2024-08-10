import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AdmiViewSchool = () => {
  const [school, setSchool] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const id = location?.state?.school_id;
  const token = JSON.parse(localStorage.getItem("token") || "null");

  async function GetAllInfo() {
    try {
      const response = await axios.get(`https://uil-tp.com.ng/admin/school-info?school_id=${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setSchool(response.data);
    } catch (e) {
      setError('Failed to fetch school data.');
      console.error(e);
    }
  }

  useEffect(() => {
    if (id) {
      GetAllInfo();
    }
  }, [id]);


  const LetMap = (data) => {
   return data?.map((item) => item.fullname).join(', ');
};


console.log(school)
  if (error) return <p>{error}</p>;
  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }} className="w-full">
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-colour1 text-3xl font-bold">{school?.[0].school_name}</h1>
          <p>supervisors in schools</p>
          <p>{LetMap(school)}</p>
        </div>
        <div className="flex w-full">
          <div className="my-2 mx-2 w-full">
            <p className="mb-2 text-left">School Name</p>
            <input
              value={school?.[0].school_name || ''}
              readOnly
              className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="my-2 mx-2 w-full">
            <p className="mb-2 text-left">Number of student in school</p>
            <input
            disabled
              value={school?.[0].record_count || ''}
              readOnly
              className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="my-2 mx-2 w-full">
            <p className="mb-2 text-left">School Address</p>
            <input
            disabled
              value={school?.[0].address || ''}
              readOnly
              className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="my-2 mx-2 w-full">
            <p className="mb-2 text-left">school capacity</p>
            <input
            disabled
              value={school?.[0].capacity || ''}
              readOnly
              className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
     
    </>
  );
};
