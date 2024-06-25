export const Button = ({ label, handleSubmit }) => {
    return (
    <>
       <button onClick={handleSubmit} className="text-white lg:mt-8 mt-4 py-3 px-10 rounded-xl bg-background2">{label}</button>
    </>
    )
  }
  