const LOAD = 'planes/LOAD';
const LOAD_AVAILABLE = 'planes/LOAD_AVAILABLE';

// Action Creators
const load  = list => ({
    type: LOAD,
    list
})

const loadAvailable = list => ({
    type: LOAD_AVAILABLE,
    list
})

// Thunk Action Creators
export const getPlanes = () => async dispatch => {
    const response = await fetch('/api/planes')

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getAvailablePlanes = (startDate, endDate, state ) => async dispatch => {
    const response = await fetch(`/api/planes/availability/${startDate}/${endDate}`);

    if (response.ok) {
        const list = await response.json();
        dispatch()
    }
}

const initialState = {}

// Reducer 
const planeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allPlanes = {};
            action.list.forEach(plane => {
                allPlanes[plane.id] = plane;
            });
            return {
                ...allPlanes,
                ...state
            }
        }
        case LOAD_AVAILABLE: {
            const availablePlanes = {};
            action.list.forEach(plane => {
                availablePlanes[plane.id] = plane;
            });
            return {
                ...state,
                availablePlanes: availablePlanes
            }
        }
        default: 
            return state;
    }

}

export default planeReducer;