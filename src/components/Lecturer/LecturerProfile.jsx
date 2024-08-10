import { useEffect, useState } from 'react';
import { Input } from '../../components';

export const LecturerProfile = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [department, setDepartment] = useState("");
  const [data, setData] = useState(null);

  const UpdateBank = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/lecture/update-banks?staff_id=${user?.staff_number}`, {
        method: "POST",
        body: JSON.stringify({
          account_number: accountNumber,
          account_name: accountName,
          email: email,
          bankname: bankName,
          phone: phone,
          department: department
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
      alert(result?.message)
      } else {
        alert(result?.message)
      }
    } catch (error) {
      console.error('Error updating bank details:', error);
    }
  };

  const GetDetails = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/lecture/get-lecture?staff_id=${user?.staff_number}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch details.');
      }

      const result = await response.json();
      setData(result.data[0]);

    } catch (error) {
      console.error('Error occurred while fetching details:', error);
    }
  };

  useEffect(() => {
    GetDetails();
  }, []);

  const handleAccountNumber = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleAccountName = (event) => {
    setAccountName(event.target.value);
  };

  const handleBankName = (event) => {
    setBankName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div className="h-full w-full p-10">
      <h1 className="text-4xl text-background2 font-semibold">My Profile</h1>
      <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mt-8">
        <div className="w-full">
          <Input bol={true} placehold={user?.fullname} label="Name" />
          <Input bol={true} placehold={user?.staff_number} label="Staff ID" />
          <Input
            value={phone}
            bol={false}
            handleInputChange={handlePhoneNumber}
            placehold={data?.phone_number}
            label="Phone Number"
          />
          <Input
            value={department}
            bol={false}
            handleInputChange={handleDepartment}
            placehold={data?.department}
            label="Department"
          />
        </div>
        <div className="lg:mx-8 mx-0 w-full">
          <Input
            bol={false}
            value={email}
            placehold={data?.email}
            handleInputChange={handleEmail}
            label="Email"
          />
          <Input
            bol={false}
            value={accountNumber}
            placehold={data?.account_number}
            handleInputChange={handleAccountNumber}
            label="Account Number"
          />
          <Input
            bol={false}
            value={accountName}
            handleInputChange={handleAccountName}
            placehold={data?.account_name}
            label="Account Name"
          />
          <Input
            value={bankName}
            bol={false}
            placehold={data?.bankname}
            handleInputChange={handleBankName}
            label="Bank Name"
          />
        </div>
      </div>
      <button
        onClick={UpdateBank}
        className="text-white mt-8 py-3 px-10 rounded-xl bg-background2"
      >
        Edit
      </button>
    </div>
  );
};
