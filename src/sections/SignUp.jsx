import axios from 'axios'
import React, { useState } from 'react'
import './Signup.css'

const SignUp = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{

            const res = await axios.get("http://localhost:3000/user")
            // console.log(res.data)
            const users = res.data

            const currentUser = users.find((item) => item.username === username)
            console.log(currentUser)

            if(currentUser){
                alert("User Already Exists")
                return
            }

            const response = axios.post("http://localhost:3000/user", {username, password})
            alert("Successful Signup")
            setUsername("")
            setPassword("")
        } catch(error)
        {
            console.log(error)
        }
    }
  return (
    <div className='form-container'>
        <form action="" className='form'>
            <label htmlFor="name">Enter Username</label>
            <input type="text" id='name' value={username} onChange={(e) => {setUsername(e.target.value)}}/>

            <label htmlFor="password">Enter Password</label>
            <input type="password" id='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>

            <button onClick={handleSubmit}>Submit</button>
            

        </form>
    </div>
  )
}

export default SignUp