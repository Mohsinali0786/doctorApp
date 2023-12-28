import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useSelector,useDispatch } from 'react-redux';
import {set_Selected_Date} from '../store/actions/index'
import {POST} from '../utils/api'
import axios from 'axios'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function MessageDialog(props) {
  const [open, setOpen] = React.useState(false);
const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = (yes) => {
    setOpen(false);
    dispatch(set_Selected_Date({isClicked:false , isClicked: false}))
    if(yes){
        bookedAppointment(props.data)
        props.onClose()
    }
    dispatch(set_Selected_Date({bookedTime:false}))
  };
  React.useEffect(()=>{
    setOpen(true);

  },[props.setOpen])

const bookedAppointment=(obj)=>{
  let body={
    date:obj?.dateObj,
    doctorId:obj?.doctorObj?._id,
    loginUserId:obj?.loginData?._id
    // userId
  }
    // console.log(body)
    axios.post(`http://localhost:4000${POST?.BOOKEDAPPOINTMENT}`,body)
    .then((res) => {
        console.log(res.data.AllDoctors, "=res=")
    }).catch((err) => {
        console.log('Error====>', err)
    })
}
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Warning
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
              Are you sure you want to booke your day?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{handleClose(true)}}>
            Yes
          </Button>
          <Button autoFocus onClick={()=>{handleClose(false)}}>
            No
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
