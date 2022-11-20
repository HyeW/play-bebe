import {Box, Skeleton, Stack, Typography} from "@mui/material";
import {amber} from "@mui/material/colors";
import React from "react";

export interface PlaceCardProps extends PlaceCardTextProps, PlaceCardIconProps, PlaceCardImageProps {
  placeId?: number,
  onClick?: ()=>void,
}

export default function PlaceCard({name, simpleAddress, totalRating, wantToVisit, distanceString, isHotPlaceCard, onClick}: PlaceCardProps) {
  return (
    <div onClick={onClick}>
      <PlaceCardImage isHotPlaceCard={isHotPlaceCard}/>
      <Stack direction="row" mt={1}>
        <PlaceCardText name={name} simpleAddress={simpleAddress}/>
        <Box flexGrow={1}/>
        <PlaceCardIcon totalRating={totalRating} wantToVisit={wantToVisit} distanceString={distanceString}/>
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
  name: string,
  simpleAddress: string,
}

const PlaceCardText = ({name, simpleAddress}: PlaceCardTextProps) => {
  return (
    <Stack direction="column">
      <Typography sx={{fontWeight: 600}} color="text.primary">{name}</Typography>
      <Typography color="text.secondary">{simpleAddress}</Typography>
    </Stack>
  );
};

interface PlaceCardIconProps {
  totalRating: number,
  wantToVisit: number,
  distanceString: string,
}

const PlaceCardIcon = ({totalRating, wantToVisit, distanceString}: PlaceCardIconProps) => {
  return (
    <Stack direction="column">
      <Stack direction="row" spacing={2}>
        <Typography color={amber[500]}>{'⭐ '}{totalRating}</Typography>
        <Typography color={amber[800]}>{'👍🏻 '}{wantToVisit}</Typography>
      </Stack>
      <Typography textAlign="right" color="primary">{distanceString}</Typography>
    </Stack>
  );
};