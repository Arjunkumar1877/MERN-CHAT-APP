 import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
 
 const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();
  const handleSubmit = async(e)=>{
    e.preventDefault();
   await signup(inputs)
  }

  const handleCheckboxGender = (gender)=>{
    setInputs({...inputs, gender})
  }
   return (
     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
<h1 className="text-3xl font-semibold text-center text-gray-300">
  Sign Up <span className="text-blur-500 text-blue-600"> ChatApp</span>
</h1>
<form onSubmit={handleSubmit}>
  <div className="">
    <label className='label p-2'>
      <span className="text-base label-text text-white">Full Name</span>
    </label>
    <input type="text" placeholder='John Doe' value={inputs.fullName} onChange={(e)=> setInputs({...inputs, fullName: e.target.value})} className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Username</span>
    </label>
    <input type="text" placeholder='John Doe' value={inputs.username} onChange={(e)=> setInputs({...inputs, username: e.target.value})} className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Password</span>
    </label>
    <input type='password' placeholder='Enter password' value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})} className="w-full input input-bordered h-10" />
  </div>

  <div className="">
  <label className='label p-2'>
      <span className="text-base label-text text-white">Confirm Password</span>
    </label>
    <input type='password' placeholder='Confirm password' value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})} className="w-full input input-bordered h-10" />
  </div>
  <GenderCheck onCheckboxChange={handleCheckboxGender} selectedGender={inputs.gender}/>

  <Link to={"/login"} className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
  Already have an account ?
  </Link>

  <div className="">
  <button className='btn glass btn-block btn-sm mt-2 text-white'>Sign Up</button>
  </div>
</form>
        </div>
     </div>
   )
 }
 
 export default Signup
 