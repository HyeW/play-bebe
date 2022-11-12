import {Box, Skeleton, Stack, Typography} from "@mui/material";
import {amber} from "@mui/material/colors";
import React from "react";

export interface HotPlaceCardProps extends HotPlaceCardTextProps, HotPlaceCardIconProps, HotPlaceCardImageProps {}

export default function HotPlaceCard({placeName, address, rating, visitCount, distance, isHotPlaceCard}: HotPlaceCardProps) {
  return (
    <>
      <HotPlaceCardImage isHotPlaceCard={isHotPlaceCard}/>
      <Stack direction="row" mt={1}>
        <HotPlaceCardText placeName={placeName} address={address}/>
        <Box flexGrow={1}/>
        <HotPlaceCardIcon rating={rating} visitCount={visitCount} distance={distance}/>
      </Stack>
    </>
  );
}

interface HotPlaceCardImageProps {
  isHotPlaceCard?: boolean,
}

const HotPlaceCardImage = ({isHotPlaceCard}: HotPlaceCardImageProps) => {
  return (
    <Skeleton variant="rectangular" width={isHotPlaceCard ? 350 : '100%'} height={200} sx={{mt: 1}}/>
  );
};

interface HotPlaceCardTextProps {
  placeName: string,
  address: string,
}

const HotPlaceCardText = ({placeName, address}: HotPlaceCardTextProps) => {
  return (
    <Stack direction="column">
      <Typography sx={{fontWeight: 600}} color="text.primary">{placeName}</Typography>
      <Typography color="text.secondary">{address}</Typography>
    </Stack>
  );
};

interface HotPlaceCardIconProps {
  rating: number,
  visitCount: number,
  distance: string,
}

const HotPlaceCardIcon = ({rating, visitCount, distance}: HotPlaceCardIconProps) => {
  return (
    <Stack direction="column">
      <Stack direction="row" spacing={2}>
        <Typography color={amber[500]}>{'⭐ '}{rating}</Typography>
        <Typography color={amber[800]}>{'👍🏻 '}{visitCount}</Typography>
      </Stack>
      <Typography textAlign="right" color="primary">{distance}</Typography>
    </Stack>
  );
};