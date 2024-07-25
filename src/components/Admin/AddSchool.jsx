import axios from "axios";
import { useState } from "react";
import { Input, Button } from "../../components";
import { WindowReloader } from "../../components";

const token = JSON.parse(localStorage.getItem("token"));

async function AddNewSchool(schooldetails) {
  try {
    const response = await axios.post(
      "https://uil-tp.com.ng/admin/admin-add-school",
      schooldetails,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to add school. Please try again later.");
    }
  }
}

export const AddSchool = () => {
  const [schName, setSchName] = useState("");
  const [address, setAddress] = useState("");
  const [Allocation, setAllocation] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    setLoader(true);
    const schooldetails = {
      name_of_school: schName,
      address: address,
      allocation: Allocation,
    };
    try {
      const response = await AddNewSchool(schooldetails);
      alert(response.message);
      setLoader(false);

    } catch (error) {
      console.error("Error adding school:", error.message);
      alert(error.message); 
      setLoader(false);
    }
  };

  const handleSchNameChange = (event) => {
    setSchName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAllocationChange = (event) => {
    setAllocation(event.target.value);
  };

  if (loader) {
    return (
      <>
        <WindowReloader />
      </>
    );
  }
  return (
    <>
      <div className="w-full py-10 px-12 h-auto">
        <div>
          <h1 className="text-xl font-bold mb-16 text-background2">
            Add New School
          </h1>
          <Input
            value={schName}
            handleInputChange={handleSchNameChange}
            label="Name of School"
          />
          <Input
            value={address}
            handleInputChange={handleAddressChange}
            label="Address"
          />
          <Input
            value={Allocation}
            handleInputChange={handleAllocationChange}
            label="No of Allocation"
          />
          <Button handleSubmit={handleSubmit} label="Add School" />
        </div>
      </div>
    </>
  );
};
