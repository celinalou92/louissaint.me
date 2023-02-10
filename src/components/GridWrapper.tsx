import { Stack, styled } from "@mui/material";

const StyledStack = styled(Stack)({
    backgroundColor: '#360259',
    color: "white",
    height: "100vh"
  });

  
const styleProps = {
    flexDirection: "row",
    
}

const GridWrapper = ({children, styleProps}) => {

    return (
        <>
            <StyledStack direction={"row"} sx={styleProps}>
                {children}
            </StyledStack>
        </>
    )
};


export default GridWrapper;