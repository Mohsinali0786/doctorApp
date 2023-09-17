import { BOOKEDAPPOINTMENT,GETALLDOCTORS,SETSELECTEDDATE} from '../types'
let initialState = {
    // isLoggedin: false,
    AllDoctors:[]

}
console.log('appointments',initialState.appointments)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLDOCTORS:
            // console.log('UPLOADTEAMIMAGE', action.payload)
            return {
                ...state,
                AllDoctors:action.payload
            }
        case SETSELECTEDDATE:
            return {
                ...state,
                selectedDate:{...state.selectedDate ,...action.payload}
            }
            
        default: {
            return state
        }
    }
}
export default reducer