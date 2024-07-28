import { useEffect, useState } from 'react'
import { Input } from '../../components'
export const LecturerProfile = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));
  const [phone, setPhonenumber] = useState("")
  const [email, setEmail] = useState("")
  const [account_name, setAccountname] = useState("")
  const [account_number, setAccountNumber] = useState("")
  const [bankname, setBankname] = useState("")
  const [department, setDepartment] = useState("")
  const [data, setData] = useState(null)




  async function UpdateBank() {

    try {
      const response = await fetch(`https://uil-tp.com.ng/lecture/update-banks?staff_id=${user?.staff_number}`,
        {
          method: "POST",
          body: JSON.stringify({
            account_number: account_number,
            account_name: account_name,
            email: email,
            bankname: bankname,
            phone: phone,
            department: department
          },),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      const data = response.json()
      if (response.ok) {
        console.log(data)
      }
      else {
        console.log(data)
      }
    } catch (error) {
      console.error('Error updating bank details:', error);
      console.log(error);
    }
  }

  const Getdetails = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/lecture/get-lecture?staff_id=${300}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch details.');
      }

      const data = await response.json();
      setData(data.data[0]);

    } catch (error) {
      console.error('Error occurred while fetching student details:', error);
    }
  };

  useEffect(() => {
    Getdetails();
  }, []);





  const hadleAccountNumber = (event) => {
    setAccountNumber(event.target.value)
  }
  const handleAccountName = (event) => {
    setAccountname(event.target.value)
  }

  const handleBankname = (event) => {
    setBankname(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const phoneSet = (event) => {
    setPhonenumber(event.target.value)
  }
  const departmetChange = (event) => {
    setDepartment(event.target.value)
  }

  return (
    <>
      <div className="h-full w-full p-10">
        <h1 className="text-4xl text-background2 font-semibold">My Profile</h1>

        <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mt-8">
          <div className="w-full">
            <Input
              bol={true}
              placehold={user?.fullname} label="Name" />
            <Input
              bol={true}
              placehold={user?.staff_number} label="staff id" />
            <Input
              value={phone}
              bol={false}
              handleInputChange={phoneSet}
              placehold={data?.phone_number} label="Phone Number" />

            <Input
              value={department}
              bol={false}
              handleInputChange={departmetChange}
              placehold={data?.department} label="Department" />
          </div>
          <div className="lg:mx-8 mx-0 w-full">
            <Input
              bol={false}
              value={email}
              placehold={data?.email}
              handleInputChange={handleEmail}
              label="Email" />
            <Input
              bol={false}
              value={account_number}
              placehold={data?.account_number}
              handleInputChange={hadleAccountNumber}
              label="Account number" />
            <Input
              bol={false}
              value={account_name}
              handleInputChange={handleAccountName}
              placehold={data?.account_name}
              label="Acount  name" />
            <Input
              value={bankname}
              bol={false}
              placehold={data?.bankname}
              handleInputChange={handleBankname}
              label="Bank name" />
          </div>
        </div>

        <button
          onClick={UpdateBank}
          className="text-white mt-8 py-3 px-10 rounded-xl bg-background2"
        >Edit</button>
      </div>
    </>
  )
}