import {Box, Container} from "@mui/material";
import ReviewInput from "./ReviewInput";

export default function WriteReview() {
  return (
    <Container maxWidth="md">
      <Box my={7} p={6} sx={{border: 1, borderRadius: 1, borderColor: 'secondary.dark'}}>
        <ReviewInput/>
      </Box>
    </Container>
  );
}