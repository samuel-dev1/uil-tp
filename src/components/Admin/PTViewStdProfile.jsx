import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const studentsList = [
  { id: 1, name: 'Reuben Chukwuka', dept: 'Educational Technology', number: '08036753367' },
  { id: 2, name: 'James Blunt', dept: 'Science Technology', number: '0803675378' },
  { id: 2, name: 'Samson Siasia', dept: 'Art Education', number: '0703675378' },
];
export const PTViewStdProfile = () => {

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
          <span className='mx-2'>{item.number}</span>
            <span className='mx-2'>{item.name}</span>
          </div>
          </>
        )
      }

  return (
   <>
      <div className="mt-16 w-full mx-32">
      <h1 className="text-xl font-bold mb-8 text-background2">View Student Profile</h1>
<form className="flex items-center w-full">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
    <ReactSearchAutocomplete
            items={studentsList}
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
    </div>
   </>
  )
}

