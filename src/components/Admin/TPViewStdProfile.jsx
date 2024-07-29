import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { BackButton } from '../BackButton'
import { WindowReloader } from '../WindowReloader'

async function getAstudent(search, setLoader) {
  const token = JSON.parse(localStorage.getItem("token"));
  setLoader(true);
  try {
    const response = await fetch("https://uil-tp.com.ng/admin/searc-for-std", {
      method: "POST", // Specify POST method here
      body: JSON.stringify({
        serach: search,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Wait for JSON parsing
    alert(data.message);
    setLoader(false);
    return data; // Return the parsed data
  } catch (error) {
    alert("error searching for student");
    setLoader(false);
    return { error: error.message }; // Return an object with error message
  }
}

export const TPViewStdProfile = ({ setTpOptions }) => {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const handleHoldsearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    console.log("search input", search);
    const searchHandle = getAstudent(search, setLoader);
    console.log(searchHandle);
  };

  const handleBack = ()=> {
    setTpOptions('neutral');
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

  if (loader) {
    return (
      <>
        <WindowReloader />
      </>
    );
  }
  return (
    <>
      <div className="mt-16 w-full mx-32">
      <div className="w-full mt-12 flex justify-end">
        <BackButton handleBack={handleBack} />
        </div>
        <h1 className="text-xl font-bold mb-8 text-background2">
          Select Student School
        </h1>
        <div className="relative w-full">
          <Input
            value={search}
            handleInputChange={handleHoldsearch}
          />
          <Button handleSubmit={handleSearch} label={"search"} />
        </div>
      </div>
    </>
  );
};
