import { useState } from "react"
import axios from 'axios'

function Login(){
const [inname,setname] = useState("")
const [inemail,setemail] = useState("")
const [inmsg,setmsg] = useState("")
function onhandname(e){
setname(e.target.value)
}
function onhandemail(e){
    setemail(e.target.value)
}
function onhandmsg(e){
    setmsg(e.target.value)
}


    return(
<div class="flex items-center justify-center min-h-screen bg-neutral-400">
    <div class="w-full max-w-md p-6 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center text-white">Contact Us</h2>
        <form className="mt-5" action={"http://localhost:5000/logins"} method="post">
            <div class="mb-4">
                <label class="block text-black">Name</label>
                <input type="text" value={inname} onChange={onhandname} name="Name"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Your Name"/>
            </div>
            <div class="mb-4">
                <label class="block text-black">Email</label>
                <input type="email" value={inemail} onChange={onhandemail} name="Email"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Your Email"/>
            </div>
            <div class="mb-4">
                <label class="block text-black">Message</label>
                <textarea value={inmsg} onChange={onhandmsg} name="Message"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Your Message" rows="4"></textarea>
            </div>
            <button type="submit" 
            class="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
        </form>
    </div>
</div>
    )
       
}
export default Login