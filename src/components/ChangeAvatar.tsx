import * as React from 'react';
import Button from '@mui/joy/Button';

export default function ChangeAvatarButton() {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your desired functionality here
  };

  return (
    <Button variant ="outlined" onClick={handleClick} sx={{position:"absolute", top:225, width: 150, left:150, backgroundColor: '#121212', '&:hover': { backgroundColor: '#FF4081' } }}>Change Avatar</Button>
  );
}
