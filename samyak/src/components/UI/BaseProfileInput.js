import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const BaseProfileInput = (props) => {

  const [myValue, setMyValue] = useState(props.value);
  const setInput = (eve) => {
    setMyValue(eve.target.value);
    props.dataToUpdate[props.name] = eve.target.value;
    console.log(eve.target.value);
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch", height: "0.3ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={setInput} id="outlined-basic" label={props.name} value={myValue} InputLabelProps={{ shrink: props.value ? true : false }}   variant="outlined" />
    </Box>
  );
};

export default BaseProfileInput;
