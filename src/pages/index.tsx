import { Button, Stack, Typography } from "@mui/material";
import chibi1 from "../../assests/images/chibi-celina1.png";
import chibi2 from "../../assests/images/chibi-celina2.png"
import Image from 'next/image';
import { useState } from "react";
import { styled } from '@mui/system';


const Home = () => {
  const [displayPath, setDisplayPath] = useState("")


  const PinkButton = styled(Button)({
    backgroundColor: "#7300BF",
    textTransform: "none",
    borderRadius: "20px",
    width: "100px",
    ":hover": {
      backgroundColor: "#7A13BF",
    }
  });

  const YellowButton = styled(Button)({
    backgroundColor: "#637300",
    textTransform: "none",
    borderRadius: "20px",
    width: "100px",
    ":hover": {
      backgroundColor: "#7D8A29",
    }
  });

  
  
  const FadeButton = ({path, text, style} : {path: string, text: string, style?: any}) => {
    let bgColor = path === "dev" ? "#7300BF" : "#637300"
    let hoverColor = path === "dev" ? "#7A13BF" : "#7D8A29"
    console.log(bgColor)
    const FadeButton = styled(Button)({
      backgroundColor: bgColor,
      textTransform: "none",
      borderRadius: "25px",
      width: "200px",
      height: "45px",
      ":hover": {
        backgroundColor: hoverColor
      }
    });

    return (
      <>
        <FadeButton
        variant="contained"
        sx={style}
        >
          {text}
        </FadeButton>
      </>
    )
  }
  

  return (
    <>
    <Stack flexDirection={"row"}>
      <Stack flexDirection={"column"} width="50vw" justifyContent={"center"} >
          <Stack marginTop={"60px"}>
            <Typography variant="h2" align="left">
            Hi, I'm Celina
            </Typography>
          </Stack>
          <br/>
          <Stack>
            <Typography variant="body1" align="left">
            About Me:
            </Typography>
          </Stack>
          <br/>
          <Stack>
            <Typography variant="body2" align="left">
            My name is Celina Louissaint I am a Long Beach California based developer and I build fully responsive websites for small businesses, projects and individuals. I have a wide skill set that includes graphic design, video editing, and coding. I can build your site, design your logo and create graphics for your business from beginning to end.
            </Typography>
          </Stack>
          <br/>
          <Stack>
            <Typography variant="h6" align="center">
            Which Celina do you want to meet?
            </Typography>
          </Stack>
          <br/>
          <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"space-between"}>
            <PinkButton onClick={() => {setDisplayPath("dev")}} variant="contained" sx={{margin:"20px"}}>Developer</PinkButton>
            <YellowButton onClick={() => {setDisplayPath("design")}} variant="contained" sx={{margin:"20px"}}>Designer</YellowButton>
          </Stack>
          <br/>
          <Stack>
            <FadeButton text={"Let's Go!"} path={displayPath}>Lets Go</FadeButton>
          </Stack>
      </Stack>
      <Stack width="50vw" flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
          <Image height={"400"} alt={"cartoon image celina"} src={displayPath==="dev"? chibi1 : chibi2}/>
      </Stack>
    </Stack>
    </>
  )
}

export default Home;