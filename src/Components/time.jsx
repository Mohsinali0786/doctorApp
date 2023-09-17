import React, { useEffect } from 'react'
import {useState} from 'react';


let time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {
 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)
 const [data,setData]=useState(null)
 const [filterTime,setfilterTime]=useState()
let allAppointments=[];
 const displayInfo=(e)=> {
  let obj={
    date:props.date.toDateString(),
    time:e.target.innerText
  }   
  setData(obj)

}
  useEffect(()=>{
    if(data){
      allAppointments=getDatafromLS()
      if(!allAppointments){
        allAppointments=[]
      }
      allAppointments.push(data)
     localStorage.setItem("bookedAppointment", JSON.stringify(allAppointments));
    }
},[data])
useEffect(()=>{
  if(props.reqData){
    const reqTime = props.reqData.time
    console.log('reqTime',reqTime)
    time=time.filter((x)=>x != reqTime)
    console.log('Time=========>',time)
    setfilterTime(time)
  }

},[props.reqData])
useEffect(()=>{
  console.log(allAppointments)
},[filterTime])
const getDatafromLS=()=>{
     return JSON.parse(localStorage.getItem('bookedAppointment'))
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;