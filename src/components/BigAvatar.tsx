import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BigAvatarIcons(){
    return(

        <Box>
            <Avatar sx = {{position:"absolute", left:35,top:175, backgroundColor:"#A85821","--Avatar-size": "100px" }}/>
        </Box>

    );
}