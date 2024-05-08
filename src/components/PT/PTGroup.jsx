import { Button } from '../../components'

export const PTGroup = () => {
  return (
    <>
        <div className="h-full w-full p-20">
    <h1 className="text-3xl text-background2 font-semibold">Click the button below to download the</h1>
    <h1 className="text-3xl text-background2 font-semibold">assigned group</h1>

    <div className="mt-20">
        <Button label="Download" />
    </div>
  </div>
    </>
  )
}
