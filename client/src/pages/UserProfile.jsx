import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi'
import {BiCheck} from 'react-icons/bi'

import Avatar from '../images/avatar10.jpg'

const UserProfile = () => {

  const [avatar, setAvatar] = useState(Avatar)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const navigate = useNavigate()

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  useEffect(() => {
    if(!token) {
    navigate('/login')
    }
}, [])

  return (
    <section className="profile">
        <div className="container profile__container">
            <Link to={`/myposts/${currentUser.id}`} className='btn'>My Posts</Link>

            <div className="profile__details">
                <div className="avatar__wrapper">
                    <div className="profile__avatar">
                        <img src={avatar} alt="" />
                    </div>

                    <form className='avatar__form'>
                        <input type="file" id='avatar' name='avatar' onChange={e => setAvatar(e.target.files[0])} accept="png, jpg, jpeg" />
                        <label htmlFor="avatar"><FiEdit/></label>
                    </form>
                    <button type="submit" className='profile__avatar-btn'><BiCheck/></button>
                </div>

                <h1>Dummy Name</h1>


                <form className='form profile__form'>
                    <p className='form__error-message'>This is an error message!</p>
                    <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                    <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                    <button type="submit" className='btn primary'>Update my details</button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default UserProfile