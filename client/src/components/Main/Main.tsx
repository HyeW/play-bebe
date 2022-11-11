import HotPlace from "../HotPlace/HotPlace";
import {Container} from "@mui/material";
import {useEffect} from "react";
import {getLocation} from "../../utils/location";

export default function () {
  useEffect(() => {
    const gsLocation = getLocation();
    console.info(`gsLocation: ${JSON.stringify(gsLocation)}`);
  });

  return (
    <Container maxWidth="lg">
      <HotPlace/>
    </Container>
  );
}