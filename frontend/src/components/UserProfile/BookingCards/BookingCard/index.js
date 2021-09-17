import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import { deleteBooking } from '../../../../store/booking';

function BookingCard({booking}) {
  const dispatch = useDispatch()
  const [saveHidden, setsaveHidden] = useState('hidden')
  const [editHidden, seteditHidden] = useState('')

  const handleEdit = () => {
    seteditHidden('hidden');
    setsaveHidden('');

  }

  const handleSave = () => {
    setsaveHidden('hidden');
    seteditHidden('');
  }

  return (
    <div className="booking" key={booking.id}>
      <h3>{`${booking.Plane.name} - Booking #${booking.id}`}</h3>
      <img src={booking.Plane.imageLink} alt='Plane'></img>
      <h4>Date: <span>{`${booking.startDate} -> ${booking.endDate}`}</span></h4>
      <div classname='buttons'>
        <button onClick={() => dispatch(deleteBooking(booking.id))}>Delete</button>
        <button onClick={handleEdit} className={`${editHidden} edit-${booking.id}`}>Edit</button>
        <button onClick={handleSave} className={`${saveHidden} save-${booking.id}`}>Save</button>

      </div>

    </div>
  )
}

export default BookingCard
