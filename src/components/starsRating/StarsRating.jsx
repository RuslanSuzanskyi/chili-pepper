import { Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const StarsRating = ({ rating }) => {
  const starsAmount = [1, 2, 3, 4, 5];

  return (
    <Box display="flex">
      {starsAmount.map((star) => (
        <Box key={star} sx={{ color: '#fbc02d', mr: '2px' }}>
          {star <= rating ? <Star /> : <StarBorder />}
        </Box>
      ))}
    </Box>
  );
};

export default StarsRating;
