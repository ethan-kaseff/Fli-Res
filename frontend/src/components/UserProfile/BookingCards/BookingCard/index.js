import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'

import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { deleteBooking } from '../../../../store/booking';

function BookingCard({booking}) {
  const dispatch = useDispatch()
  const [saveHidden, setsaveHidden] = useState('hidden')
  const [editHidden, seteditHidden] = useState('')
  let [startDate, setstartDate] = useState(null)
  let [endDate, setendDate] = useState(null)

  const [focusedInput, setfocusedInput] = useState(null);

  const handleEdit = () => {
    seteditHidden('hidden');
    setsaveHidden('');

  }

  const handleSave = () => {
    setsaveHidden('hidden');
    seteditHidden('');
  }

  // const date = new Date(booking.startDate)
  // console.log(date)
  // console.log(typeof(date))

  // console.log(booking.startDate)

  useEffect(() => {
    const start = new moment(booking.startDate)
    const end = new moment(booking.endDate)
    setstartDate(start)
    setendDate(end)
  }, [booking])

  useEffect(() => {
    console.log('startDate', startDate)
    console.log('endDate', endDate)
  }, [startDate, endDate])

  return (
    <div className="booking" key={booking.id}>
      <h3>{`${booking.Plane.name} - Booking #${booking.id}`}</h3>
      <img src={booking.Plane.imageLink} alt='Plane'></img>
      <div>
        <h4>Date: 
          <span>{`${booking.startDate} -> ${booking.endDate}`}</span>
          <div>
            <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => {
                setstartDate(startDate);
                setendDate(endDate);
              }} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setfocusedInput(focusedInput)} // PropTypes.func.isRequired,
              showDefaultInputIcon
            />
          </div>
        </h4>

      </div>
      <div className='buttons'>
        <button onClick={() => dispatch(deleteBooking(booking.id))}>Delete</button>
        <button onClick={handleEdit} className={`${editHidden} edit-${booking.id}`}>Edit</button>
        <button onClick={handleSave} className={`${saveHidden} save-${booking.id}`}>Save</button>

      </div>

    </div>
  )
}

export default BookingCard