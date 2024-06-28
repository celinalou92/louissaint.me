import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import React, { ReactNode } from "react";

export default function StyledCard({
  contentHeader, 
  contentText,
  cardMedia,
  buttons,
}: {
  contentHeader: string,
  contentText: string[],
  cardMedia: string,
  buttons: ReactNode[],
}) {
  return (
    <Card
      elevation={1}
      sx={{
        width: "422px",
        border: "1px solid #FF7972",
        borderRadius: "20px",
        height: "550px",
      }}
    >
      <CardMedia component="img" height="50%" image={cardMedia} />
      <CardContent
        sx={{
          padding: "7%",
        }}
      >
        <Stack height="190px"
        overflow={"scroll"}>
          <Typography gutterBottom variant="h6">
            {contentHeader}
          </Typography>
          <Typography gutterBottom>{contentText[0]}</Typography>
          <Typography>{contentText[1]}</Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-evenly"}
        >
          {buttons}
        </Stack>
      </CardContent>
    </Card>
  );
}
