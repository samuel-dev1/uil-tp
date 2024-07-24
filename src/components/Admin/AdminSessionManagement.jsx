import axios from 'axios';
import Select from 'react-select'
import { Button } from "../../components"


const locationOptions = [
  { value: '2023/2024 label', label: '2023/2024' },
  { value: '2024/2025', label: '2024/2025' },
  { value: '2024/2025', label: '2024/2025' }
]


export const AdminSessionManagement = () => {
  const token = JSON.parse(localStorage.getItem("token"))

    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#D9D9D9",
        }),
      };

      function modalAsk(question) {
        let answer = prompt(question + " (Yes/No)");
    
        // Normalize the answer to lowercase to handle different cases
        answer = answer.toLowerCase();
    
        // Validate the answer
        if (answer === "yes") {
          handleOpenClose()
            return;
        } else if (answer === "no") {
            return;
        } else {
            return;
        }
    }

    const handleSessionStartModal = ()=> {
        modalAsk("Are you sure you want to start the session");
    }
    const handleSessionCloseModal = ()=> {
        modalAsk("Are you sure you want to close the session");
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const session = '2024/2025';
    
      try {
        const response = await fetch("https://uil-tp.com.ng/admin/start-session", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
          },
          body: JSON.stringify({ session })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok.');
          
        }
    
        const responseData = await response.json();
        console.log(responseData.message);
    
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    

// close a sections 
const handleSubmit2 = async (e) => {
  e.preventDefault();
  const session = '2024/2025';

  try {
    const response = await fetch("https://uil-tp.com.ng/admin/close-session", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify({ session })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
      
    }

    const responseData = await response.json();
    console.log(responseData.message);

  } catch (error) {
    console.error('Error occurred:', error);
  }
};


// start registration
const handleSubmit3 = async (e) => {
  e.preventDefault();
  const session = '2024/2025';

  try {
    const response = await fetch("https://uil-tp.com.ng/admin/start-registration", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify({ session })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
      
    }

    const responseData = await response.json();
    console.log(responseData.message);

  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const handleSubmit4 = async (e) => {
  e.preventDefault();
  const session = '2024/2025';

  try {
    const response = await fetch("https://uil-tp.com.ng/admin/close-registration", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify({ session })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
      
    }

    const responseData = await response.json();
    console.log(responseData.message);

  } catch (error) {
    console.error('Error occurred:', error);
  }
};


const handleSubmit5= async (e) => {
  e.preventDefault();
  const session = '2024/2025';

  try {
    const response = await fetch("https://uil-tp.com.ng/admin/start-registration", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify({ session })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
      
    }

    const responseData = await response.json();
    console.log(responseData.message);

  } catch (error) {
    console.error('Error occurred:', error);
  }
};



  return (
    <div className="w-full py-10 px-12 h-auto">
    <div>
      
         <h1 className="text-xl font-bold mb-8 text-background2">Session Management</h1>
         <h1 className="text-xl text-black font-semibold mt-5">Click on the button below to start or close a session</h1>
         <h1 className="text-xl text-black font-semibold mt-3">Start a Session</h1>
         <div className='flex items-center mt-4'>
            <p className='mr-4'>To start a session, select a session to start</p>
          <Select options={locationOptions} styles={customStyles} className='bg-background1' />
          </div>
          <div className="flex justify-between flex-col lg:flex-row mt-1 lg:mt-2">
     <Button handleSubmit={handleSubmit} label="Start Session" />
   </div>
    </div>
    <div className='mt-8'>
    <h1 className="text-xl text-black font-semibold">Close a Session</h1>
    <div className='flex items-center mt-1'>
            <p className='mr-4'>To close a session, select a session to close</p>
          <Select options={locationOptions} styles={customStyles} className='bg-background1' />
          </div>
          <div className="flex justify-between flex-col lg:flex-row mt-1 lg:mt-0">
     <Button handleSubmit={handleSubmit2} label="Close Session" />
   </div>
   <p>please start for student to be able to do registration</p>
   <Button handleSubmit={handleSubmit4} label="Close student registration" />
   <Button handleSubmit={handleSubmit5} label="start student registration" />
    </div>
    </div>
  )
}

