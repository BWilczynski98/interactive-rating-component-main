import React, { useState } from "react";
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
  padding: "0.625rem",
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: "Overpass, sans-serif;",
  color: theme.palette.primary.white,
  width: "90%",
  borderRadius: "1.563rem",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
  },
}));

export const StarAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.mediumDarkBlue,
}));

export const RatingGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "25px",
  width: "100%",
}));

const RateCard = ({setRating, setSubmitHandle}) => {
  const [active, setActive] = useState();
  const [hoverElement, setHoverElement] = useState();
  const ratings = [1, 2, 3, 4, 5];

  const RatingButton = styled(Button)(({ theme, index }) => ({
    backgroundColor:
      index === active - 1 || index === hoverElement - 1
        ? theme.palette.primary.mediumGrey
        : index === active || index === hoverElement
        ? theme.palette.primary.main
        : theme.palette.primary.mediumDarkBlue,

    minWidth: "45px",
    lineHeight: "30px",
    borderRadius: "100%",
    color:
      index === active - 1 || index === active || index === hoverElement - 1 || index === hoverElement
        ? theme.palette.primary.white
        : theme.palette.primary.mediumGrey,
    '&:hover':{
      color: theme.palette.primary.white,
      backgroundColor: theme.palette.primary.main,
    }

  }));

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "0.625rem",
            }}
          >
            <Typography variant="h5">How did we do?</Typography>
            <Typography variant="body1">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <RatingGroup>
            {ratings.map((rating, index) => (
              <RatingButton
                key={rating}
                index={index}
                onClick={() => 
                  {
                    setActive(index);
                    setRating(index + 1)
                  }
                }
                onMouseOver={() => setHoverElement(index)}
                onMouseOut={() => setHoverElement('')}
              >
                {rating}
              </RatingButton>
            ))}
          </RatingGroup>
        </CardActions>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SubmitButton variant="contained" onClick={() => setSubmitHandle(true)}>Submit</SubmitButton>
        </Box>
      </StyledRateCard>
      ;
    </>
  );
};

export default RateCard;
