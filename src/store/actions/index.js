import {BOOKEDAPPOINTMENT,GETALLDOCTORS,SETSELECTEDDATE} from '../types'

export const get_All_Appointment=(data)=>async(dispatch)=>{
    console.log('Img URL',data)
    dispatch({
        type:GETALLDOCTORS,
        payload:data
    })
}
export const set_Selected_Date=(data)=>async(dispatch)=>{
    console.log('Img URL',data)
    dispatch({
        type:SETSELECTEDDATE,
        payload:data
    })
}
