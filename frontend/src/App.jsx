
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 

function App() {

  return (
   <div className="p-4 h-screen flex item-center justify-center">

  <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/login' element={<Login />} />
  </Routes>
  <Toaster />
   </div>
  )
}

export default App
