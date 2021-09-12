import {csrfFetch} from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const CURRENT_DATES = 'bookings/CURRENT_DATES';
const CURRENT_BOOKINGS = 'bookings/CURRENT_BOOKINGS';
const USER_BOOKINGS = 'bookings/USER_BOOKINGS';

// Action Creator

const create = booking => ({
    type: CREATE_BOOKING,
    booking
})

const saveDates = dates => ({
    type: CURRENT_DATES,
    dates
})

const currentBookings = bookings => ({
    type: CURRENT_BOOKINGS,
    bookings
})

// Thunk Action Creator
export const createBooking = (userId, planeId, startDate, endDate) => async dispatch => {
    console.log('before the fetch')
    const response = await csrfFetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            planeId,
            startDate,
            endDate
        })
    })

    console.log('made it to thunk')

    if (response.ok) {
        const list = await response.json();
    }
}

export const saveCurrentDates = (startDate, endDate) => async dispatch => {
    dispatch(saveDates({
        startDate,
        endDate
    }))
}

export const updateCurrentBookings = (id) => async dispatch => {
    console.log('yup we are here  ===============')
    // const response = await fetch(`/api/bookings/byPlane/${id}`)
    const response = await fetch(`/api/bookings`)
    if (response.ok) {
        const bookings = await response.json();
        dispatch(currentBookings(bookings))
        console.log('sent bookings ')
    }
}




const initialState = {}

// Reducer
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_DATES: {
            return {
                ...state,
                startDate: action.dates.startDate,
                endDate: action.dates.endDate
            }
        }
        case CURRENT_BOOKINGS: {
            return {
                ...state, 
                currentBookings: action.bookings
            }
        }
        case USER_BOOKINGS: {
            return {
                ...state, 
                userBookings: action.bookings
            }
        }
        default:
            return state;
    }
}

export default bookingReducer;