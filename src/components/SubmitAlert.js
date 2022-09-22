import React from "react";
import {
  CardContent,
  Card,
  CardMedia,
  styled,
  Box,
  Typography,
} from "@mui/material";
import illustrationThankYou from "../assets/illustrationThankYou.svg";

export const StyledRateCard = styled(Card)(({ theme }) => ({
  width: "23rem",
  height: "24rem",
  borderRadius: "1.5rem",
  background: theme.palette.primary.darkBlue,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: 'center',
  padding: "0.625rem",
}));

export const SelectedBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.mediumDarkBlue,
  borderRadius: "1rem",
  padding: "0.5rem",
  textAlign: "center",
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem'

}))

const SubmitAlert = ({rating}) => {
  return (
    <div>
      <StyledRateCard>
        <CardMedia
          component="img"
          image={illustrationThankYou}
          sx={{
            width: "50%",
          }}
        />
        <CardContent>
          <Box sx={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
            <SelectedBox>
              <Typography variant="body2">You selected {rating} out of 5</Typography>
            </SelectedBox>
            <DescriptionBox>
              <Typography variant='h5'>Thank you!</Typography>
              <Typography vatiant='body1'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</Typography>
            </DescriptionBox>
          </Box>
        </CardContent>
      </StyledRateCard>
    </div>
  );
};

export default SubmitAlert;
