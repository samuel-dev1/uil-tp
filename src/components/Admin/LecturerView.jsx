import { useEffect } from 'react';
import { Button } from "../../components";

export const LecturerView = ({ data })=> {

    useEffect(()=> {
      console.log('data',data);
    },[]);

    return(
        <>
             <div style={{ padding: '20px', textAlign: 'center' }} className="w-full">
        <div className="flex flex-col justify-center items-center mb-16">
            {/* <h1 className="text-colour1 text-3xl font-bold">{data?.data?.id.toUpperCase()}</h1> */}
          </div>
     <div className="w-full">
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Full Name</p>
              <input value={data?.data?.[0]?.fullname} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Email</p>
              <input value={data?.data?.email} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Account Name</p>
              <input value={data?.data?.[0]?.account_name} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Account Number</p>
              <input value={data?.data?.[0]?.account_number} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Bank Name</p>
              <input value={data?.data?.[0]?.bankname} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Department</p>
              <input value={data?.data?.[0]?.department} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
      <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Phone Number</p>
              <input value={data?.data?.[0]?.phone_number} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Staff Number</p>
              <input value={data?.data?.[0]?.staff_number} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>
      <div className="flex w-full">
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Subject</p>
              <input value={data?.data?.[0]?.subject} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Department</p>
              <input value={data?.data?.[0]?.department} className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
      </div>

     </div>
      <Button label={"Delete"} />
      <Button label={"Edit"} />
    </div>
        </>
    )
}