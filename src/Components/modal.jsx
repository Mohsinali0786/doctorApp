import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Chip, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Calender } from "./Calender";
import MessageDialog from "./messageModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_Selected_Date } from "../store/actions";
import { useState } from "react";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let timing = ['08:00','09:00','10:00','14:00','15:00']
function SimpleDialog(props) {
  const { onClose, open, selectedValue, selecteddoctor } = props;
  // const [timing, setTiming] = React.useState();
  // const [isClicked, setisClicked] = React.useState(false);
  const [bookedTime, setBookedTime] = React.useState(false);
  const [currentDoctor, setCurrentDoctor] = React.useState({});
  const [dataObj, setData] = React.useState({});

  const dispatch = useDispatch();
  const isClicked=useSelector((x)=>x.myReducer?.selectedDate)
  const data = useSelector((x) => x.myReducer);
    const [selectedDate, setSelectedDate] = useState(data?.selectedDate?.date);
  // useEffect(() => {
  //   setisClicked(data?.selectedDate?.isClicked);
  // }, [data]);
  const handleClose = () => {
    onClose(selectedValue);
  };
  useEffect(() => {
    let AllDoctors = data?.AllDoctors;
    let selectedDate = data?.selectedDate?.data;
    matchDate(AllDoctors, new Date(selectedDate));
  });

  const matchDate = (doctorsList, selectedDate) => {
    let day = selectedDate.getDay();
    day = days[day];
    if (doctorsList) {
      let findDoctor = doctorsList.find((x) => x._id == selecteddoctor._id);
      if (findDoctor) {
        setCurrentDoctor(findDoctor)
      }
      //  if(findDoctor && findDoctor.dayAndtime){
      //    findDoctor=findDoctor?.dayAndtime.find((x)=>x?.day == day)
      //    setTiming(findDoctor?.time)
      //  }
    }
  };
  const bookedTiming = (e) => {
    let obj = {
      // date: selectedDate?.toDateString(),
      date: selectedDate,
      time: e.target.innerText,
    };
    setBookedTime(true);
    setData({dateObj:obj,doctorObj:currentDoctor,loginData:data?.loginData})
    dispatch(set_Selected_Date({ bookedTime: true }));
  };
  return (
    <Dialog open={open} fullWidth={true} disableBackdropClick>
      <CloseIcon onClick={handleClose} />
      <DialogTitle>Detail</DialogTitle>
      <div className="txt-center"></div>
      <div className="p-4 d-flex gap-3">
        <Avatar
          className="avtar-height"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <div>
          <h4 className="pt-1">
            {currentDoctor?.userName}{" "}
            <span>({currentDoctor?.specialist})</span>
          </h4>
          <Calender />
          <div className="">
            {/* <div class="d-flex gap-3 mb-2">
              {data?.AllDoctors?.dayAndtime?.map((y) => {
                return (
                  <>
                  </>
                );
              })}
            </div> */}
            <div className="timingsDiv">
              {selecteddoctor?.dateAndTime && isClicked
                ? selecteddoctor?.dateAndTime.map((z) => {
                    return (
                      <>
                        <Chip
                          title="Timings"
                          className="timeChipStyling"
                          label={z}
                          onClick={(e) => bookedTiming(e)}
                        />
                      </>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        {data?.selectedDate?.bookedTime ? (
          <MessageDialog
            setOpen={true}
            onClose={handleClose}
            data={dataObj}
          />
        ) : null}
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="red-border view-btn"
      >
        View Detail
      </Button>
      
      <SimpleDialog
        open={open}
        onClose={handleClose}
        selecteddoctor={props.selecteddoctor}
      />
    </div>
  );
}
