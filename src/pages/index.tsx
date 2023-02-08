import { Button, Stack, Typography } from "@mui/material";
import chibi1 from "../../assests/images/chibi-celina1.png";
import chibi2 from "../../assests/images/chibi-celina2.png"
import Image from 'next/image';
import { useState } from "react";
import { styled } from '@mui/system';


const Home = () => {
  const [displayPath, setDisplayPath] = useState("")

  console.log(displayPath)

  const CTAButton = styled(Button)({
    color: "#360259",
    backgroundColor: "#A7F205",
    textTransform: "none",
    borderRadius: "20px"
  });

  return (
    <>
    <Stack flexDirection={"row"}>
      <Stack flexDirection={"column"} width="50vw" justifyContent={"center"} alignItems={"center"}>
          <Stack>
            <Typography variant="h2" align="center">
            Which Celina do you want to meet?
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"space-between"}>
            <CTAButton onClick={() => {setDisplayPath("dev")}} variant="contained" sx={{margin:"20px"}}>Developer</CTAButton>
            <CTAButton onClick={() => {setDisplayPath("design")}} variant="contained" sx={{margin:"20px"}}>Designer</CTAButton>
          </Stack>
      </Stack>
      <Stack width="50vw">
            <Image height={"400"} alt={"cartoon image celina"} src={displayPath==="dev"? chibi1 : chibi2}/>
            <Stack></Stack>
      </Stack>
    </Stack>
    </>
  )
}

export default Home;