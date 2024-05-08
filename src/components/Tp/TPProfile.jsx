import { Input } from '../../components'

export const TPProfile = () => {
  return (
    <>
     <div className="h-full w-full p-10">
   <h1 className="text-4xl text-background2 font-semibold">My Profile</h1>

   <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mt-8">
     <div className="w-full">
        <Input label="Name" />
       <Input label="Matric No" />
       <Input label="Phone Number" />
     </div>
     <div className="lg:mx-8 mx-0 w-full">
      <Input label="Email" />
       <Input label="Department" />
     </div>
   </div>

     <button
        className="text-white mt-8 py-3 px-10 rounded-xl bg-background2"
        >Edit Profile</button>
  </div>
    </>
  )
}
