import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi";
import { auth, firestore } from '../firebase/index';
import 'firebase/compat/auth';


const User = () => {

  const userProfile = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  const navigate = useNavigate()

  const closeProfile = () => {
    setProfileOpen(null);
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // console.log('Sign-out successful');
      navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  
  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth.currentUser;

      if (user) {
        const userSnapshot = await firestore.collection('users').doc(user.uid).get();
        const userData = userSnapshot.data();
        setUserInfo(userData);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <div className='profile'>
        {userProfile ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            {userInfo && <img src={userInfo.imageUrl} alt="User Account" /> && <img src={userInfo.imageUrl} alt="User Account" />}
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={closeProfile}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                    {userInfo && userInfo.imageUrl && <img src={userInfo.imageUrl} alt="User Account" />}
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>{userInfo.displayName}</h4>
                    <label htmlFor=''>Cracow, PL</label>
                  </div>
                </div>
                <Link className='link' to='/account'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button onClick={handleSignOut} className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}

export default User