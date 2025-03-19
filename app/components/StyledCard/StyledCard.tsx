import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography,
  Box,
  Divider,
  CardActions
} from "@mui/material";
import React, { ReactNode } from "react";

interface StyledCardProps {
  contentHeader: string;
  contentText: string[];
  cardMedia: string;
  buttons: ReactNode[];
  tags?: string[];
}

export default function StyledCard({
  contentHeader,
  contentText,
  cardMedia,
  buttons,
  tags = []
}: StyledCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        width: { xs: "100%", sm: "85%" },
        maxWidth: "800px",
        border: "1px solid #ff79725c",
        borderRadius: "15px",
        transition: "transform 0.3s, box-shadow 0.3s",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)"
        }
      }}
    >
      <CardMedia 
        component="img" 
        image={cardMedia}
        alt={contentHeader}
        sx={{
          height: { xs: 200, sm: 250, md: 300 },
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
      <CardContent
        sx={{
          padding: { xs: "16px 12px", sm: "24px 16px" },
          borderTop: "1px solid #ff79725c",
        }}
      >
        <Box 
          sx={{ 
            pb: 2,
            mb: 2,
            borderBottom: "1px solid #ff79725c" 
          }}
        >
          <Typography 
            textTransform="uppercase"
            variant="h6" 
            fontWeight="medium"
            align="center"
          >
            {contentHeader}
          </Typography>
          {tags.length > 0 && (
            <Box 
              sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: 1, 
                justifyContent: "center",
                mt: 1.5
              }}
            >
              {tags.map((tag, index) => (
                <Box 
                  key={index}
                  sx={{
                    bgcolor: "rgba(255, 121, 114, 0.1)",
                    color: "#ff7972",
                    fontSize: "0.75rem",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "12px",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box sx={{ px: { xs: "3%", sm: "5%" }, mb: 3 }}>
          <Typography 
            variant="body1" 
            gutterBottom
            sx={{ lineHeight: 1.6 }}
          >
            {contentText[0]}
          </Typography>
          
          {contentText.length > 1 && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mt: 1.5 }}
            >
              {contentText[1]}
            </Typography>
          )}
        </Box>
        <Divider sx={{ mb: 2, mx: 2 }} />
        <CardActions 
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            px: 2,
            py: 1
          }}
        >
          {buttons.map((button, index) => (
            <Box key={index} 
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"80%"}
            >
              {button}
            </Box>
          ))}
        </CardActions>
      </CardContent>
    </Card>
  );
}