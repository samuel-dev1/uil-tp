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
  const type = location?.state?.type;

  useEffect(() => {
    const HandCheck = async () => {
      if (!matric_no || !type) {
        setError('Invalid matric number or type.');
        setLoading(false);
        return;
      }

      let url = '';

      switch (type) {
        case 'tp':
          url = `https://uil-tp.com.ng/admin/admin-view-all?matric_no=${matric_no}`;
          break;
        case 'ob':
          url = `https://uil-tp.com.ng/admin/view-observation-students?matric_no=${matric_no}`;
          break;
        case 'staff':
          url = `https://uil-tp.com.ng/admin/getlecture?staff_number=${matric_no}`;
          break;
        default:
          setError('Type not supported');
          setLoading(false);
          return;
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    HandCheck();
  }, [matric_no, type, token]);

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
