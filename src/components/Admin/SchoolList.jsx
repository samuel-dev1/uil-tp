import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useEffect, useState } from 'react';
import { fetchSchoolList } from '../../services/admin/schoollogic/schoollogic';

export const SchoolList = ({ setAddSchool }) => {
  const [schools, setSchools] = useState([]);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const handlesCHli = async () => {
    const data = await fetchSchoolList();
    console.log(data);
    if (data) {
      setSchools(data); // Adjust according to your actual data structure
    }
  };

  useEffect(() => {
    handlesCHli();
  }, []);

  const formatResult = (item) => {
    return (
      <div className="flex cursor-pointer">
        <span className="mx-2">{item.name}</span>
        <span className="mx-2">{item.school}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col my-4 justify-center items-center">
      <div className="flex items-center my-12 w-11/12 justify-start">
        <h1 className="text-xl font-bold text-background2">Schools</h1>
        <button onClick={() => setAddSchool(true)} className="mx-2 py-3 px-5 rounded-xl bg-background1">
          Add new
        </button>
      </div>
        <label className="sr-only">Search</label>
        <div className="relative w-full mb-6">
          <ReactSearchAutocomplete
            items={schools}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Search for school"
            styling={{
              backgroundColor: "#29176D",
              color: "white",
            }}
          />
        </div>
      <div style={{width: "58rem"}} className="h-full overflow-scroll mb-12">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="grid grid-cols-6 w-full" style={{ backgroundColor: "rgba(41, 23, 109, 0.1)" }}>
              {['S/N', 'School', 'Address', 'Allocation/Space',"No of student", 'Actions'].map((head) => (
                <th key={head} className="p-4 tracking-widest w-full">
                  <div className="font-medium tracking-widest whitespace-nowrap text-sm flex text-background2 font-semibold">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#f5f6fa" }}>
            {schools.length > 0 ? (
              schools.map(({ id, name, address, capacity, tp_count }) => (
                <tr key={id} className="grid grid-cols-6 border-b border-blue-gray-50">
                  <td className="p-4">{id}</td>
                  <td className="p-4">{name}</td>
                  <td className="p-4">{address}</td>
                  <td className="p-4">{capacity}</td>
                  <td className="p-4">{tp_count}</td>
                  <td className="p-4 flex space-x-2">
                    <button className="py-1 px-2 text-sm bg-background1 text-black rounded" onClick={() => handleUpdate(id)}>Update</button>
                    <button className="py-1 px-2 text-sm bg-red-700 text-white rounded" onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr style={{ backgroundColor: '#f5f6fa' }} className="flex flex-col flex-1 justify-center py-32 text-center">
                <td colSpan="6" className="flex justify-center mb-8">
                  <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
                </td>
                <td colSpan="6" className="capitalize text-black font-normal text-sm">
                  School list is empty. Add a School.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Example handleUpdate and handleDelete functions
const handleUpdate = (id) => {
  console.log(`Update school with id ${id}`);
  // Implement your update logic here
};

const handleDelete = (id) => {
  console.log(`Delete school with id ${id}`);
  // Implement your delete logic here
};
