import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/userService'



const Login = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[data, setData] = useState(false)

    const navigate = useNavigate()

   const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const result = await loginUser(username, password);

        if (!result.success) {
            alert(result.message);
            return;
        }

        alert(result.message);
        setData(true);
    } catch (error) {
        console.log(error);
        alert('Login failed. Try again later.');
    }
};

if (data) {
    navigate('/');
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