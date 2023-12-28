import axios from 'axios';
import {get_All_Appointment} from '../store/actions/index'
import { GET, AUTH } from '../utils/api'
const MatchDate = (doctorsList, selectedDate , selecteddoctor) => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let day = selectedDate.getDay();
    day = days[day];
    if (doctorsList) {
      let findDoctor = doctorsList.find((x) => x._id == selecteddoctor && selecteddoctor._id);
      if (findDoctor) {
        return findDoctor
      }
    }
}
const getAllPatients=()=>{
  axios.get(`http://localhost:4000${GET?.GETALLAPPOINTMENTS}`)
  .then((res) => {
      if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
        return res.data
      // setAllPatient(res.data.AllUser)
      // dispatch(get_All_Appointment(res.data.AllUser))
      }
      console.log(res.data.AllUser, "=res=")
  }).catch((err) => {
    return err
  })
}
  export {
    MatchDate,
    getAllPatients
  }