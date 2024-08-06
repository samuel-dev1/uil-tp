import React, { useRef, useEffect, useState } from "react";
import { Input } from '../../components'

export const UpdateSchoolModal = ({ setModalShow, selectedSchool })=> {
  const [capacity, setCapacity] = useState();
  const [schoolName, setSchoolName] = useState();
    const modalRef = useRef();

     const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalShow(false);
    }
  };

  useEffect(()=> {
    setCapacity(selectedSchool?.capacity);
    setSchoolName(selectedSchool?.name);
  },[])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  
    return(
        <>
           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
        <div
         ref={modalRef}
          style={{ height: "20rem" }}
          className="bg-white flex flex-col items-center justify-center lg:w-2/5 w-11/12 p-8 overflow-y-scroll rounded-xl"
        >
          <p className="mb-8">Fill details to update school</p>
          <div className="w-full">
            <div className="my-2 w-full">
            <p className="mb-2">Capacity</p>
            <input 
            value={capacity}
            onChange={(e)=> setCapacity(e.target.value)}
             className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="my-2 w-full">
            <p className="mb-2">School Name</p>
            <input 
            value={schoolName}
            onChange={(e)=> setSchoolName(e.target.value)}
             className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <button
            onClick={()=> console.log(selectedSchool)}
              style={{ backgroundColor: "#939185" }}
              className="w-full mt-4 p-3 mb-2 rounded-xl text-white"
            >
              Done
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}