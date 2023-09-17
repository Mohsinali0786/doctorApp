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
// import { useSelector, useDispatch } from "react-redux";
// import { set_Selected_Date } from "../store/actions/index";
// import { POST } from "../utils/api";
// import axios from "axios";
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
//   const dispatch = useDispatch();
  const handleClickOpen = (val) => {
    setOpen(true);
  };
  const handleClose = (yes) => {
    setOpen(false);
  };
  React.useEffect(() => {
    setOpen(true);
  }, [props.setOpen]);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      {/* <Button variant="outlined" onClick={()=>handleClickOpen('register')}>Register</Button>
      <Button variant="outlined" onClick={()=>handleClickOpen('login')}>Login</Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.Message}
        </DialogTitle>
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
            <SignupForm/>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose(true);
            }}
          >
            Yes
          </Button>
          <Button
            autoFocus
            onClick={() => {
              handleClose(false);
            }}
          >
            No
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
