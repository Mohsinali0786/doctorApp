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
function DoctorList(props) {
  const [allDoctors,setAllDoctors]=useState([])
  const [editDoctors,setEditDoctor]=useState(false)
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
    getAllDOctors()
    // console.log(GET?.GETAPPOINTMENT,'GET?.GETDOCTORS')
    // axios.get(`http://localhost:4000${GET?.GETAPPOINTMENT}`)
    // .then((res) => {
    //     console.log(res.data.AllDoctors, "=res=")
    //     setAllDoctors(res.data.AllDoctors)
    //     dispatch(get_All_Appointment(res.data.AllDoctors))
    // }).catch((err) => {
    // })
},[])
const getAllDOctors=()=>{
    axios.get(`http://localhost:4000${GET?.GETALLUSERS}`,  {params: {
        type:'doctor'
      }})
    .then((res) => {
        if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
        setAllDoctors(res.data.AllUser)
        dispatch(get_All_Appointment(res.data.AllUser))
        }
        console.log(res.data.AllUser, "=res=")
    }).catch((err) => {
        // setAllDoctors([{}])
        console.log('Error====>', err)
    })
}
console.log('Alllllllllllllllllll',allDoctors)

  return (
    <div>
    <h3 className="doctorListHeading">
        Doctor List
    </h3>
      <div className="main-card-div">
    {
        allDoctors?.map((x)=>{
            return(
                <Card sx={{maxWidth:'220px',minWidth:'220px',padding:'5px' }} className="p-2 card-border">
                    <div className="txt-center">
                        <Chip label={x?.specialist } className="red-border" />
                    </div>
                    <div className="mainCard">
                        <Avatar className="avtar-height avatar-border" alt="Remy Sharp" src={doc1} />
                        <h4 className="pt-1">{x?.userName}</h4>
                        <div className="time-div">
                            </div>
                        <SimpleDialog selecteddoctor={x}/>
                    </div>
                </Card>
            )

        })
    }
    </div>
    </div>
  );
}

export default DoctorList;
