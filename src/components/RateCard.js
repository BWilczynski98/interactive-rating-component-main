import React from "react";
import { styled } from "@mui/material";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  Typography,
  Box,
} from "@mui/material";
import IconStar from "../assets/IconStar";

export const StyledRateCard = styled(Card)(({ theme }) => ({
  width: "23rem",
  height: "24rem",
  borderRadius: "1.5rem",
  background: theme.palette.primary.darkBlue,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: '0.625rem'
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: "Overpass, sans-serif;",
  color: theme.palette.primary.white,
  width: "90%",
  borderRadius: '1.563rem'
}));

export const RatingButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.mediumDarkBlue,
  minWidth: "45px",
  lineHeight: "30px",
  borderRadius: "100%",
}));

export const StarAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.mediumDarkBlue,
}));

export const RatingGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "25px",
  width: '100%'
}));

const RateCard = () => {
  return (
    <>
      <StyledRateCard>
        <CardHeader
          avatar={
            <StarAvatar>
              <IconStar />
            </StarAvatar>
          }
        />
        <CardContent>
          <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '0.625rem'}}>
            <Typography variant="h5">How did we do?</Typography>
            <Typography variant="body1">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <RatingGroup>
            <RatingButton>1</RatingButton>
            <RatingButton>2</RatingButton>
            <RatingButton>3</RatingButton>
            <RatingButton>4</RatingButton>
            <RatingButton>5</RatingButton>
          </RatingGroup>
        </CardActions>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <SubmitButton variant="contained">Submit</SubmitButton>
        </Box>
      </StyledRateCard>
      ;
    </>
  );
};

export default RateCard;
