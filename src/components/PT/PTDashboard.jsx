import React from 'react';
import { Card } from "@material-tailwind/react";

const lecturersList = [
  { id: 1, name: 'Reuben Chukwuka', dept: 'Educational Technology', number: '08036753367' },
  { id: 2, name: 'James Blunt', dept: 'Science Technology', number: '0803675378' },
];

const studentsList = [
  { id: 1, name: 'Reuben Chukwuka', dept: 'Educational Technology', number: '08036753367' },
  { id: 2, name: 'James Blunt', dept: 'Science Technology', number: '0803675378' },
  { id: 3, name: 'Samson Siasia', dept: 'Art Education', number: '0703675378' },
];

export const PTDashboard = () => {
  return (
    <>
      <div className="h-full p-10 overflow-hidden">
        <h1 className="lg:text-4xl text-center lg:text-left text-3xl text-background2 font-semibold">Welcome Back</h1>

        <div className="mt-8 lg:w-4/5 w-full">
          <div className="flex flex-col justify-center items-center mb-16">
            <img src="https://i.imgur.com/3YzCjWm.png" alt="avatar" className="mb-4" />
            <h1 className="text-colour1 text-3xl font-bold">James Cook</h1>
          </div>

          <h1 className="text-2xl font-bold mb-12">Connect with your peer teaching partners and your assigned lecturers</h1>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-background2">Lecturers</h1>
        <div className="h-full w-full overflow-scroll mb-12">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
          <tr className="grid grid-cols-4 w-full" style={{backgroundColor: "rgba(41, 23, 109, 0.1)"}} >
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
          {lecturersList.length > 0 ? (
            lecturersList.map(({ id, name, dept, number }) => (
              <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
                <td className="p-4">{id}</td>
                <td className="p-4">{name}</td>
                <td className="p-4">{dept}</td>
                <td className="p-4">{number}</td>
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
      </div>

        <h1 className="text-2xl font-bold mb-4 text-background2">Peers</h1>
     <div className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
          <tr className="grid grid-cols-4 w-full" style={{backgroundColor: "rgba(41, 23, 109, 0.1)"}} >
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
          {studentsList.length > 0 ? (
            studentsList.map(({ id, name, dept, number }) => (
              <tr key={id} className="grid grid-cols-4 border-b border-blue-gray-50">
                <td className="p-4">{id}</td>
                <td className="p-4">{name}</td>
                <td className="p-4">{dept}</td>
                <td className="p-4">{number}</td>
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
      </div>
      </div>
    </>
  )
}
