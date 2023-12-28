import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import SignupForm from "./regForm";
import { POST } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { set_RegistrationData  ,set_LoginData} from "../../store/actions";
import {MatchDate} from '../../Methods/generalMethods'
import { useEffect } from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AuthDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title,setTitle]=React.useState()
  const [authType,setAuthType]=React.useState()
const data=useSelector((x)=>x?.myReducer)
  let AllDoctors = data?.AllDoctors;
const dispatch=useDispatch()
  //   const dispatch = useDispatch();
  const handleClickOpen = (val) => {
    setOpen(true);
  };
  const handleClose = (yes) => {
    setOpen(false);
  };
  useEffect(() => {
    // alert('Reg Modal')
    let AllDoctors = data?.AllDoctors;
    let selectedDate = data?.selectedDate?.data;
    MatchDate(AllDoctors, new Date(selectedDate));
  });
  React.useEffect(() => {
    // setOpen(true);
  }, [props.setOpen]);
const signUp=(title)=>{
  dispatch(set_RegistrationData(null));
   handleClickOpen()
  setTitle(title)
}
const signIn=(title)=>{
  handleClickOpen()
  setTitle(title)
}
const saveUser=(e)=>{
  console.log(e,'e in reg')
  console.log(data?.registrationData)
  axios.post(`http://localhost:4000${POST?.REGISTRATION}`,data?.registrationData)
    .then((res) => {
        console.log(res.data, "=res=")
    }).catch((err) => {
        console.log('Error====>', err)
    })
    setTitle(null)
    dispatch(set_RegistrationData({registrationData:null}))
  }
const loginUser=()=>{
  console.log(data?.registrationData,'=======>')
  axios.post(`http://localhost:4000${POST?.LOGIN}`,data?.registrationData)
    .then((res) => {
        // console.log(res.data.data, "=res=")
        dispatch(set_LoginData(res?.data?.data))
        localStorage.setItem("loggedInKey", JSON.stringify({isLoggedIn:true}));
    }).catch((err) => {
        console.log('Error====>', err)
    })
    setTitle(null)

}
  return (
    <div className="w-30">
      <Button variant="outlined" type="submit" onClick={()=>signUp('Register')}>
        Sign Up
      </Button>
      <Button variant="outlined" onClick={()=>signIn('Log In')}>
        Sign In
      </Button>
      <BootstrapDialog
      
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className=""
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
           {props.Message}
          
        </DialogTitle> */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <SignupForm title={title} onSubmit={title == 'Register' ? saveUser : loginUser}/>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              title == 'Register' ? saveUser() : loginUser()
              handleClose(true);
            }}
          >
            {title}
          </Button>
          {/* <Button
            autoFocus
            onClick={() => {
              handleClose(false);
            }}
          >
            No
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
