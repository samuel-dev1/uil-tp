import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Button } from "../../components/Button";
import { LecturerView } from '../../components'

export const ViewPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();
  const matric_no = location?.state?.matric_no;
  const type = location?.state?.type;

  useEffect(() => {
    const HandCheck = async () => {
      if (!matric_no || !type) {
        setError('Invalid matric number or type.');
        setLoading(false);
        return;
      }

      let url = '';

      switch (type) {
        case 'tp':
          url = `https://uil-tp.com.ng/admin/admin-view-all?matric_no=${matric_no}`;
          break;
        case 'ob':
          url = `https://uil-tp.com.ng/admin/view-observation-students?matric_no=${matric_no}`;
          break;
        case 'staff':
          url = `https://uil-tp.com.ng/admin/getlecture?staff_number=${matric_no}`;
          break;
        default:
          setError('Type not supported');
          setLoading(false);
          return;
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    HandCheck();
  }, [matric_no, type, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if(type === "staff"){
    return(
      <>
       <LecturerView data={data} />
      </>
    )
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }} className="w-full">
        <div className="flex flex-col justify-center items-center mb-16">
            <h1 className="text-colour1 text-3xl font-bold">{data?.data?.matric_no.toUpperCase()}</h1>
          </div>
     <div className="w-full">
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">First Name</p>
              <input value={data?.data?.firstname} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Last Name</p>
              <input value={data?.data?.lastname} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">School Name</p>
              <input value={data?.data?.school_name} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Supervisor 1</p>
              <input value={data?.data?.supervisor1_name} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Supervisor 2</p>
              <input value={data?.data?.supervisor2_name} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Score</p>
              <input value={data?.data?.score} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Phone Number</p>
              <input value={data?.data?.phone_number} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Email</p>
              <input value={data?.data?.email} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Subject</p>
              <input value={data?.data?.subject} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Department</p>
              <input value={data?.data?.department} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>

     </div>
      <Button handleSubmit={()=>alert("Student profile not yet activated, students should update his profile at his dashboard to activate his profile.")} label={"Edit"} />
    </div>
  );
};
