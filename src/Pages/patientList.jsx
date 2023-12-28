import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Avatar, Chip, Button, Card } from "@mui/material";
import {appointments} from '../data'
import axios from 'axios';
import {get_All_Appointment} from '../store/actions/index'
import { GET, AUTH } from '../utils/api'
import SimpleDialog  from "../Components/modal";
import doc1 from '../images/doc1.png'
import AuthDialog from "../Components/Modal/registerModal"; 
import SearchBar from "../Components/searchComponent/search";
const searchOption=[
    {
        name:'Doctor Name',
        value:'doctorName'
    },
    {
        name:'Patient Name',
        value:'patientName'
    },
]
function PatientList(props) {
  const [allPatient,setAllPatient]=useState([])
  const dispatch=useDispatch()
useEffect(()=>{
    getAllPatients()
},[])
// const getAllPatients=()=>{
//     axios.get(`http://localhost:4000${GET?.GETALLUSERS}`,  {params: {
//         type:'patient'
//       }})
//     .then((res) => {
//         if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
//         setAllDoctors(res.data.AllUser)
//         dispatch(get_All_Appointment(res.data.AllUser))
//         }
//         console.log(res.data.AllUser, "=res=")
//     }).catch((err) => {
//     })
// }
const getAllPatients=()=>{
    axios.get(`http://localhost:4000${GET?.GETALLAPPOINTMENTS}`)
    .then((res) => {
        if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
        setAllPatient(res.data.AllUser)
        dispatch(get_All_Appointment(res.data.AllUser))
        }
        console.log(res.data.AllUser, "=res=")
    }).catch((err) => {
    })
}
  return (
    <div className="PatientListMainDiv">
    <h3 className="doctorListHeading">
        Patient List
    </h3>
    <SearchBar searchOptions={searchOption}/>
      <div className="main-card-div">
    {
        allPatient?.map((x)=>{
            return(
                <Card sx={{maxWidth:'220px',minWidth:'220px',padding:'5px' }} className="p-2 card-border">
                    <div className="mainCard">
                        {/* <Avatar className="avtar-height avatar-border" alt="Remy Sharp" src={doc1} /> */}
                        <h5>Patient Detail</h5>
                        <div className="d-flex justify-content-between gap-1 flex-column">
                        <p className="dayTime"><span >Name:</span>{x?.userId?.userName}</p>
                            <p className="dayTime"><span>Doctor:</span>Dr. {x?.doctorId?.userName}</p>
                            <p className="dayTime"><span>Time:</span>{x.dateAndTime.time}</p>
                            <p className="dayTime"><span >Day:</span>{(new Date(x.dateAndTime.date)).toDateString()}</p>

                        </div>
                    </div>
                </Card>
            )

        })
    }
    </div>
    </div>
  );
}

export default PatientList;
