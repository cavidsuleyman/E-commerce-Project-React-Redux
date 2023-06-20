import React, {useState, useEffect} from 'react';
import { FaMapMarker } from "react-icons/fa";
import { Rate } from 'antd';
import { RiMessage2Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { auth, firestore } from '../firebase/index';
import { Button, Modal } from 'antd';


const Account = () => {

    const [userInfo, setUserInfo] = useState(null);
    const [updatedAddress, setUpdatedAddress] = useState('');
    const [updatedGender, setUpdatedGender] = useState('');
    const [updatedBirthday, setUpdatedBirthday] = useState('');
    const [updatedPhone, setUpdatedPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = async () => {
        const user = auth.currentUser;

        if (user) {
            try {
                await firestore.collection('users').doc(user.uid).update({
                    address: updatedAddress,
                    gender: updatedGender,
                    birthday: updatedBirthday,
                    phone: updatedPhone,
                });
    
                setIsModalOpen(false);
                setUserInfo(prevUserInfo => ({
                    ...prevUserInfo,
                    address: updatedAddress,
                    gender: updatedGender,
                    birthday: updatedBirthday,
                    phone: updatedPhone,
                }));
            } catch (error) {
                console.error('Error updating user information:', error);
            }
        }
    }

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
    <div className='account'>
        <div className='account-main'>
            <div className='account-profile-side'>
                <div className='account-image'>
                   {userInfo && <img src={userInfo.imageUrl} alt="User Account" /> && <img src={userInfo.imageUrl} alt="User Account" />}
                </div>
                <div className='acoount-details'>
                    <div className='account-nav'>
                        <span className='account-name'>
                            {userInfo && userInfo.displayName && userInfo.displayName}
                        <span className='account-place'>
                            <FaMapMarker/>Cracow, PL
                        </span>
                        </span>
                        
                        <p className='account-title'>User</p>
                        <div className='account-rentigs'>
                            <p>Rankings</p>
                            <span>8.6</span> <Rate disabled defaultValue={4}/>
                        </div>
                        <div className='account-list'>
                            <ul>
                                <li className='first-link'><RiMessage2Fill/>Send message</li>
                                <li><MdDone/> Contacts</li>
                                <li>Report user</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='account-title-side'>
                <div className='account-work'>
                    <p className='account-desc'>BASIC INFORMATION </p>
                    <div className='account-date'>
                        <p>Birthday: {updatedBirthday || '01.01.2023'}</p>
                        <p>Gender: {updatedGender || 'Male'}</p>
                    </div>
                </div>
                <div className='account-address'>
                    <p className='account-desc'>USER INFORMATION </p>

                    <div className='account-date'>
                        <p>Phone: {updatedPhone || '000-000-000'}</p>
                        <p>Address: {updatedAddress || '35 Street Avenida'}</p>
                        <p>Email: {userInfo && userInfo.email && userInfo.email}</p>
                        <p>Budget: $100</p>
                        <Button type="primary" onClick={showModal}>
                            Update
                        </Button>
                        <Modal title="Update Information" open={isModalOpen} onOk={handleUpdate} onCancel={handleCancel}>
                            <div className='update-main'>
                                <input required type="text" placeholder="Address" value={updatedAddress} onChange={e => setUpdatedAddress(e.target.value)} />
                                <input required type="text" placeholder="Gender" value={updatedGender} onChange={e => setUpdatedGender(e.target.value)} />
                                <input required type="date" placeholder="Birthday" value={updatedBirthday} onChange={e => setUpdatedBirthday(e.target.value)} />
                                <input required type="text" placeholder="Phone" value={updatedPhone} onChange={e => setUpdatedPhone(e.target.value)} />
                            </div>
                        </Modal>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Account

