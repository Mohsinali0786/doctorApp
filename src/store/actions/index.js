import {BOOKEDAPPOINTMENT,GETALLDOCTORS,SETSELECTEDDATE,SETREGISTRATIONDATA, SETLOGINDATA} from '../types'

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
export const set_RegistrationData=(data)=>async(dispatch)=>{
    console.log('Img URL',data)
    dispatch({
        type:SETREGISTRATIONDATA,
        payload:data
    })
}
export const set_LoginData=(data)=>async(dispatch)=>{
    // console.log('Img URL',data)
    dispatch({
        type:SETLOGINDATA,
        payload:data
    })
}
