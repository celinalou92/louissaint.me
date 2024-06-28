import {Card,CardMedia,CardContent,Typography} from "@mui/material";


interface StyledCardProps {
    contentHeader?: string;
    contentText?: string;
    cardMedia?: string;
}

export default function StyledCard({contentHeader, contentText, cardMedia}: StyledCardProps) {
    return (
        <Card elevation={0}>
            <CardMedia
                component="img"
                height="50%"
                image={cardMedia}
                alt="TODO"
            />
            <CardContent>
                <Typography gutterBottom align="center">
                   {contentHeader}
                </Typography>
                <Typography align="center">
                    {contentText}
                </Typography>
            </CardContent>
        </Card>
    );
};