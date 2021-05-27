import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import './HomePage.css';

import {getAvailablePlanes} from '../../store/plane';


function HomePage({isLoaded}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(getAvailablePlanes(startDate, endDate))

        history.push(`/searchResults`);
    }

    return (
        <>
            <div className='main-area'>
                <div className='nav-organizer'></div>
                <div>
                    <h1>Experience the skies in Fli-Res</h1>
                </div>
                <div >
                    <form onSubmit={handleSubmit} className='search-bar'>
                        <div>
                            <label>State:</label>
                            <select id='state'>
                                <option value='Kansas'>Kansas</option>
                                <option value='Missouri'>Missouri</option>
                            </select>
                        </div>
                        <div>
                            <label>Date Picker:</label>
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
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='categories-area'>
                <h2>Categories</h2>
                <div className='category-section'>
                    <h4>4k</h4>
                    <p>The best planes with unending service</p>
                </div>
                <div className='category-section'>
                    <h4>1080p</h4>
                    <p>The best planes with unending service</p>
                </div>
                <div className='category-section'>
                    <h4>720p</h4>
                    <p>Getting everyone from point A to B </p>
                </div>
            </div>
        </>
    )
}

export default HomePage;