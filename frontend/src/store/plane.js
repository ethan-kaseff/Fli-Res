const LOAD = 'planes/LOAD';

// Action Creators
const load  = list => ({
    type: LOAD,
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
        default: 
            return state;
    }

}

export default planeReducer;