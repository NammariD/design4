import * as React from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import AvatarIcons from "./components/Avatar";
import FreeButton from "./components/FreeButton";
import List from "./components/List";
import BigAvatarIcons from "./components/BigAvatar";
import ChangeAvatarButton from "./components/ChangeAvatar";
import Email from "./components/Email";
import Username from "./components/Username";
import City from "./components/City";
import ZipCode from "./components/ZipCode";



export default function ProfileSettings() {
  return (
    <Box sx={{ backgroundColor:"#121212", height:"100vh", margin:-1, padding:0}}>
      <Typography>
        <a href="URL" style={{ color:"white", position:"absolute", left:35, top:5 }}>Back to Home</a>
      </Typography>
      <AvatarIcons />
      <FreeButton />
      <Typography level="h1" sx = {{color:"white", position:"absolute", top:70, left:35}}>Profile & Settings</Typography>
      <List />
      <BigAvatarIcons />
      <Typography level = "h4" sx = {{color:"white", position:"absolute", top:180, left:150}}>
        Nammari Drayton
      </Typography>
      <ChangeAvatarButton />
      <Typography level = "h4" sx = {{color:"white", position:"absolute", top:300, left:45}}>
        Contact Info
      </Typography>
      <Email />
      <Username />
      <City />
      <ZipCode />
     

    </Box>
  );
}
