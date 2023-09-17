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
// import {CalendarMonthIcon} from '@mui/icons-material';
function DoctorList(props) {
  const [allDoctors,setAllDoctors]=useState([])
    const [open, setOpen] = useState(false);
//    const data = useSelector((state) => state.myReducer)
  const dispatch=useDispatch()


// const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     // setSelectedValue(value);
//   };
useEffect(()=>{
    console.log(GET?.GETAPPOINTMENT,'GET?.GETDOCTORS')
    axios.get(`http://localhost:4000${GET?.GETAPPOINTMENT}`)
    .then((res) => {
        console.log(res.data.AllDoctors, "=res=")
        setAllDoctors(res.data.AllDoctors)
        dispatch(get_All_Appointment(res.data.AllDoctors))
    }).catch((err) => {
    })
},[])

  return (
      <div className="main-card-div">
    {
        allDoctors?.map((x)=>{
            return(
                <Card sx={{maxWidth:'220px',minWidth:'220px', }} className="p-2 card-border">
                    <div className="txt-center">
                        <Chip label={x?.doctorId?.specialist } className="red-border" />
                    </div>
                    <div className="mainCard">
                        <Avatar className="avtar-height avatar-border" alt="Remy Sharp" src={doc1} />
                        <h4 className="pt-1">{x?.doctorId?.doctorName}</h4>
                        <div className="time-div">
                            {/* <CalendarMonthIcon /> */}
                            {/* <div class="time-chips">
                                {x.dayAndtime.map((y) => {
                                    return(
                                        y.time.map((z)=>{
                                            return <Chip title="Timings" label={z} onClick={()=>getTime(z)} />;
                                        })
                                    )
                                })}
                            </div> */}
                            </div>
                        <SimpleDialog selecteddoctor={x}/>
                    </div>
                </Card>
            )

        })
    }
    </div>
  );
}

export default DoctorList;
