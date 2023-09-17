import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { InputLabel, Input, FormControl } from "@mui/material";
import CustomTextField from "../textField";
export default function SignupForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <CustomTextField label="User Name" fieldName="userName" />
        <CustomTextField label="Email" fieldName="email" />
        <CustomTextField label="Passowrd" fieldName="password" />
      </FormControl>
    </Box>
  );
}
