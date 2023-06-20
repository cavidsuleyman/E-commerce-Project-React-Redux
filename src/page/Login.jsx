import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='form-input-login'>
        <form onSubmit={handleSubmit}>
            <input required type="email" placeholder='Email'/>
            <br />
            <input required type="password" placeholder='Password'/>
            <br />
            <button>LOGIN</button>
            {err && <span>Something went wrong</span>}
            <p>You don't have an account? <Link style={{textDecoration: 'none'}} to="/registr">Register</Link></p>
        </form>
       
    </div>
  )
}

export default Login