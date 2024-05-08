import { Button } from "../Button"

export const TPPostingLetter = () => {
  return (
    <>
      <div className="h-full w-full p-20">
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">Click the button below to download the</h1>
    <h1 className="lg:text-3xl text-xl text-background2 font-semibold">posting letter</h1>

    <div className="mt-20">
        <Button label="Download" />
    </div>
  </div>
    </>
  )
}
