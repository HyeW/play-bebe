import {ChangeEvent} from "react";
import {Container, Box, Typography, Stack, TextField, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {SignUpAction} from "./SignUpReducer";
import {RootState} from "../../store";
import {isEmailValidate} from "../../utils/user";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state: RootState) => state.SignUpReducer.email);
  const name = useSelector((state: RootState) => state.SignUpReducer.name);
  const password = useSelector((state: RootState) => state.SignUpReducer.password);
  const emailValidation = useSelector((state: RootState) => state.SignUpReducer.emailValidation);

  const handleSubmit = () => {
    const url = '/api/signup';
    const data = {
      name: name,
      email: email,
      password: password
    };

    if (isEmailValidate(email, (isEmail) => dispatch(SignUpAction.setEmailValidation(isEmail)))) {
      // axios.post(url, data)
      //   .then(response => {
      //     console.log(response);
      //     alert('Success in sign up! Please log in.');
      //     navigate('/login');
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      navigate('/login');
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
            Sign Up
          </Typography>
          <Stack spacing={1.5} mt={3}>

            <EmailInputTextField onChange={e => dispatch(SignUpAction.setEmail(e.target.value))}
                                 value={email} emailValidation={emailValidation}/>
            <NameInputTextField onChange={e => dispatch(SignUpAction.setName(e.target.value))} value={name}/>
            <PasswordInputTextField onChange={e => dispatch(SignUpAction.setPassword(e.target.value))}
                                    value={password}/>
            <Button variant="contained" size="large" onClick={() => handleSubmit()}>
              Sign Up
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

function NameInputTextField(props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) {
  return <TextField
    id="name"
    label="Name"
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
    label="Password"
    variant="outlined"
    autoComplete="off"
    type="password"
    size="small"
    onChange={props.onChange}
    value={props.value}
  />;
}

export default SignUp;