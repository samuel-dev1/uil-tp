import { Button } from "../Button"
import { useNavigate } from "react-router-dom"

export const TPPostingLetter = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-full w-full p-20">
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">Click the button below to download the</h1>
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">posting letter</h1>

    <div className="mt-20">
        <Button
        handleSubmit={()=>navigate("/generate")}
        label="Download" />
    </div>
  </div>
    </>
  )
}
