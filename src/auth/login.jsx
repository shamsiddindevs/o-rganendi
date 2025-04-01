import {Autocomplete, Button, TextField} from "@mui/material";
import React from "react";

const Login = () => {
  const options = ["The Godfather", "Pulp Fiction"];
  return (
    <div>
      <Autocomplete
        disablePortal
        options={options}
        sx={{width: 300}}
        renderInput={(params) => (
          <TextField 
           size="small"
            {...params}
            label="Movie"
          />
        )}
       
      />
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
