import React, { useEffect, useState } from 'react';

export const PTDashboard = () => {
  const [lecturers, setLecturers] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));

  const GetAllOb = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/ob/get-student-mates?student_id=${user?.id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setStudents(result.data?.student_mates || []);
      setLecturers([]); // Clear lecturers when students are fetched
    } catch (e) {
      setError('Failed to fetch data');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllOb();
  }, []);

  const GetAllsup = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/ob/get-supervisors?group_id=${students[0]?.id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setLecturers(result.data?.supervisors || []);
    } catch (e) {
      setError('Failed to fetch data');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (students.length > 0) {
      GetAllsup();
    }
  }, [students]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="h-full p-10 overflow-hidden">
      <h1 className="lg:text-4xl text-center lg:text-left text-3xl text-background2 font-semibold">Welcome Back</h1>

      <div className="mt-8 lg:w-4/5 w-full">
        <div className="flex flex-col justify-center items-center mb-16">
          <img src="https://i.imgur.com/3YzCjWm.png" alt="avatar" className="mb-4" />
          <h1 className="text-colour1 text-3xl font-bold">{user?.firstname?.toUpperCase() + " " + user?.lastname}</h1>
        </div>
        <marquee>
          <h6 style={{ color: "red" }}>
            If you did not update your profile you will be automatically removed from peers in four (4) days.
          </h6>
        </marquee>
        <h1 className="text-2xl font-bold mb-12">
          Connect with your peer teaching partners and your assigned lecturers
        </h1>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-background2">Peers</h1>
      <div className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="grid grid-cols-4 w-full" style={{ backgroundColor: "rgba(41, 23, 109, 0.1)" }}>
              {['S/N', 'Name', 'Department', 'Phone No'].map(head => (
                <th key={head} className="p-4 tracking-widest w-full">
                  <div className="font-medium tracking-widest whitespace-nowrap text-sm flex text-background2 font-semibold">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#f5f6fa" }}>
            {students.length > 0 ? (
              students.map((student, index) => {
                const { id, firstname, lastname, department, phone_number } = student;
                return (
                  <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{`${firstname} ${lastname}`}</td>
                    <td className="p-4">{department || 'N/A'}</td>
                    <td className="p-4">{phone_number || 'N/A'}</td>
                  </tr>
                );
              })
            ) : (
              <tr style={{ backgroundColor: '#f5f6fa' }} className="flex flex-col flex-1 justify-center py-32 text-center">
                <td colSpan="4" className="flex justify-center mb-8">
                  <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
                </td>
                <td colSpan="4" className="capitalize text-black font-normal text-sm">
                  Peers list is empty. Please check back.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-background2">Supervisors</h1>
      <div className="h-full w-full overflow-scroll">
        {lecturers.length > 0 ? (
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="grid grid-cols-4 w-full" style={{ backgroundColor: "rgba(41, 23, 109, 0.1)" }}>
                {['S/N', 'Name', 'Department', 'Phone No'].map(head => (
                  <th key={head} className="p-4 tracking-widest w-full">
                    <div className="font-medium tracking-widest whitespace-nowrap text-sm flex text-background2 font-semibold">
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#f5f6fa" }}>
              {lecturers.map((lecturer, index) => {
                const { id, supervisor_name, supervisor_department, supervisor_phone } = lecturer;
                return (
                  <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{supervisor_name || 'N/A'}</td>
                    <td className="p-4">{supervisor_department || 'N/A'}</td>
                    <td className="p-4">{supervisor_phone || 'N/A'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center py-32 text-center">
            <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
            <p className="capitalize text-black font-normal text-sm mt-4">Supervisors list is empty. Please check back.</p>
          </div>
        )}
      </div>
    </div>
  );
};
