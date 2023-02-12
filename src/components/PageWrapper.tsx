import { styled } from "@mui/material";


// #450073
// #260040

const PageWrapper = ({children}) => {

    const StyledDiv = styled("div")({
        backgroundColor: "#260040",
        color: "white",
        height: "100%",
        padding: "40px"
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