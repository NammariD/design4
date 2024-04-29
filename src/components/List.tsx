import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";


export default function NavBarList() {
  return (
    <Box sx = {{position:"absolute", top:120, left:35,}}>
      <List orientation="horizontal">
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>
            Account
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>
            Settings
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
