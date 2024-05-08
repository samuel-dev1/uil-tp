import { Button } from '../../components'
export const ChangePassword = () => {
  return (
    <>
       <div className="h-full w-full p-10 flex flex-col">
    <h1 className="text-4xl mb-3 text-background2 font-semibold text-center mt-16">Choose a Password</h1>
    <h1 className="text-2xl font-bold mb-4 text-center">Must be 9 characters</h1>

    <div className="flex items-center justify-center justify-self-center  self-center flex-col lg:w-3/5 w-full">
      <input 
        className="bg-background1 my-3 md:w-4/5 w-4/5 p-3 rounded-3xl italic" placeholder="Password" type="password" />
        <input
        className="my-3 md:w-4/5 w-4/5 p-3 rounded-3xl italic bg-background1"
         placeholder="Confirm Password" type="password" />
         <Button label="Change Password"/>
    </div>

  </div>
    </>
  )
}
