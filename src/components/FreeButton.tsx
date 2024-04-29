import * as React from "react";
import Button from "@mui/joy/Button";

export default function FreeButton(){
    return(
        <Button color = "neutral" sx = {{position:"absolute", color: '#FFBF2B', backgroundColor: '#FDEDE0', top:6, right:80}}  >Free</Button>
    );

}