import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { updateUserBookings } from '../../store/booking';

function UserProfile() {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.session.user.id)
  const bookings = useSelector(state => state.booking.userBookings)

  useEffect(() => {
    dispatch(updateUserBookings(userId))
  }, [dispatch, userId])

  console.log(bookings)


  return (
    <>
      <div className='nav-organizer'></div>
      <div>
        <h1>{userId}</h1>
        {/* <p>{bookings}</p> */}
      </div>
    </>
  )
}

export default UserProfile
