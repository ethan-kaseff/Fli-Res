import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ReactCSSTransitionGroup from 'react-transition-group';

import { deleteBooking } from '../../../store/booking';

function BookingCards({bookingss}) {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking.userBookings)
  // const [bookingState, setbookingState] = useState(bookings)
  const [bookingsArr, setbookingsArr] = useState([])

  // let bookingsArr = []

  useEffect(() => {
    // setbookingState(bookings)

    if (bookings) {
      const arr = []
      for (const key in bookings) {
        let start = bookings[key].startDate;
        let end = bookings[key].endDate;

        start = new Date(start)
        end = new Date(end) 

        bookings[key].startDate = start.toDateString();
        bookings[key].endDate = end.toDateString();

        arr.push(bookings[key])
      }
      setbookingsArr(arr)
    }
  }, [bookings, bookingsArr])


  return (
    <div>
      {/* {bookings &&
        <ReactCSSTransitionGroup
          transitionName='fade'
          transitionLeaveTimeout={300}> */}
          { bookings && 
          bookingsArr.map(booking => {
            return (
              <div className="booking" key={booking.id}>
                <h3>{`${booking.Plane.name} - Booking #${booking.id}`}</h3>
                <img src={booking.Plane.imageLink} alt='Plane'></img>
                <h4>Date: <span>{`${booking.startDate} -> ${booking.endDate}`}</span></h4>
                <button onClick={() => dispatch(deleteBooking(booking.id))}>Delete</button>
              </div>
            )
          })}
        {/* </ReactCSSTransitionGroup>
      } */}
    </div>
  )
}

export default BookingCards
