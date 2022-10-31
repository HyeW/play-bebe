import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {LoginAction} from "./LoginReducer";
import {ChangeEvent} from "react";
import {isEmailValidate} from "../../utils/user";


function EmailInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string, emailValidation: boolean
}) {
  return <TextField
    id="email"
    label="Email"
    variant="outlined"
    autoComplete="off"
    type="email"
    size="small"
    onChange={props.onChange}
    value={props.value}
    error={(!props.emailValidation && true)}
    helperText={(!props.emailValidation && "Not a valid email format.")}
  />;
}


function PasswordInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) {
  return <TextField
    id="password"
    label="Password"
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
      navigate('/where-to-go');
    }
    // sendUserInfoForAuthenticate(email,password)
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        Log In
      </Typography>
      <Stack spacing={1.5} mt={3}>
        <EmailInputTextField onChange={e => dispatch(LoginAction.setEmail(e.target.value))}
                             value={email} emailValidation={emailValidation}/>
        <PasswordInputTextField onChange={e => dispatch(LoginAction.setPassword(e.target.value))}
                                value={password}/>
        <Button variant="contained" size="large" disableElevation onClick={() => handleEmailLogin()}>
          Log In
        </Button>
      </Stack>
      <Typography align="center" mt={3}>
        <Link href="#" underline="hover" color="primary">Forgot Password?</Link><br/>
        No Account? <Link component={RouterLink} to="/signup" underline="hover" color="primary">Create One.</Link>
      </Typography>
    </Box>
  );
}