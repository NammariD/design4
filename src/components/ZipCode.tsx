import * as React from "react";
import Input from "@mui/joy/Input";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { InfoOutlined } from "@mui/icons-material";

export default function ZipCode() {
  return (
    <FormControl>
      <Input
      variant="outlined"
      color="neutral"
      sx={{top:345, left:420, width:325, backgroundColor: "#0B0D0E", "--Input-focusedHighlight": "gray" }}
      placeholder="Zip Code"
    />
    
    </FormControl>
  );
}
