import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

import React, { ReactNode } from "react";

export default function StyledCard({
  contentHeader,
  contentText,
  cardMedia,
  buttons,
}: {
  contentHeader: string;
  contentText: string[];
  cardMedia: string;
  buttons: ReactNode[];
}) {
  return (
    <Card
      elevation={2}
      sx={{
        width: "70%",
        border: "1px solid #ff79725c",
        borderRadius: "15px",
        textAlign: "center"
      }}
    >
      <CardMedia component="img" height="50%" image={cardMedia} />

      <CardContent
        sx={{
          padding: "2% 0",
          borderTop: "1px solid #ff79725c" 
        }}
      >
        <Stack rowGap={3}>
          <Stack sx={{ borderBottom: "1px solid #ff79725c" }}>
            <Typography width={"100%"} gutterBottom variant="h5">
              {contentHeader}
            </Typography>
          </Stack>
          <Stack padding={"0 5%"}>
            <Typography gutterBottom>{contentText[0]}</Typography>
            <Typography variant="body2">{contentText[1]}</Typography>
          </Stack>
        </Stack>
        <Stack
          paddingY={4}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
        >
          {buttons}
        </Stack>
      </CardContent>
    </Card>
  );
}
