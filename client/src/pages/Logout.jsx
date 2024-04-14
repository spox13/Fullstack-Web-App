import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)

  useEffect(() => {
    setCurrentUser(null)
  }, [])
  
  const navigate = useNavigate()
  navigate('/login')
  return (
    <div></div>
  )
}

export default Logout