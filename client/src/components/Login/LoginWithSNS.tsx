import {Box, Button, Stack, Typography, Divider} from "@mui/material";
import NaverLogo from '../../assets/naverLogo.svg';
import KakaoLogo from '../../assets/kakaoLogo.svg';
import GoogleLogo from '../../assets/googleLogo.svg';


export default function LoginWithSNS() {
  return (
    <Box mt={8}>
      <Divider>
        <Typography variant="subtitle1" align="center">
          Or Log in with SNS
        </Typography>
      </Divider>
      <Stack spacing={1.5} mt={3}>
        <Button variant="contained" size="large" color="naver" disableElevation>
          <img src={NaverLogo} alt="naver" width="28px"/>
          <Box width="100%">
            Login with Naver
          </Box>
        </Button>
        <Button variant="contained" size="large" color="kakao" disableElevation>
          <img src={KakaoLogo} alt="kakao" width="30px"/>
          <Box width="100%">
            Login with Kakao
          </Box>
        </Button>
        <Button variant="outlined" size="large" color="google">
          <img src={GoogleLogo} alt="google" width="30px"/>
          <Box width="100%">
            Login with Google
          </Box>
        </Button>
      </Stack>
    </Box>
  );
}