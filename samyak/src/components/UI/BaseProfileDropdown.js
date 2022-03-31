import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BaseProfileDropdown = (props) => {
  const [myValue, setMyValue] = React.useState(props.value);

  const handleChange = (event) => {
    setMyValue(event.target.value);
    if(props.name === "College" && event.target.value === "Others"){
      props.toggleCollegeType();
    }
    props.dataToUpdate[props.name] = event.target.value;
  };

  const finalData = props.data;

  return (
    <Box sx={{ minWidth: 210 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={myValue}
          label="Age"
          onChange={handleChange}
        >
        {finalData.map((data) => (
            <MenuItem value={data}>{data}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BaseProfileDropdown;
