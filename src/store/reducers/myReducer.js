import { BOOKEDAPPOINTMENT,GETALLDOCTORS,SETLOGINDATA,SETREGISTRATIONDATA,SETSELECTEDDATE} from '../types'
let initialState = {
    // isLoggedin: false,
    AllDoctors:[]

}
console.log('appointments',initialState.appointments)
const reducer = (state = initialState, action) => {
    console.log(state,'STTTTTTTTTTTTTTTTT')
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
                selectedDate:{...state.selectedDate,...action.payload}
            }
        case SETREGISTRATIONDATA:
            return {
                ...state,
                registrationData:action.payload ? {...state.registrationData ,...action.payload} : action.payload
                // registrationData:{...action.payload}

            }
        case SETLOGINDATA:
            return {
                ...state,
                loginData:action.payload 
            }
        default: {
            return state
        }
    }
}
export default reducer