import {Container, Box} from "@mui/material";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithSNS from "./LoginWithSNS";
import * as React from "react";

export default function Login() {
  return (
      <Container maxWidth="sm">
        <Box my={7} p={8} sx={{border: 1, borderRadius: 1, borderColor: 'secondary.dark'}}>
          <LoginWithEmail/>
          <LoginWithSNS/>
        </Box>
      </Container>
  );
}