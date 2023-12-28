import { Chip } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { set_Selected_Date } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { set_RegistrationData } from "../store/actions";

let time = ["08:00", "09:00", "10:00", "14:00", "15:00"];

function Times(props) {
  const dispatch = useDispatch();
  const datSel=useSelector((x)=>x.myReducer?.selectedDate?.data)
  console.log('datSel',datSel)
  const [selectedDate, setSelectedDate] = useState(datSel);
  const [info, setInfo] = useState(false);
  const [reqData,setReqData]=useState({})
  const [data, setData] = useState(null);
  const [filterTime, setfilterTime] = useState();
  let allAppointments = [];
  const displayInfo = (e) => {
    let obj = {
      date: selectedDate?.toDateString(),
      time: e.target.innerText,
    };
    setData(obj);
  };
  useEffect(()=>{
    dispatch(set_RegistrationData({ selectedDate:data }));

  },[data])
  // useEffect(() => {
  //   console.log('I am Data')
  //   if (data) {
  //     allAppointments = getDatafromLS();
  //     if (!allAppointments) {
  //       allAppointments = [];
  //     }
  //     console.log(getDatafromLS(),'getDatafromLS()')
  //     console.log(data,'data')
  //     const reqData= allAppointments.find((x)=>x?.date == data?.date)
  //     setReqData(reqData)
  //     allAppointments.push(data);
  //     dispatch(set_Selected_Date({ data: allAppointments, isClicked: true }));
  //      localStorage.setItem("bookedAppointment", JSON.stringify(allAppointments));
  //   }
  // }, [data]);
  // useEffect(() => {
  //   console.log('I am Req Data')

  //   if (reqData) {
  //     const reqTime = reqData.time;
  //     console.log("reqTime", reqTime);
  //     time = time.filter((x) => x != reqTime);
  //     setfilterTime(time);
  //   }
  // }, [reqData]);

  // const getDatafromLS = () => {
  //   return JSON.parse(localStorage.getItem("bookedAppointment"));
  // };

  return (
    <div className="d-flex justify-content-between flex-column gap-1">
      {time.map((times) => {
        return (
          <div>
            <Chip
              onClick={(e) => displayInfo(e)}
              title="Timings"
              className="timeChipStyling"
              label={times}
            />
          </div>
        );
      })}
      <div>
        {/* {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null} */}
      </div>
    </div>
  );
}

export default Times;
