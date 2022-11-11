import {Box, Skeleton, Stack, Typography} from "@mui/material";
import {amber} from "@mui/material/colors";

export default function HotPlaceCard() {
  return (
    <>
      <HotPlaceCardImage/>
      <Stack direction="row" mt={1}>
        <HotPlaceCardText/>
        <Box flexGrow={1}/>
        <HotPlaceCardIcon/>
      </Stack>
    </>
  );
}

const HotPlaceCardImage = () => {
  return (
    <Skeleton variant="rectangular" width={350} height={200} sx={{mt: 1}}/>
  );
};

const HotPlaceCardText = () => {
  return (
    <Stack direction="column">
      <Typography sx={{fontWeight: 600}} color="text.primary">편백숲체험농장</Typography>
      <Typography color="text.secondary">대구시 동구</Typography>
    </Stack>
  );
};

const HotPlaceCardIcon = () => {
  return (
    <Stack direction="column">
      <Stack direction="row" spacing={2}>
        <Typography color={amber[500]}>⭐ 4.5</Typography>
        <Typography color={amber[800]}>👍🏻 25</Typography>
      </Stack>
      <Typography textAlign="right" color="primary">136km</Typography>
    </Stack>
  );
};