import {Box, Button, Stack, Typography, Divider} from "@mui/material";
import NaverLogo from '../../assets/naverLogo.svg';
import KakaoLogo from '../../assets/kakaoLogo.svg';
import GoogleLogo from '../../assets/googleLogo.svg';


export default function LoginWithSNS() {
  return (
    <Box mt={8}>
      <Divider>
        <Typography variant="subtitle1" align="center">
          소셜 로그인
        </Typography>
      </Divider>
      <Stack spacing={1.5} mt={3}>
        <Button variant="contained" size="large" color="naver" disableElevation>
          <img src={NaverLogo} alt="naver" width="28px"/>
          <Box width="100%">
            네이버 계정으로 로그인
          </Box>
        </Button>
        <Button variant="contained" size="large" color="kakao" disableElevation>
          <img src={KakaoLogo} alt="kakao" width="30px"/>
          <Box width="100%">
            카카오 계정으로 로그인
          </Box>
        </Button>
        <Button variant="outlined" size="large" color="google">
          <img src={GoogleLogo} alt="google" width="30px"/>
          <Box width="100%">
            구글 계정으로 로그인
          </Box>
        </Button>
      </Stack>
    </Box>
  );
}