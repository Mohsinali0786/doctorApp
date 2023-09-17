import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {  set_Selected_Date } from "../store/actions/index";
export function Calender() {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  let myDates=[];
  let daydate=new Date()
  let month=daydate.getMonth()
  let year=daydate.getFullYear()

  const handleChange = (value) => {
    setDate(value);
    dispatch(set_Selected_Date({ data: value, value, isClicked: true }));
  };
  const filterDate = () => {
    var now = new Date();
    var date = new Date();
    now = now.getDate();
    for (var d = now; d <= now + 6; d++) {
      let myDate = new Date(date.setDate(d));
      myDates.push(myDate.getDate());
    }
   };
   function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()-1;
}
  filterDate()
  return (
    <>
      <div className="calendar-container">
        <Calendar
          onChange={handleChange}
          value={date}
          minDate={new Date()}
          maxDate={new Date(year,month,daysInMonth(month, year))}
          defaultView="month"
          minDetail="month"
          tileDisabled={({date , view}) =>!myDates.includes(date.getDate())}
        />
      </div> 
    </>
  );
}
