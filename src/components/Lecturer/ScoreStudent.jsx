import { Input } from "../Input";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import axios from "axios"; // Import axios for HTTP requests

export const ScoreStudents = () => {
 const [students, setStudents] = useState([]);
 const [error, setError] = useState(null);
 const [Tpstudent, setTpstudent] = useState([]);
 const [scores, setScores] = useState([]);
 const [scoresOb, setObscore] = useState([])

 const user = JSON.parse(localStorage.getItem("user"));
 const token = JSON.parse(localStorage.getItem("token"));

 const fetchStudentOb = async () => {
 if (!user || !token) {
 setError('User or token is missing.');
 return;
 }
 try { const response = await fetch(`https://uil-tp.com.ng/lecture/students-under-supervisor?supervisor_id=${user?.id}`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",
 "Authorization": `Bearer ${token}`,
 },
 });
 if (!response.ok) {
 throw new Error('Failed to fetch details.');
 }
 const data = await response.json();
 setStudents(data.data);
 } catch (error) {
 console.error('Error occurred while fetching lecture details:', error);
 setError('Failed to load lecture details.');
 }
 };

 const fetchStudentTp = async () => {
 if (!user || !token) {
 setError('User or token is missing.');
 return;
 }
 try {
 const response = await fetch(`https://uil-tp.com.ng/lecture/get-students-by-school?school_id=${user?.id}`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",
 "Authorization": `Bearer ${token}`,
 },
 });
 if (!response.ok) {
 
 throw new Error('Failed to fetch details.');
 }
 const data = await response.json();

 setTpstudent(data.data);
 } catch (error) {
 console.error('Error occurred while fetching lecture details:', error);
 setError('Failed to load lecture details.');
 }
 };
 useEffect(() => {
 fetchStudentTp();
 fetchStudentOb();
 }, []);

 const handleScoreChange = (tp_record_id, value) => {
  setScores(prevScores => {
    // Ensure the score value is an integer
    const numericValue = parseInt(value, 10) || 0;

    const updatedScores = prevScores.map(score =>
      score.tp_record_id === tp_record_id
        ? { ...score, value: numericValue }
        : score
    );

    // If no score existed, add the new score
    if (!updatedScores.some(score => score.tp_record_id === tp_record_id)) {
      updatedScores.push({ tp_record_id, value: numericValue });
    }
    return updatedScores;
  });
};

const handleScoreChangeOb = (ob_record_id, value) => {
  setObscore(prevScores => {
    // Ensure the score value is an integer
    const numericValue = parseInt(value, 10) || 0;

    const updatedScores = prevScores.map(score =>
      score.ob_record_id === ob_record_id
        ? { ...score, value: numericValue }
        : score
    );

    // If no score existed, add the new score
    if (!updatedScores.some(score => score.ob_record_id === ob_record_id)) {
      updatedScores.push({ ob_record_id, value: numericValue });
    }
    return updatedScores;
  });
};

const handleReset = async (id)=>{
  if (!user || !token) {
    setError('User or token is missing.');
    return;
    }
try{
    const response = await fetch(`https://uil-tp.com.ng/lecture/reset?tp_id=${id}`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    },
})
const data = response.json()
if(data){
console.log(data)
}
else{
console.log(data)
}
}
catch(e){
  console.log(e)
}

}

const handleResetOb = async (id)=>{
  if (!user || !token) {
    setError('User or token is missing.');
    return;
    }
try{
    const response = await fetch(`https://uil-tp.com.ng/lecture/resetOb?ob_id=${id}`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    },
})
const data = response.json()
if(data){
console.log(data)
}
else{
console.log(data)
}
}
catch(e){
  console.log(e)
}

}
 const handleSave = async () => {
 if (!user || !token) {
 setError('User or token is missing.');
 return;
 }
 try {
 const response = await axios.post('https://uil-tp.com.ng/lecture/score-students', {
 supervisor_id: user?.id,
 tp_records: scores,
 }, {
 headers: {
 "Content-Type": "application/json",
 "Authorization": `Bearer ${token}`,
 },
 });
 if(response.status ==200){
console.log(response.data)
  setError('Scores submitted successfully.');
 }
else{
}

 } catch (error) {
 setError('Error submitting scores.');
 console.error(error);
 }
 };

 const handleSave2 = async () => {
  if (!user || !token) {
  setError('User or token is missing.');
  return;
  }
  try {
  const response = await axios.post('https://uil-tp.com.ng/lecture/score-ob', {
  supervisor_id: user?.id,
  ob_records:scoresOb,
  }, {
  headers: {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
  },
  });
  if(response.status ==200){
 console.log(response.data)
   setError('Scores submitted successfully.');
  }

  } catch (error) {
  setError('Error submitting scores.');
  console.error(error);
  }
  };
 
 return (
 <div className="h-full w-full p-10">
 <h1 className="text-3xl text-background2 font-semibold mb-20">Score Students</h1>
 <h1 className="text-xl font-bold mb-4 mt-8 text-background2">Teaching Practice</h1>
 <div className="h-full w-full overflow-scroll mb-12">
 <table className="w-full min-w-max table-auto text-left">
 <thead>
 <tr className="grid grid-cols-4 w-full" style={{ backgroundColor: "rgba(41, 23, 109, 0.1)" }}>
 {['First Name', 'Last Name', "Matric Number", 'Scores',"reset"].map(head => (
  <th key={head} className="p-4 tracking-widest w-full">
  <div className="font-medium tracking-widest whitespace-nowrap text-sm flex text-background2 font-semibold">
  {head}
  </div>
  </th>
 ))}
 </tr>
 </thead>
 <tbody style={{ backgroundColor: "#f5f6fa" }}>
 {Tpstudent.length > 0 ? (
 Tpstudent.map(({ id, firstname, lastname, matric_no, value, tp }) => (
  <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
  <td className="p-4">{firstname}</td>
  <td className="p-4">{lastname}</td>
  <td className="p-4">{matric_no}</td>
  <td className="p-4">
  <input
  type="number"
  disabled={value?true:false}
  placeholder={value ? value : "Score"}
  style={{ width: 70, padding: 10 }}
  onChange={(e) => handleScoreChange(tp, e.target.value)}
  />
  <Button handleSubmit={()=>handleReset(tp)} label={"reset"} />
  </td>
  </tr>
 ))
 ) : (
 <tr style={{ backgroundColor: '#f5f6fa' }} className="flex flex-col flex-1 justify-center py-32 text-center">
  <td colSpan="4" className="flex justify-center mb-8">
  <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
  </td>
  <td colSpan="4" className="capitalize text-black font-normal text-sm">
  Peers list is empty. Wait for admin decision.
  </td>
 </tr>
 )}
 </tbody>
 </table>
 <h6 style={{ color: "red" }}>You can save and continue later</h6>
 <Button label={"Save"} handleSubmit={handleSave} />
 </div>


 <h1 className="text-xl font-bold mb-4 text-background2">Peers Teaching</h1>
 <div className="h-full w-full overflow-scroll mb-12">
 <table className="w-full min-w-max table-auto text-left">
 <thead>
 <tr className="grid grid-cols-4 w-full" style={{ backgroundColor: "rgba(41, 23, 109, 0.1)" }}>
 {['First Name', 'Last Name', 'Matric Number', "Scores"].map(head => (
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
 students.map(({ id, firstname, lastname, matric_no, value, ob }) => (
  <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
  <td className="p-4">{firstname}</td>
  <td className="p-4">{lastname}</td>
  <td className="p-4">{matric_no}</td>
  <td className="p-4">
  <input
  disabled={value?true:false}
  type="number"
  placeholder={value? value : "Score"}
  style={{ width: 70, padding: 10 }}
  onChange={(e) =>handleScoreChangeOb(ob, e.target.value)}
  />
  </td>
  <td className="p-4"><Button label={"reset"} handleSubmit={()=>handleResetOb(ob)} /></td>
 
  </tr>
 ))
 ) : (
 <tr style={{ backgroundColor: '#f5f6fa' }} className="flex flex-col flex-1 justify-center py-32 text-center">
  <td colSpan="4" className="flex justify-center mb-8">
  <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
  </td>
  <td colSpan="4" className="capitalize text-black font-normal text-sm">
  Peers list is empty. Add a peer.
  </td>
 </tr>
 )}
 </tbody>
 </table>
 <h6 style={{ color: "red" }}>You can save and continue later</h6>
 <Button label={"Save"} handleSubmit={handleSave2} />
 </div>
 <h6 style={{ color: "darkblue" }}>Brought to you by Dr. Aderoju tech team</h6>
 </div>
 );
};