import React, { useEffect, useState } from 'react';
import { Input, Button } from '../../components'; 
import { WindowReloader } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SeeAllscores = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const type = location?.state?.type;

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token") || "null");
        const response = await axios.get(`https://uil-tp.com.ng/admin/student-scores?page=${currentPage}?pageSize=${100}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
         
        });

        const data = response.data;
        setStudents(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch students.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchScores();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <WindowReloader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{type === "tp" ? "ALL TEACHING PRACTICE SCORES" : "ALL OBSERVATION SCORES"}</h1>
      <marquee>
        <p style={{ color: "red" }}>If you see zero(0), it means the supervisor has not yet updated their students' scores.</p>
      </marquee>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Matric No</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Supervisor One</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Supervisor Two</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score 1</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score 2</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.matric_no}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.matric_no}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.student_firstname}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.student_lastname}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor1_firstname}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor2_firstname}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor1_score}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor2_score}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.average_score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};
