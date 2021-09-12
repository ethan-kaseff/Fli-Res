import React from 'react'

import {useSelector} from 'react-redux'

function UserProfile() {
  const userId = useSelector(state => state.session.user.id)
  const bookings = useSelector(state => state.booking)


  return (
    <>
      <div className='nav-organizer'></div>
      <div>
        <h1>{userId}</h1>
      </div>
    </>
  )
}

export default UserProfile
