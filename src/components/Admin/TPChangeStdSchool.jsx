import { useState, useEffect } from "react";
import { Input, Button } from "../../components";
import { WindowReloader } from '../WindowReloader'
import Select from "react-select";
import { fetchSchoolList } from "../../services/admin/schoollogic/schoollogic";

async function UpdateSchool(data) {
  const token = JSON.parse(localStorage.getItem("token"));
  const url = "https://uil-tp.com.ng/admin/choose-school-three";
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update school details");
    }

    const responseData = await response.json();
    console.log("Response:", responseData);

    return responseData; // You might want to return this data or handle it as needed
  } catch (error) {
    console.error("Error updating school details:", error);
    throw error;
  }
}

export const TPChangeStdSchool = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [loader, setLoader] = useState(false);
  const [matricNumber, setMatricNumber] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await fetchSchoolList();
        if (data) {
          setSchools(data);
        }
      } catch (error) {
        console.error("Error fetching schools:", error);
        // Handle error state if needed
      }
    };

    fetchSchools();
  }, []);

  const handleMatric = (event) => {
    setMatricNumber(event.target.value);
  };
  const handleSchoolChange = (selected) => {
    setSelectedSchool(selected);
  };

  const handleSubject = (event)=> {
    setSelectedSubject(event.target.value);
  }

  const handleSubmit = async () => {
    setLoader(true);
    const data = {
      school_id: selectedSchool?.value,
      matric_number: matricNumber,
      subject: selectedSubject
    };
    console.log(data);

    try {
      const response = await UpdateSchool(data);
      alert("school updated successfully")
      setLoader(false);
      // Handle success response if needed
    } catch (error) {
      // Handle error from UpdateSchool function
      alert("Error updating school");
      console.error("Error updating school:", error);
      setLoader(false);
    }
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D9D9D9",
      cursor: "pointer",
    }),
  };

  if (loader) {
    return (
      <>
        <WindowReloader />
      </>
    );
  }
  return (
    <div className="w-full py-10 px-12 h-auto">
      <div>
        <h1 className="text-xl font-bold mb-6 text-background2">
          Change Student School
        </h1>
        <Input
          label="Matric No"
          value={matricNumber}
          handleInputChange={handleMatric}
        />
        <p className="mb-2">Change School to</p>
        <Select
         onChange={handleSchoolChange}
          options={schools.map((school) => ({
            value: school.id,
            label: school.name,
          }))}
          
          className="mb-4"
          styles={customStyles}
        />
        <Input
          value={selectedSubject}
          handleInputChange={handleSubject}
          label="Preferred Subject"
        />
      </div>
      <div className="flex justify-end mt-5">
        <Button label="Change Details" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
