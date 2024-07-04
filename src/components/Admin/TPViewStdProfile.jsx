import { useState } from 'react';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { Button } from '../Button';
import { Input } from '../Input';


async function getAstudent(search){
  const token = JSON.parse(localStorage.getItem('token'));
  try{
    const response = await fetch("https://uil-tp.com.ng/admin/searc-for-std",{
      body:JSON.stringify({
        serach:search
      }),
      headers:{
        "Content-type":'application/json',
        "Authorization":`Bearer ${token}`
      }
    });
    location.reload =false
    const data  = response.json()
    return data
  }
  catch(error){
    return error
  }
}







const studentsList = [
  { id: 1, name: 'Reuben Chukwuka', dept: 'Educational Technology', number: '08036753367' },
  { id: 2, name: 'James Blunt', dept: 'Science Technology', number: '0803675378' },
  { id: 2, name: 'Samson Siasia', dept: 'Art Education', number: '0703675378' },
];

export const TPViewStdProfile = () => {

  const [search, setSearch] =useState(null)



function handleHoldsearch(event){
  setSearch(event.target.value)
}

const handleSearch = ()=>{
  {
  const searchHandle = getAstudent(search)
  console.log(searchHandle)
  }
}


  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results)
  // }

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result)
  // }

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   console.log(item)
  // }

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  const formatResult = (item) => {
    return (
      <>
      <div className='flex cursor-pointer'>
      <span className='mx-2'>{item.number}</span>
        <span className='mx-2'>{item.name}</span>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="mt-16 w-full mx-32">
    <h1 className="text-xl font-bold mb-16 text-background2">Select Student School</h1>
<form className="flex items-center w-full">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
           <Input 
   value={search}
   handleInputChange={handleHoldsearch}
   placehold={"search fro student with matric"}
   label={"search for students"}
   />
   <Button
handleSubmit={handleSearch}
   label={"search"}
   />
    </div>
</form>
    </div>
    </>
  )
}
