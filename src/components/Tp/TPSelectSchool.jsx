import {  Button } from '../../components'
import Select from 'react-select'


export const TPSelectSchool = () => {
  const locationOptions = [
    { value: 'Airport', label: 'Airport' },
    { value: 'Tanke', label: 'Tanke' },
    { value: 'Tipper Garage', label: 'Tipper Garage' }
  ]

  const schoolOptions = [
    { value: 'Air Foundation School', label: 'Air Foundation School' },
    { value: 'Earth Foundation Schoole', label: 'Earth Foundation School' },
    { value: 'Water Foundation School', label: 'Water Foundation School' }
  ]

  const subjectOptions = [
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Physics', label: 'Physics' }
  ]

  return (
   <>
    <div className="w-full py-10 px-12 h-auto">
   <h1 className="text-3xl text-xl text-background2 font-semibold">Choose School For Teaching Practice</h1>
   <div className="mt-16">
   <Select options={locationOptions} className='mb-4 bg-background1' />
   <Select options={schoolOptions} className='mb-4 bg-transparent' />
   <Select options={subjectOptions} className='mb-4 bg-background1' />
   </div>

   <Button label="Submit" />
  </div>
   </>
  )
}
