import {Box, Skeleton, Stack, Typography} from "@mui/material";
import {amber} from "@mui/material/colors";
import React from "react";

export interface PlaceCardProps extends PlaceCardTextProps, PlaceCardIconProps, PlaceCardImageProps {
  onClick?: ()=>void,
}

export default function PlaceCard({placeName, address, rating, visitCount, distance, isHotPlaceCard, onClick}: PlaceCardProps) {
  return (
    <div onClick={onClick}>
      <PlaceCardImage isHotPlaceCard={isHotPlaceCard}/>
      <Stack direction="row" mt={1}>
        <PlaceCardText placeName={placeName} address={address}/>
        <Box flexGrow={1}/>
        <PlaceCardIcon rating={rating} visitCount={visitCount} distance={distance}/>
      </Stack>
    </div>
  );
}

interface PlaceCardImageProps {
  isHotPlaceCard?: boolean,
}

const PlaceCardImage = ({isHotPlaceCard}: PlaceCardImageProps) => {
  return (
    <Skeleton variant="rectangular" width={isHotPlaceCard ? 350 : '100%'} height={200} sx={{mt: 1}}/>
  );
};

interface PlaceCardTextProps {
  placeName: string,
  address: string,
}

const PlaceCardText = ({placeName, address}: PlaceCardTextProps) => {
  return (
    <Stack direction="column">
      <Typography sx={{fontWeight: 600}} color="text.primary">{placeName}</Typography>
      <Typography color="text.secondary">{address}</Typography>
    </Stack>
  );
};

interface PlaceCardIconProps {
  rating: number,
  visitCount: number,
  distance: string,
}

const PlaceCardIcon = ({rating, visitCount, distance}: PlaceCardIconProps) => {
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