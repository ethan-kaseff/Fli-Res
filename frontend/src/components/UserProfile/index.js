import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { updateUserBookings } from '../../store/booking';

import BookingCards from './BookingCards';

import './UserProfile.css';

function UserProfile() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)
  const bookings = useSelector(state => state.booking.userBookings)

  useEffect(() => {
    dispatch(updateUserBookings(user.id))
  }, [dispatch, user.id])

  return (
    <>
      <div className='nav-organizer'></div>
      <div className='profile-container'>
        <div></div>
        <div className='profile-info'>
          <h1>{`Hi there, ${user.username}.`}</h1>
          <div className='bookings-container'>
            <h2 className='your-bookings'>Your Bookings:</h2>
            {bookings && 
              <BookingCards />
            }
            {!bookings && 
              <div>
                <h3>Make some new bookings!</h3>
              </div>
            }
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default UserProfile
