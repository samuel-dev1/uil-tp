import { useState } from "react";
import { Button, Input, BackButton } from "../../components";
import { WindowReloader } from "../WindowReloader";

async function assignOberstiongroup(groupsize, setLoader) {
  const token = JSON.parse(localStorage.getItem("token"));
  const url = "https://uil-tp.com.ng/smart/assign-observation-groups";
  setLoader(true);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        groupSize: groupsize,
      }),
    });
    if (!response.ok) {
      console.log(response.json());
    }
    const data = await response.json();
    if (data.message) {
      alert(data.message);
    }
    setLoader(false);
    return data;
  } catch (error) {
    alert("An error occurred");
    setLoader(false);
  }
}
export const PTAssignStd = ({ setPTSelect }) => {
  const [number, changenumber] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleBack = ()=> {
    setPTSelect("neutral");
  }

  const handleChange = (event) => {
    changenumber(event.target.value);
  };

  const handleSubmit = () => {
    const assign = assignOberstiongroup(number, setLoader);
    console.log(assign);
  };

  
  if (loader) {
    return (
      <>
        <WindowReloader />
      </>
    );
  }
  return (
    <div className="h-full w-full px-10 py-5">
      <div className="w-full mt-12 flex justify-end">
        <BackButton handleBack={handleBack} />
        </div>
      <h1 className="text-xl text-background2 font-semibold">
        Assign Students to Lecturers
      </h1>
      <h1 className="text-xl text-black font-semibold mt-10">
        Click on the button below to assign students to lecturers randomly
      </h1>
      <h1 className="text-xl text-black font-semibold mb-8">
        for peer teaching assignment
      </h1>
      <Input
        value={number}
        label="Input the number to be grouped"
        handleInputChange={handleChange}
      />
      <div className="mt-10">
        <Button handleSubmit={handleSubmit} label="Assign" />
      </div>
    </div>
  );
};
