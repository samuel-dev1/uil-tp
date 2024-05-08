import { Input, Button } from "../../components"
export const TPDashboard = () => {
  return (
    <>
     <div className="w-full py-10 px-12 h-auto">
   <h1 className="lg:text-4xl text-3xl text-background2 text-center lg:text-left font-semibold">Welcome Back</h1>

   <div className="mt-8 lg:w-4/5 w-full">
    <div className="flex flex-col justify-center items-center mb-16">
      <img src="https://i.imgur.com/3YzCjWm.png" className="mb-4" />
      <h1 className="text-colour1 text-3xl font-bold">James Cook</h1>
    </div>

    <div>
      <h1 className="text-2xl font-bold mb-8">School Assigned to</h1>
      <Input label="School Name" />
      <Input label="Location" />
      <Input label="Teaching Subject" />
    </div>
    
    <div className="flex justify-between flex-col lg:flex-row mt-5 lg:mt-10">
      <Button label="Print Posting Letter" />
      <Button label="Change School" />
    </div>
    

   </div>

  </div>
    </>
  )
}
