

export const Input = ({ label }) => {
  return (
    <div className="my-2 w-full">
    <p className="mb-2">{label}</p>
    <input
      type="text"
      className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  )
}
