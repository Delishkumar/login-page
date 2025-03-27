
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function App(){
  const navigate = useNavigate()
  const [inname,setname] = useState("")
  const [inpass,setpass] = useState("")
  const [error,seterror] = useState(false)
  function onhandchange(e){
setname(e.target.value)
  }
  function onhandpass(e){
    setpass(e.target.value)
  }
  function sub(){
const logindetail = axios.get(`http://localhost:5000/app?username=${inname}&password=${inpass}`)
logindetail.then(function(data){
  if(data.data === true){
navigate('/login')
  }
  else{
    seterror(true)
   

  }
})


  }
  return(
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-lime-500">
    <div class="w-full max-w-md p-8 space-y-6 bg-gradient-to-b from-cyan-500 to-yellow-400 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>
        <div class="space-y-4">
 
            <div>
                <label class="block text-gray-700">Username</label>
                <input type="text" value={inname} onChange={onhandchange}
                class="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400" placeholder="Enter your username" required/>
            </div>
            <div>
                <label class="block text-gray-700">Password</label>
                <input type="password" value={inpass} onChange={onhandpass}
                 class="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required/>
            </div>
            <button type="submit" onClick={sub}
            class="w-32 m-28 p-2 text-white bg-blue-600 rounded-xl shadow-lg hover:bg-violet-900">
                Login
            </button>
        </div>
        {error?<p className="text-red-600 text-center">Input correct username&password</p>:""}
        <p class="text-sm text-center text-gray-600">
            Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign up</a>
        </p>
    </div>
</div>
  )
}
export default App