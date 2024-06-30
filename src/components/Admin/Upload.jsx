


const token = JSON.parse(localStorage.getItem('token'));


const uploadUrl = `https://uil-tp.com.ng/auth/upload-school?token=${encodeURIComponent(token)}`;


export const Upload = () => {

   const token = JSON.parse(localStorage.getItem('token')); 
  return (
    <div className="w-full py-10 px-12 h-auto">
        <a href={uploadUrl}>
        <button className='mx-2 py-3 px-5 rounded-xl bg-background1'>
           Upload school
        </button>
        </a>
        <a href="https://uil-tp.com.ng/auth/upload-supervisor">
        <button className='mx-2 py-3 px-5 rounded-xl bg-background1'>
           Upload Lecturer
        </button>
        </a>
        <a href="https://uil-tp.com.ng/auth/uploads">
        <button className='mx-2 py-3 px-5 rounded-xl bg-background1'>
           Upload Student
        </button>
        </a>
    </div>
  )
}

