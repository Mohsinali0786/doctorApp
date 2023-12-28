import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import {
  InputLabel,
  Input,
  FormControl,
  DialogTitle,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import CustomTextField from "../textField";
import { typeEnum } from "../../utils/enums";
import { useSelector, useDispatch } from "react-redux";
import { set_RegistrationData } from "../../store/actions";
export default function SignupForm({ title, onSubmit }) {
  const [type, setType] = React.useState("");
  const dispatch = useDispatch();
  let  registrationData=useSelector((x)=>x?.myReducer?.registrationData)
  React.useEffect(() => {
    const typeIndex = typeEnum.findIndex((x) => x.value == "patient");
    setType(typeEnum[typeIndex].value);
    dispatch(set_RegistrationData({...registrationData,type:typeEnum[typeIndex].value}))

  }, []);

  const setTypes = (e) => {
    setType(e.target.val);
    // dispatch(set_RegistrationData({...registrationData,[e.target.name]:e.target.val}))
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <div className="row">
          {title != "Log In" ? (
            <div className="col-md-12 mt-2">
              <CustomTextField
                isFullWidth={true}
                inputType="select"
                setType={setType}
                type={type}
                fieldName="type"
              />
              {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                // className='w-100'
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={type}
                defaultValue={type}
                onChange={(e) => {setTypes(e)}}
                label="Type"
              >
                {typeEnum.map((x) => {
                  return <MenuItem value={x.value}>{x.name}</MenuItem>;
                })}
              </Select>
            </FormControl> */}
            </div>
          ) : null}
          {title != "Log In" ? (
          <div className="col-md-6">
              <CustomTextField
                label="User Name"
                fieldName="userName"
                isFullWidth={true}
              />
          </div>
            ) : null}
          <div className="col-md-6">
            <CustomTextField
              label="Email"
              fieldName="email"
              isFullWidth={true}
            />
          </div>
          <div className="col-md-6">
            <CustomTextField
              label="Password"
              fieldName="password"
              isFullWidth={true}
            />
          </div>
          {type == "doctor" ? (
            <>
              <div className="col-md-6">
                <CustomTextField
                  label="Speacialist"
                  fieldName="specialist"
                  isFullWidth={true}
                />
              </div>
              <div className="col-md-6">
                <CustomTextField
                  label="Education"
                  fieldName="education"
                  isFullWidth={true}
                />
              </div>
              <div className="col-md-6">
                <CustomTextField
                  label="Contact No"
                  fieldName="contactNo"
                  isFullWidth={true}
                />
              </div>
              <div className="col-md-12">
                <CustomTextField inputType="multiSelect" isFullWidth={true} />
              </div>
            </>
          ) : null}
        </div>
      </form>
    </Box>
  );
}
