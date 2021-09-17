import {csrfFetch} from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const CURRENT_DATES = 'bookings/CURRENT_DATES';
const CURRENT_BOOKINGS = 'bookings/CURRENT_BOOKINGS';
const USER_BOOKINGS = 'bookings/USER_BOOKINGS';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';

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

const userBookings = bookings => ({
    type: USER_BOOKINGS,
    bookings
})

const removeBooking = id => ({
    type: DELETE_BOOKING,
    id
})

// Thunk Action Creator
export const createBooking = (userId, planeId, startDate, endDate) => async dispatch => {
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
    // const response = await fetch(`/api/bookings/byPlane/${id}`)
    const response = await fetch(`/api/bookings`)
    if (response.ok) {
        const bookings = await response.json();
        dispatch(currentBookings(bookings))
    }
}

export const updateUserBookings = (id) => async dispatch => {
    // const response = await fetch(`/api/bookings/byPlane/${id}`)
    const response = await fetch(`/api/bookings/${id}`)
    if (response.ok) {
        const bookings = await response.json();
        dispatch(userBookings(bookings))
    }
}

export const deleteBooking = (id) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/delete/${id}`, {
        method: 'POST',
    })
    // if (response.ok) {
    // const booking = await response.json();
    dispatch(removeBooking(id))
    // }
}

export const editBooking = (id, startDate, endDate) => async dispatch => {
    const response = await csrfFetch('/api/bookings/edit', {
        method: 'PATCH',
        body: JSON.stringify({
            id, 
            startDate,
            endDate
        })
    })

    dispatch()
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
            const userBookings = {};

            for (const key in action.bookings) {
                userBookings[action.bookings[key].id] = action.bookings[key]

            }

            return {
                ...state,
                userBookings: userBookings
            }

            // return {
            //     ...state, 
            //     userBookings: action.bookings
            // }
        }
        case DELETE_BOOKING: {
            let newState = {...state}

            delete newState.userBookings[action.id]

            const newUserBookings = {...newState.userBookings}

            return {...newState, userBookings: newUserBookings}
        }
        default:
            return state;
    }
}

export default bookingReducer;