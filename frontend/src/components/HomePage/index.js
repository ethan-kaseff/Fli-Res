import {useState} from 'react';

import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';


import 'react-dates/lib/css/_datepicker.css';
import './HomePage.css';


function HomePage() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);
    




    return (
        <>
            <div className='main-area'>
                <div>
                    <h1>Experience the skies in Fli-Res</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <label for='state'>State:</label>
                            <select id='state'>
                                <option value='Kansas'>Kansas</option>
                                <option value='Missouri'>Missouri</option>
                            </select>
                        </div>
                        <div>
                            <label for='date-picker'>Date Picker:</label>
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
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className='categories-area'>

            </div>
        </>
    )
}

export default HomePage;