import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { WindowReloader } from "../WindowReloader";

async function getAstudent(search, setLoader) {
  const token = JSON.parse(localStorage.getItem("token"));
  setLoader(true);
  try {
    const response = await fetch("https://uil-tp.com.ng/admin/searc-for-std", {
      body: JSON.stringify({
        serach: search,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    alert(data.message);
    setLoader(false);
    return data;
  } catch (error) {
    setLoader(false);
    return error;
  }
}

export const PTViewStdProfile = () => {
  const [search, setSearch] = useState(null);
  const [loader, setLoader] = useState(false);

  function handleHoldsearch(event) {
    setSearch(event.target.value);
  }

  const handleSearch = () => {
      const searchHandle = getAstudent(search, setLoader);
      console.log(searchHandle);
  };


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
        <h1 className="text-xl font-bold mb-8 text-background2">
          View Student Profile
        </h1>
        <div className="relative w-full">
          <Input value={search} handleInputChange={handleHoldsearch} />
          <Button handleSubmit={handleSearch} label={"search"} />
        </div>
      </div>
    </>
  );
};
