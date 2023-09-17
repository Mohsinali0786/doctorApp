import React, { useState } from 'react'
import { TextField,FormControl } from '@mui/material';
// import isEmail from 'validator/lib/isEmail';
export default function CustomTextField(props) {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState(false);

    const handleChange = event => {
        const val = event.target.value;                
             
        // if(isEmail(val)) {
        //    setIsValid(true);              
        // } else {
        //    setIsValid(false);              
        // }
             
        setValue(val);                
        props.handleChange(val, isValid);
     }
  return (
    <React.Fragment>
      <FormControl fullWidth={props.isFullWidth}>
        <TextField
          id={props.fieldName}
          label={props.label}
          name={props.fieldName}
          variant="outlined"
          size={"small"}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
    </React.Fragment>
  );
}
