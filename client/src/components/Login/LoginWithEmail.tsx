import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {LoginAction} from "./LoginReducer";
import {ChangeEvent} from "react";
import {isEmailValidate} from "../../utils/user";
import {getUserId, login} from "../../api/user";
import axios from "axios";


function EmailInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string, emailValidation: boolean
}) {
  return <TextField
    id="email"
    label="이메일"
    variant="outlined"
    autoComplete="off"
    type="email"
    size="small"
    onChange={props.onChange}
    value={props.value}
    error={(!props.emailValidation && true)}
    helperText={(!props.emailValidation && "올바른 이메일 형식이 아닙니다.")}
  />;
}


function PasswordInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) {
  return <TextField
    id="password"
    label="비밀번호"
    variant="outlined"
    autoComplete="off"
    type="password"
    size="small"
    onChange={props.onChange}
    value={props.value}
  />;
}


export default function LoginWithEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state: RootState) => state.LoginReducer.email);
  const password = useSelector((state: RootState) => state.LoginReducer.password);
  const emailValidation = useSelector((state: RootState) => state.LoginReducer.emailValidation);

  const handleEmailLogin = () => {
    if (isEmailValidate(email, (isEmail) => dispatch(LoginAction.setEmailValidation(isEmail)))) {
      login(email, password, (token) => {
        window.localStorage.setItem('token', token);
        dispatch(LoginAction.setToken(token));
        navigate('/where-to-go');
        getUserId(email, (userId)=>{
          window.localStorage.setItem('userId', String(userId));
          dispatch(LoginAction.setUserId(userId));
        });
      });
    }
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        로그인
      </Typography>
      <Stack spacing={1.5} mt={3}>
        <EmailInputTextField onChange={e => dispatch(LoginAction.setEmail(e.target.value))}
                             value={email} emailValidation={emailValidation}/>
        <PasswordInputTextField onChange={e => dispatch(LoginAction.setPassword(e.target.value))}
                                value={password}/>
        <Button variant="contained" size="large" disableElevation onClick={() => handleEmailLogin()}>
          로그인
        </Button>
      </Stack>
      <Typography align="center" mt={3}>
        <Link href="#" underline="hover" color="primary">이메일을 잊으셨나요?</Link><br/>
        계정이 없으신가요? <Link component={RouterLink} to="/signup" underline="hover" color="primary">새 계정 만들기</Link>
      </Typography>
    </Box>
  );
}

// 페이지 리로드 시 로그인 연장
export const onSilentRefresh = (callback: (token: string, userId: number) => void) => {
  const token = window.localStorage.getItem('token');
  const userId = window.localStorage.getItem('userId');

  if (token !== null && userId !== null) {
    callback(token, Number(userId));
    axios.defaults.headers.common['Authorization'] = token;
  }
};