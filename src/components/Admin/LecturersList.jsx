import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Input, Button } from "../../components"
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Select from 'react-select';

export const LecturersList = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [selectedLecturer, setSelectedLecturer] = useState(null);

  const token = JSON.parse(localStorage.getItem("token"));

  const handleSearch = async (searchString) => {
    try {
      const response = await axios.post("https://uil-tp.com.ng/admin/searc-for-supervisor", { serach: searchString }, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      });
      const formattedSupervisors = response.data.data.map(supervisor => ({
        value: supervisor.id,
        label: supervisor.fullname
      }));
      setResult(formattedSupervisors);
      console.log(response.data);
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]); // Fetch data on search term change

  const handleOnSearch = (searchString) => {
    setSearch(searchString); // Update search state
    // handleSearch(searchString); // Initiate search (if needed to search on input change)
  };

  const handleOnHover = (result) => {
    console.log(result); // Log hovered result
  };

  const handleOnSelect = (item) => {
    console.log(item); // Log selected item
    setSelectedLecturer(item); // Update selected lecturer
  };

  const handleOnFocus = () => {
    console.log('Focused'); // Log focus event
  };

  const formatResult = (item) => {
    return (
      <div className='flex cursor-pointer'>
        <span className='mx-2'>{item.id}</span>
        <span className='mx-2'>{item.fullname}</span>
      </div>
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D9D9D9",
    }),
  };


  return (
    <div className="mt-16 w-full mx-32">
      <h1 className="text-xl font-bold mb-8 text-background2">List of Lecturers</h1>
      <form className="flex items-center w-full">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <ReactSearchAutocomplete
            items={result}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Search for lecturer'
            styling={{
              backgroundColor: "#29176D",
              color: "white"
            }}
          />
          {/* <Select
            value={selectedLecturer}
            options={selectOptions}
            onChange={handleOnSelect}
            className='mb-4'
            styles={customStyles}
            placeholder='Select a lecturer'
          /> */}
        </div>
      </form>
      {/* {selectOptions.length === 0 ? "No options available" : 
      <div>
        <Button  label={"reomve"} />
        <Button label={"edit"} />
      </div>
      } */}
    </div>
  );
};
