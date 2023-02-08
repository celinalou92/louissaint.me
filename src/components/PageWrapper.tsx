import { styled } from "@mui/material";



const PageWrapper = ({children}) => {

    const StyledDiv = styled("div")({
        backgroundColor: '#360259',
        color: "white",
        height: "100vh"
      });

    return (
        <>
            <StyledDiv>
                {children}
            </StyledDiv>
        </>
    )
};


export default PageWrapper;