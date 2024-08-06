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
    const response = await fetch(`https://uil-tp.com.ng/admin/search-for-supervisor?search=${search}`, {
      method: "POST", // Specify POST method here
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response)
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Wait for JSON parsing
    setLoader(false);
    return data.data; // Ensure to return the correct data
  } catch (error) {
    alert("Error searching for lecturer");
    setLoader(false);
    console.error(error); // Return an object with error message
    return [];
  }
}



export const LecturersList =  ({ setTpOptions }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  const handleHoldsearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    console.log("search input", search);
    const searchData = await getAstudent(search, setLoader);
    setData(searchData);
  };

  const handleBack = () => {
    setTpOptions('neutral');
  };

  if (loader) {
    return <WindowReloader />;
  }

  const Navigateto = (matric_no, type) => {
    navigate(`view`,{ state: { matric_no: matric_no, type:type}});
  };

console.log(data)


  return (
    <>
      <div className="mt-16 w-full mx-32">
        <div className="w-full mt-12 flex justify-end">
          <BackButton handleBack={handleBack} />
        </div>
        <h1 className="text-xl font-bold mb-8 text-background2">
          Search to view a supervisor profile
        </h1>
        <div className="relative w-full">
          <Input
            value={search}
            handleInputChange={handleHoldsearch}
          />
          <Button handleSubmit={handleSearch} label={"Search"} />
        </div>
        <div>
          <h1>Lecturer Data</h1>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Staff No</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Full Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>View</th>
              </tr>
            </thead>
            <tbody>
              {data.map(lecturer => (
                <tr key={lecturer.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lecturer.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lecturer.staff_number}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lecturer.fullname}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lecturer.phone}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Button 
                  label={"view"}
handleSubmit={()=>Navigateto(lecturer?.staff_number, "staff")}
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
