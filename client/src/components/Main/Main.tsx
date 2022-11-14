import HotPlace from "../Place/HotPlace/HotPlace";
import {Container} from "@mui/material";
import {useEffect} from "react";
import {getLocation} from "../../utils/location";
import SearchBar from "../SearchBar/SearchBar";
import NormalPlace from "../Place/NormalPlace/NormalPlace";

export default function () {
  useEffect(() => {
    const gsLocation = getLocation();
    console.info(`gsLocation: ${JSON.stringify(gsLocation)}`);
  });

  return (
    <Container maxWidth="lg">
      <HotPlace/>
      <SearchBar/>
      <NormalPlace/>
    </Container>
  );
}