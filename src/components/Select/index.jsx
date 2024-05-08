

export const Select = ({ label }) => {
  return (
    <>
     <div className="my-2 w-full">
      <p className="mb-2">{ label }</p>
      <select
        type="text"
        className="w-full bg-background1 border border-gray-300 rounded-md py-2 focus:outline-none focus:border-blue-500"
      >
      <option value="red"></option>
      <option value="blue"></option>
      </select>

    </div>
    </>
  )
}
