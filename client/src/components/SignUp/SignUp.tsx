import {ChangeEvent} from "react";
import {Container, Box, Typography, Stack, TextField, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {SignUpAction} from "./SignUpReducer";
import {RootState} from "../../store";
import {isEmailValidate} from "../../utils/user";
import {signUp} from "../../api/user";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state: RootState) => state.SignUpReducer.email);
  const name = useSelector((state: RootState) => state.SignUpReducer.name);
  const password = useSelector((state: RootState) => state.SignUpReducer.password);
  const emailValidation = useSelector((state: RootState) => state.SignUpReducer.emailValidation);

  const handleSubmit = () => {
    if (isEmailValidate(email, (isEmail) => dispatch(SignUpAction.setEmailValidation(isEmail)))) {
      signUp(email, password, name, () => navigate('/login'));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        my={7}
        p={8}
        sx={{border: 1, borderRadius: 1, borderColor: 'secondary.dark'}}>
        <Box>
          <Typography variant="h4" align="center">
            회원가입
          </Typography>
          <Stack spacing={1.5} mt={3}>

            <EmailInputTextField onChange={e => dispatch(SignUpAction.setEmail(e.target.value))}
                                 value={email} emailValidation={emailValidation}/>
            <NameInputTextField onChange={e => dispatch(SignUpAction.setName(e.target.value))} value={name}/>
            <PasswordInputTextField onChange={e => dispatch(SignUpAction.setPassword(e.target.value))}
                                    value={password}/>
            <Button variant="contained" size="large" disableElevation onClick={() => handleSubmit()}>
              회원가입
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

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
    helperText={(!props.emailValidation && "Not a valid email format.")}
  />;
}

function NameInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) {
  return <TextField
    id="name"
    label="닉네임"
    variant="outlined"
    autoComplete="off"
    type="text"
    size="small"
    onChange={props.onChange}
    value={props.value}
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

export default SignUp;