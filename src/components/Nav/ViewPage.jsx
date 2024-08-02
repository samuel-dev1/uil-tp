import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Button } from "../Button";

export const ViewPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();
  const matric_no = location?.state?.matric_no;
  const type =location?.state?.type

  console.log(type)


  const HandCheck = async () => {
    let url = '';

    switch (type) {
      case 'tp':
        url = `https://uil-tp.com.ng/admin/admin-view-all?matric_no=${matric_no}`;
      case 'ob':
        url = `https://uil-tp.com.ng/admin/view-observation-students?matric_no=${matric_no}`;
      case 'staff':
        url = `https://uil-tp.com.ng/admin/getlecture?staff_number=${matric_no}`;
        break;
      default:
        console.warn('Type not supported');
        return;
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log(response.json())
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (matric_no) {
      HandCheck();
    }
  }, [matric_no]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2em', color: '#333' }}>
        Hello, here I am!
        {matric_no && <span> Matric Number: {matric_no}</span>}
      </h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <Button label={"delete"} />
      <Button label={"edit"} />
    </div>
  );
};
