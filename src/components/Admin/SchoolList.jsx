import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Button } from '../Button';

const schoolsList = [
    { id: 1, name: 'Jalala Secondary school', address: 'Jalala, tanke', allocation: '20', noStd: '17' },
  ];

export const SchoolList = ({ setAddSchool }) => {

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
          <div className='flex cursor-pointer'>
          <span className='mx-2'>{item.name}</span>
            <span className='mx-2'>{item.school}</span>
          </div>
          </>
        )
      }

  return (
    <>
    <div className='flex flex-col my-4 justify-center items-center'>
    <div className='flex items-center my-12 w-11/12 justify-start'>
    <h1 className='text-xl font-bold text-background2'>Schools</h1>
    <button onClick={()=> setAddSchool(true)} className='mx-2 py-3 px-5 rounded-xl bg-background1'>Add new</button>
    </div>
    <form className="flex items-center w-11/12 mb-4">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
    <ReactSearchAutocomplete
            items={schoolsList}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Search for student'
            styling={
                {
                  backgroundColor: "#29176D",
                  color: "white"
                }
              }
          />
    </div>
</form>
      <div className="h-full w-11/12 overflow-scroll mb-12">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
          <tr className="grid grid-cols-5 w-full" style={{backgroundColor: "rgba(41, 23, 109, 0.1)"}} >
            {['S/N', 'School', 'Address', 'Allocation', 'No of Students'].map(head => (
              <th key={head} className="p-4 tracking-widest w-full">
                <div className="font-medium tracking-widest whitespace-nowrap text-sm flex text-background2 font-semibold">
                  {head}
                </div>
              </th>
            ))}
          </tr>
          </thead>
          <tbody style={{ backgroundColor: "#f5f6fa" }}>
          {schoolsList.length > 0 ? (
            schoolsList.map(({ id, name, address, allocation, noStd }) => (
              <tr key={id} className="grid grid-cols-5 border-b border-blue-gray-50">
                <td className="p-4">{id}</td>
                <td className="p-4">{name}</td>
                <td className="p-4">{address}</td>
                <td className="p-4">{allocation}</td>
                <td className="p-4">{noStd}</td>
              </tr>
            ))
          ) : (
            <tr style={{ backgroundColor: '#f5f6fa' }} className="flex flex-col flex-1 justify-center py-32 text-center">
              <td colSpan="4" className="flex justify-center mb-8">
                <img src="https://i.imgur.com/VQEIj2b.png" alt="icon" />
              </td>
              <td colSpan="4" className="capitalize text-black font-normal text-sm">
                School list is empty. Add a School.
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
