import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[data, setData] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.get("http://localhost:3000/user")
            const users = response.data
            // console.log(users)
            const founduser = users.find((u) => u.username === username)
            if(!founduser){
                alert("User Not Found")
                return
            }

            if(founduser.password !== password){
                alert("Wrong Password")
                return
            }

            alert("Sucessful Login")
            setData(true)
        }catch(error){
            console.log(error)
        }
    }

    if(data){
        navigate('/')
    }

  return (
    <div className='form-container'>
        <form action="" className='form'>
            <h3>Login</h3>
            <div className="username">
                <label htmlFor="name">Enter Username</label>
                <input type="text" id='name' placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>

           
            <div className="password">
                 <label htmlFor="password">Enter Password</label>
            <input type="password" id='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
           

            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <Link to='/signup'><span>Sign Up</span></Link></p>

        </form>
    </div>
  )
  
}

export default Login