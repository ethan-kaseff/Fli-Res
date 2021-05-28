const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const CURRENT_DATES = 'bookings/CURRENT_DATES';

// Action Creator

const create = booking => ({
    type: CREATE_BOOKING,
    booking
})

const saveDates = dates => ({
    type: CURRENT_DATES,
    dates
})

// Thunk Action Creator
export const createBooking = (userId, planeId, startDate, endDate) => async dispatch => {
    console.log('before the fetch')
    const response = await fetch('api/bookings', {
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
        default:
            return state;
    }
}

export default bookingReducer;