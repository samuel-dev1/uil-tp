import { Select, Button } from '../../components'

export const TPSelectSchool = () => {
  return (
   <>
    <div className="w-full py-10 px-12 h-auto">
   <h1 className="text-3xl text-xl text-background2 font-semibold">Choose School For Teaching Practice</h1>
   <div className="mt-16">
    <Select label="Location" />
    <Select label="School" />
    <Select label="Teaching Subject" />
   </div>

   <Button label="Submit" />
  </div>
   </>
  )
}
