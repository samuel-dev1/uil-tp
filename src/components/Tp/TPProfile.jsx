   import React, { useState } from 'react';
   import { Input, Button } from '../../components'; // Adjust the import path as per your actual file structure
   
   export const TPProfile = () => {
     const user = JSON.parse(localStorage.getItem("user"));
     const token = JSON.parse(localStorage.getItem("token"))
   
     const [phone, setPhone] = useState(user?.phone_number || "");
     const [fname, setFname] = useState(user?.firstname || "");
     const [lname, setLname] = useState(user?.lastname || "");
     const [femail, setEmail] = useState(user?.email || "");
     const [fmiddle, setFmiddle] = useState(user?.middle_name || "");
     const [gender, setGender] = useState(user?.gender || "");
   
     const dataform = {
       matric_no: user?.matric_no,
       email: femail,
       phone_number: phone,
       gender: gender,
       lastname: lname,
       firstname: fname,
       middlename: fmiddle,
     };

     const changePhone = (event) => setPhone(event.target.value);
     const changeFname = (event) => setFname(event.target.value);
     const changeGender = (event) => setGender(event.target.value);
     const changeEmail = (event) => setEmail(event.target.value);
     const changeMiddle = (event) => setFmiddle(event.target.value);
     const changLast = (event) => setLname(event.target.value);
   
     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const response = await fetch(`https://uil-tp.com.ng/stud/students-edit`, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
             "Authorization":`Bearer ${token}`
           },
           body: JSON.stringify(dataform),
         });
   
         if (!response.ok) {
          console.log(response.json())
           throw new Error('Failed to update profile.');

         }
   
         console.log('Profile updated successfully:', response);
   
       } catch (error) {
         console.error('Error occurred while updating profile:', error);
       }
     };
   
     return (
       <>
         <div className="h-full w-full p-10">
           <h1 className="text-4xl text-background2 font-semibold">My Profile</h1>
   
           <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mt-8">
             <div className="w-full">
               <Input value={fname} handleInputChange={changeFname} label="First Name" placehold={user?.firstname} />
               <Input error={"You can't update this"} label="Matric Number/id" placehold={user?.matric_no} bol={true} />
               <Input value={phone} handleInputChange={changePhone} placehold={user?.phone_number} label="Phone Number" />
               <Input value={fmiddle} handleInputChange={changeMiddle} label="Middle Name" placehold={user?.middle_name} />
             </div>
             <div className="lg:mx-8 mx-0 w-full">
               <Input value={femail} handleInputChange={changeEmail} placehold={user?.email} label="Email" />
               <Input error={"You can't update this"} bol={true} placehold={user?.department} label="Department" />
               <Input value={lname} handleInputChange={changLast} label="Last Name" placehold={user?.lastname} />
               <Input value={gender} handleInputChange={changeGender} label="Gender" placehold={user?.gender} />
             </div>
           </div>
   
           <Button
             handleSubmit={handleSubmit}
             className="text-white mt-8 py-3 px-10 rounded-xl bg-background2"
             label="Submit"
           />
         </div>
       </>
     );
   };
   