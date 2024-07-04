import React, { useState, useEffect } from "react";
import { Input, Button } from "../../components";
import Select from "react-select";
import { fetchSchoolList } from "../../services/admin/schoollogic/schoollogic";

async function UpdateSchool(data) {
  const token = JSON.parse(localStorage.getItem("token"));
  const url = "https://uil-tp.com.ng/admin/choose-school-two";
  
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

export const TPSelectStdSchool = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
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

  const handleSchoolChange = (selectedOption) => {
    setSelectedSchool(selectedOption);
  };

  const handleSubjectChange = (selectedOption) => {
    setSelectedSubject(selectedOption.value);
  };

  const handleSubmit = async () => {
    const data = {
      school_id: selectedSchool.value,
      matric_number: matricNumber,
      subject: selectedSubject
    };

    try {
      const response = await UpdateSchool(data);
      // Handle success response if needed
    } catch (error) {
      // Handle error from UpdateSchool function
      console.error("Error updating school:", error);
    }
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D9D9D9",
      cursor: "pointer",
    }),
  };

  return (
    <div className="w-full py-10 px-12 h-auto">
      <div>
        <h1 className="text-xl font-bold mb-6 text-background2">
          Change Student School
        </h1>
        <Input
          label="Matric No"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
        />
        <p className="mb-2">Change School to</p>
        <Select
          options={schools.map((school) => ({
            value: school.id,
            label: school.name,
          }))}
          value={selectedSchool}
          onChange={handleSchoolChange}
          className="mb-4"
          styles={customStyles}
        />
        <p className="mb-2">Teaching Subject</p>
        <Select
          options={[
            { value: "Mathematics", label: "Mathematics" },
            { value: "Chemistry", label: "Chemistry" },
            { value: "Physics", label: "Physics" },
          ]}
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="mb-4"
          styles={customStyles}
        />
      </div>
      <div className="flex justify-end mt-5">
        <Button label="Change Details" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
