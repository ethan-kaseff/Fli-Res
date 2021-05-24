const LOAD = 'planes/LOAD';

// Action Creators
const load  = list => ({
    type: LOAD,
    list
})

// Thunk Action Creators
export const getPlanes = () => async dispatch => {
    const response = await fetch('/api/planes')
}