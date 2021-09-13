import React from 'react'

function BookingCards({bookings}) {
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
            <h3>{booking.Plane.name}</h3>
            <img src={booking.Plane.imageLink} ></img>
            <h4>Date: <span>{`${booking.startDate} -> ${booking.endDate}`}</span></h4>
          </div>
        )
      })}
    </div>
  )
}

export default BookingCards
