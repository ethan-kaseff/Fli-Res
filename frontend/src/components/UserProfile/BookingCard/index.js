import React from 'react'
import {useDispatch} from 'react-redux'

import { deleteBooking } from '../../../store/booking';

function BookingCards({bookings}) {
  const dispatch = useDispatch();

  if (bookings) {
    for (const key in bookings) {
      let start = bookings[key].startDate;
      let end = bookings[key].endDate;

      start = new Date(start)
      end = new Date(end) 

      bookings[key].startDate = start.toDateString();
      bookings[key].endDate = end.toDateString();
    }

  }

  return (
    <div>
      { bookings &&
      bookings.map(booking => {
        return (
          <div className="booking" key={booking.id}>
            <h3>{`${booking.Plane.name} - Booking #${booking.id}`}</h3>
            <img src={booking.Plane.imageLink} alt='Plane'></img>
            <h4>Date: <span>{`${booking.startDate} -> ${booking.endDate}`}</span></h4>
            <button onClick={() => dispatch(deleteBooking(booking.id))}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default BookingCards
