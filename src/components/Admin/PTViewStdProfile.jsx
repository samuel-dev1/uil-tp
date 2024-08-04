import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { BackButton } from '../BackButton';
import { WindowReloader } from '../WindowReloader';
import { useNavigate } from "react-router-dom";

async function getAstudent(search, setLoader) {
  const token = JSON.parse(localStorage.getItem("token"));

  setLoader(true);
  try {
    const response = await fetch(`https://uil-tp.com.ng/admin/search-for-std?search=${search}`, {
      method: "POST", // Specify POST method here
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Wait for JSON parsing
    setLoader(false);
    return data.data; // Ensure to return the correct data
  } catch (error) {
    alert("Error searching for student");
    setLoader(false);
    console.error(error); // Return an object with error message
    return [];
  }
}

export const PTViewStdProfile = ({ setPTSelect }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  const handleBack = ()=> {
    setPTSelect("neutral");
  }

  const handleHoldsearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    console.log("search input", search);
    const searchData = await getAstudent(search, setLoader);
    setData(searchData);
  };


  if (loader) {
    return <WindowReloader />;
  }

  const Navigateto = (matric_no, type) => {
    navigate(`view`,{ state: { matric_no: matric_no, type:type}});
  };

  return (
    <>
      <div className="mt-16 w-full mx-32">
        <div className="w-full mt-12 flex justify-end">
          <BackButton handleBack={handleBack} />
        </div>
        <h1 className="text-xl font-bold mb-8 text-background2">
          Search to view a student profile
        </h1>
        <div className="relative w-full">
          <Input
            value={search}
            handleInputChange={handleHoldsearch}
          />
          <Button handleSubmit={handleSearch} label={"Search"} />
        </div>
        <div>
          <h1>Student Data</h1>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Matric No</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>View</th>
              </tr>
            </thead>
            <tbody>
              {data.map(student => (
                <tr key={student.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.matric_no}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.firstname}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.lastname}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Button 
                  label={"view"}
handleSubmit={()=>Navigateto(student?.matric_no, student?.type)}
                  /></td>
              

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
