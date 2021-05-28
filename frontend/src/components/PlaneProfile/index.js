import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {getPlanes} from '../../store/plane';


import './PlaneProfile.css';

function PlaneProfile() {
    const dispatch = useDispatch();
    const { planeId } = useParams();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);

    useEffect(() => {
        dispatch(getPlanes());
    }, [dispatch])

    const plane = useSelector(state => state.plane[planeId]);

    const bookIt = () => {
        
    }


    return (
        <>
            <div className='nav-organizer'></div>
            {plane && 
            <div className='profile-content'>
                <div></div>
                <div className='plane-info'>
                    <img src={plane.imageLink} alt='plane' className='image'></img>
                    <h1>{plane.name}</h1>
                    <label>Category: </label>
                    <span>{plane.categoryId}</span>
                    <h3>Description</h3>
                    <p>{plane.description}</p>
                    <h3>Plane Facts</h3>
                    <label>Refill Miles: </label>
                    <span>{plane.refillMiles}</span>
                    <label>Year Built: </label>
                    <span>{plane.yearBuilt}</span>
                    <label>Zip Code Location: </label>
                    <span>{plane.zipCode}</span>
                </div>
                <div className='booking-space'>
                    <div className='datepicker'>
                        <DateRangePicker
                            startDate={startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => {
                                setStartDate(startDate);
                                setEndDate(endDate);
                            }} // PropTypes.func.isRequired,
                            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => setfocusedInput(focusedInput)} // PropTypes.func.isRequired,
                            showDefaultInputIcon
                        />
                        <button onclick={bookIt}>Book</button>
                    </div>
                </div>
                <div></div>
            </div>
            }
        </>
    )

}


export default PlaneProfile
