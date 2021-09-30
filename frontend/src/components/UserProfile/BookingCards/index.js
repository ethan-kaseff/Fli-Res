import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ReactCSSTransitionGroup from 'react-transition-group';

import BookingCard from './BookingCard';

function BookingCards() {
  const bookings = useSelector(state => state.booking.userBookings)
  const [bookingsArr, setbookingsArr] = useState([])

  useEffect(() => {

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

      arr.sort((a, b) => {
        const aDate = new Date(a.startDate)
        const bDate = new Date(b.startDate)

        if (bDate < aDate) {
          return 1
        } else if (bDate > aDate) {
          return -1
        } else {
          return 0
        }

      })
      setbookingsArr(arr)
    }
  }, [bookings])


  return (
    <div>
      {/* {bookings &&
        <ReactCSSTransitionGroup
          transitionName='fade'
          transitionLeaveTimeout={300}> */}
          { bookings && 
          bookingsArr.map(booking => {
            return (
              <BookingCard booking={booking} />
            )
          })}
        {/* </ReactCSSTransitionGroup>
      } */}
    </div>
  )
}

export default BookingCards
