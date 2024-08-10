import { useEffect, useState } from 'react';
import { Button } from "../../components";

export const LecturerView = ({ data }) => {
  const [staffNumber, setStaffNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullname, setFullname] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("token") || "null");

  useEffect(() => {
    if (data?.data?.[0]) {
      setStaffNumber(data.data[0].staff_number || '');
      setAccountNumber(data.data[0].account_number || '');
      setAccountName(data.data[0].account_name || '');
      setPhoneNumber(data.data[0].phone_number || '');
      setFullname(data.data[0].fullname || '');
    }
  }, [data]);

  const handleUpdate = async () => {
    const url = `https://uil-tp.com.ng/admin/update-supervisor-details`;

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          staff_number: staffNumber,
          account_number: accountNumber,
          account_name: accountName,
          phone_number: phoneNumber,
          fullname: fullname
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      console.log(result);  // Handle successful update
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const url = `https://uil-tp.com.ng/admin/delete-supervisor?staff_number=${data?.data?.[0]?.staff_number}`;
    
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
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
      console.log(result);  // Handle successful deletion
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const LetMap = (data) => {
    return data?.map((item) => item.name).join(', ') || '';
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }} className="w-full">
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-colour1 text-3xl font-bold">{fullname}</h1>
          <p>{LetMap(data?.data)}</p>
        </div>
        <div className="w-full">
          <div className="flex w-full">
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Full Name</p>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Email</p>
              <input
                value={data?.data?.email || ''}
                readOnly
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Account Name</p>
              <input
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Account Number</p>
              <input
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Bank Name</p>
              <input
                value={data?.data?.[0]?.bankname || ''}
                readOnly
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Department</p>
              <input
                value={data?.data?.[0]?.department || ''}
                readOnly
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Phone Number</p>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="my-2 mx-2 w-full">
              <p className="mb-2 text-left">Staff Number</p>
              <input
                value={staffNumber}
                onChange={(e) => setStaffNumber(e.target.value)}
                className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button onClick={handleUpdate} label={loading ? "Updating..." : "Update"} />
          <Button onClick={handleDelete} label={loading ? "Deleting..." : "Delete"} />
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </>
  );
};
