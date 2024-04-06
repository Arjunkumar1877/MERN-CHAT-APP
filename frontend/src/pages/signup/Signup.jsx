 import React from 'react'
import GenderCheck from './GenderCheck'
 
 const Signup = () => {
   return (
     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
<h1 className="text-3xl font-semibold text-center text-gray-300">
  Sign Up <span className="text-blur-500 text-blue-600"> ChatApp</span>
</h1>
<form>
  <div className="">
    <label className='label p-2'>
      <span className="text-base label-text text-white">Full Name</span>
    </label>
    <input type="text" placeholder='John Doe' className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Username</span>
    </label>
    <input type="text" placeholder='John Doe' className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Password</span>
    </label>
    <input type='password' placeholder='Enter password' className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Confirm Password</span>
    </label>
    <input type='password' placeholder='Confirm password' className="w-full input input-bordered h-10" />
  </div>
  <GenderCheck />

  <a href="#" className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
  Already have an account ?
  </a>

  <div className="">
  <button className='btn glass btn-block btn-sm mt-2 text-white'>Sign Up</button>
  </div>
</form>
        </div>
     </div>
   )
 }
 
 export default Signup
 