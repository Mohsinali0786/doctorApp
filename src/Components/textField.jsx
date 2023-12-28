import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  OutlinedInput,
  Checkbox,
  Chip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { set_RegistrationData } from "../store/actions";
import { typeEnum } from "../utils/enums";
import { Calender } from "./Calender";
import Time from "./time"
import { UseSelector } from "react-redux/es/hooks/useSelector";
// import isEmail from 'validator/lib/isEmail';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const timimgs = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "3:00",
  "3:30",
  "4:00",
  "5:00",
];
let names = [
  {
    day: "Monday",
    time: timimgs,
    visible: true,
  },
  {
    day: "Tuesday",
    time: timimgs,
    visible: true,
  },
  {
    day: "Wednesday",
    time: timimgs,
    visible: true,
  },
  {
    day: "Thursday",
    time: timimgs,
    visible: true,
  },
  {
    day: "Friday",
    time: timimgs,
    visible: true,
  },
];
let namesDisplay=[]

const daysOnly = names.filter((x) => x.day);
export default function CustomTextField(props) {
  const isClicked=useSelector((x)=>x.myReducer?.selectedDate?.isClicked)
  const [myvalue, setMyValue] = useState({})
  const [daySelected, setDaySelected] = useState(false);
  const [personName, setPersonName] = React.useState([]);
  const data = useSelector((x) => x.myReducer);
  // const data=useSelector((x)=>x?.myReducer?.registrationData)

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    dispatch(
      set_RegistrationData({
        ...myvalue,
        dateAndTime: typeof value === "string" ? value.split(",") : value,
      })
      );
      setDaySelected(true)
  };
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const val = event.target.value;
    dispatch(set_RegistrationData({ ...myvalue, [event.target.name]: val }));
    if (!props.type || !props.setType) return;
    props.setType(event.target.value);
  };
    useEffect(() => {
      if(!personName || personName.length < 1) return 
     namesDisplay= names.filter((x)=>{
      return personName.find((y)=>x.day == y)  
     })
     setDaySelected(false)
  }, [daySelected]);
  useEffect(()=>{
    dispatch(set_RegistrationData({ ...myvalue , selectedDate:data?.selectedDate }));
  },[isClicked])
  return (
    <React.Fragment>
      <FormControl fullWidth={props.isFullWidth}>
        {props.inputType == "select" ? (
          <>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={props.type}
              name={props.fieldName}
              defaultValue={props.type}
              onChange={(e) => {
                handleChange(e);
              }}
              label="Type"
              disabled={data?.loginData?.userType != 'admin'}
            >
              {typeEnum.map((x) => {
                return <MenuItem value={x.value}>{x.name}</MenuItem>;
              })}
            </Select>
          </>
        ) : props.inputType == "multiSelect" ? (
          <>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-muFltiple-checkbox-label">Time</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange2}
              input={<OutlinedInput label="Time" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              name={props.fieldName}
            >
              {timimgs.map((name, i) => (
                <MenuItem key={i} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            {/* <table>
              {namesDisplay.map((x) => (
                <tr >
                  <th>{x.day}</th>
                  <td className="timeChip gap-1">
                    {x?.time?.map((y) => (
                      <Chip
                        title="Timings"
                        className="timeChipStyling"
                        label={y}
                        // onClick={() => bookedTiming()}s
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </table> */}
            <div class="d-flex justify-content-around">
            {/* <Calender/> */}
            {/* {
              isClicked ? 
              <Time/>
              :
              null
            } */}

            </div>
            </>
        ) : (
          <TextField
            id={props.fieldName}
            label={props.label}
            name={props.fieldName}
            variant="outlined"
            // value={myvalue[props.fieldName]}
            size={"small"}
            className="w-100"
            // value={value}
            onChange={(e) => handleChange(e)}
          />
        )}
      </FormControl>
    </React.Fragment>
  );
}
