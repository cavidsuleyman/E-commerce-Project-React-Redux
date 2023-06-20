import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, storage } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import avatar from '../assets/image/user.jpg'



const Registr = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({
        displayName: displayName,
      });


      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      await imageRef.put(image);

      const imageUrl = await imageRef.getDownloadURL();
      const userRef = firebase.firestore().collection('users').doc(userCredential.user.uid);
      await userRef.set({ displayName, email, imageUrl });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setImage(null);

      navigate('/')
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className='form-input'>
        <form onSubmit={handleRegistration}>         
            <input 
            required 
            type="text" 
            placeholder='Username'  
            maxLength={7}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className='text-input'
            />
            <input 
            required 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-input'
            />
            <input 
            required 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='text-input'
            />
            
            <input accept='image/*' id='file' required type="file" onChange={handleImageChange}/>
            <button>SIGN UP</button>
            <p>
              You do have an account? <Link style={{textDecoration: "none"}} to="/login">Login</Link>
            </p>
        </form>
        
    </div>
  )
}

export default Registr