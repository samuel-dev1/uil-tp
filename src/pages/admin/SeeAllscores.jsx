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
      let url = "";

      if (type === "tp") {
        url = "https://uil-tp.com.ng/admin/score-sup";
      } else {
        url = `https://uil-tp.com.ng/admin/student-scores?page=${currentPage}&pageSize=100`;
      }

      try {
        const token = JSON.parse(localStorage.getItem("token") || "null");
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        if (type === "ob") {
          setStudents(data); 
        } else {
          setStudents(data.data); 
          setTotalPages(data.totalPages); 
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch students.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchScores();
  }, [currentPage, type]); // Added `type` as a dependency

console.log(students)

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
    <>
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
              {type === "ob" ? (
                <>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Supervisor One</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Supervisor Two</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score 1</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score 2</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
                </>
              ) : (
                <>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Supervisors</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Obtained scores</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>School</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.matric_no}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.student_firstname}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.student_lastname}</td>
                {type === "ob" ? (
                  <>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor1_firstname}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor2_firstname}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor1_score}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor2_score}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.average_score}</td>
                  </>
                ) : (
                  <>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.supervisor_names}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.total_score}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.average_score}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.school_name}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '20px' }}>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span> Page {currentPage} </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
