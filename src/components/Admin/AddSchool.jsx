import { Input, Button } from "../../components"

export const AddSchool = () => {
  return (
    <>
    <div className="w-full py-10 px-12 h-auto">
   <div>
     <h1 className="text-xl font-bold mb-16 text-background2">Add New School</h1>
     <Input label="Name of School" />
     <Input label="Address" />
     <Input label="No of Allocation" />
   </div>
   
   <div className="flex justify-between flex-col lg:flex-row mt-3 lg:mt-5">
     <Button label="Add School" />
   </div>
  </div>
   </>
  )
}

