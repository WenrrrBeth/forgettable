import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { GoogleLogin } from "react-google-login";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup, googleSignin } from "../../actions/profile";
import useStyles from "./styles";
import "../../fonts.css";

const Authentication = () => {
  const classes = useStyles();
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [inputData, setInputData] = useState({
    email: "",
    preferredName: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMsg(null);
    if (login) {
      dispatch(signin(inputData, history))
        .then((msg) => msg && setTimeout(() => setErrMsg(msg), 10));
    } else {
      if (!inputData.email.split('').includes('@')) setErrMsg("Incorrect email format")
      if (inputData.password !== inputData.confirmPassword) setErrMsg("Password does not match")
      dispatch(signup(inputData, history));
    }
  };

  const googleSuccess = async (res) => {
    const profileInfo = res?.profileObj;
    const token = res?.tokenId;

    try {
      const inputData = {
        profileInfo,
        token
      }
      dispatch(googleSignin(inputData, history));
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    setErrMsg("Google sign in was unsuccessful, please try again later or sign up with another email.")
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3EA3B0",
      },
    },
  });

  return (
    <Container className={classes.authContainer}>
      {
        errMsg && (
          <Alert className={classes.err} severity="error">{errMsg}</Alert>
        )
      }
      <Paper className={classes.auth} elevation={0}>
        <Typography className={classes.title} variant="h5">
          {login ? "Sign In" : "Sign Up"}
        </Typography>
        <Link className={classes.signupOpt} onClick={() => {
          setLogin(!login)
          setErrMsg(null)
        }}>
          <Typography className={classes.signuplead} variant="body1">
            {login ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          <Typography className={classes.spanColor} variant="body1">
            &nbsp;{login ? "Sign Up" : "Sign In"}
          </Typography>
        </Link>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <ThemeProvider theme={theme}>
              <Grid className={classes.grid} container spacing={2}>
                <TextField
                  className={classes.inputTheme}
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  variant="filled"
                  required
                  autoComplete="on"
                />
                {!login && (
                  <TextField
                    className={classes.inputTheme}
                    name="preferredName"
                    label="Preferred Name"
                    onChange={handleChange}
                    variant="filled"
                    required
                    autoComplete="on"
                  />
                )}
                <TextField
                  className={classes.inputTheme}
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  variant="filled"
                  required
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {!login && (
                  <TextField
                    className={classes.inputTheme}
                    name="confirmPassword"
                    label="Confirm Password"
                    onChange={handleChange}
                    required
                    type="password"
                    variant="filled"
                    autoComplete="off"
                  />
                )}
              </Grid>
            </ThemeProvider>
            <Button className={classes.signinButton} type="submit">
              {login ? "Sign In" : "Sign Up"}
            </Button>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENTID}
              render={(renderProps) => (
                <Link
                  className={classes.google}
                  component="button"
                  variant="body1"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width="27px"
                    height="27px"
                  >
                    <path
                      fill="#8bb7f0"
                      d="M28.229,29.396c1.528-1.345,2.711-3.051,3.438-4.968c0.187-0.491,0.321-0.905,0.423-1.303 l0.16-0.625H20.5v-6h17.662c0.225,1.167,0.338,2.343,0.338,3.5c0,5.005-2.069,9.834-5.692,13.32L28.229,29.396z"
                    />
                    <path
                      fill="#4e7ab5"
                      d="M37.744,17C37.914,18.002,38,19.008,38,20c0,4.719-1.891,9.277-5.216,12.641l-3.802-3.259 c1.385-1.333,2.465-2.964,3.153-4.777c0.192-0.506,0.332-0.937,0.44-1.355L32.897,22h-1.291H21v-5H37.744 M38.57,16H20v7h11.607 c-0.11,0.428-0.252,0.842-0.406,1.25c-0.772,2.034-2.073,3.808-3.744,5.141l5.367,4.6C36.611,30.518,39,25.544,39,20 C39,18.627,38.847,17.291,38.57,16L38.57,16z"
                    />
                    <path
                      fill="#8bb7f0"
                      d="M32.828,22c-0.501,3.231-2.175,6.075-4.594,8.058l3.825,3.278c3.175-2.873,5.329-6.852,5.828-11.336 H32.828z"
                    />
                    <path
                      fill="#bae0bd"
                      d="M20,38.5c-6.903,0-13.128-3.773-16.349-9.877l4.957-3.499C10.625,29.626,15.031,32.5,20,32.5 c2.713,0,5.277-0.851,7.439-2.465l4.624,3.963C28.695,36.906,24.434,38.5,20,38.5z"
                    />
                    <path
                      fill="#5e9c76"
                      d="M8.411,25.875C10.612,30.242,15.035,33,20,33c2.688,0,5.234-0.803,7.413-2.329l3.876,3.322 C28.086,36.585,24.12,38,20,38c-6.57,0-12.509-3.513-15.697-9.225L8.411,25.875 M8.828,24.357l-5.82,4.108 C6.123,34.704,12.552,39,20,39c4.949,0,9.442-1.908,12.823-5.009l-5.367-4.6C25.411,31.023,22.822,32,20,32 C14.911,32,10.573,28.827,8.828,24.357L8.828,24.357z"
                    />
                    <path
                      fill="#bae0bd"
                      d="M28.234,30.058C25.992,31.896,23.125,33,20,33c-5.407,0-10.041-3.303-12-8l-4.13,2.95 C6.807,33.899,12.917,38,20,38c4.645,0,8.866-1.775,12.059-4.664L28.234,30.058z"
                    />
                    <path
                      fill="#f78f8f"
                      d="M3.891,10.907C7.177,5.094,13.31,1.5,20,1.5c4.493,0,8.8,1.632,12.186,4.607l-4.212,4.212 C25.757,8.498,22.944,7.5,20,7.5c-4.84,0-9.196,2.763-11.271,7.093L3.891,10.907z"
                    />
                    <path
                      fill="#c74343"
                      d="M20,2c4.193,0,8.22,1.462,11.449,4.136l-3.515,3.515C25.688,7.935,22.905,7,20,7 c-4.828,0-9.192,2.643-11.445,6.832l-4.01-3.055C7.791,5.342,13.637,2,20,2 M20,1C12.746,1,6.446,5.068,3.245,11.044l5.682,4.329 C10.738,11.043,15.013,8,20,8c3.059,0,5.881,1.116,8,3l4.911-4.911C29.52,2.94,24.992,1,20,1L20,1z"
                    />
                    <g>
                      <path
                        fill="#f78f8f"
                        d="M20,7V2C13.07,2,7.064,5.922,4.056,11.662l4.056,3.09C10.13,10.189,14.689,7,20,7z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#ffeea3"
                        d="M3.235,27.789C2.083,25.324,1.5,22.707,1.5,20c0-2.838,0.661-5.66,1.917-8.197l4.905,3.737 C7.776,16.965,7.5,18.463,7.5,20c0,1.435,0.249,2.851,0.74,4.214L3.235,27.789z"
                      />
                      <path
                        fill="#ba9b48"
                        d="M3.604,12.574l4.121,3.14C7.244,17.09,7,18.528,7,20c0,1.367,0.217,2.717,0.646,4.024l-4.204,3.003 C2.484,24.791,2,22.432,2,20C2,17.441,2.552,14.897,3.604,12.574 M3.245,11.044C1.815,13.713,1,16.76,1,20 c0,3.075,0.747,5.97,2.044,8.54l5.799-4.142C8.305,23.035,8,21.554,8,20c0-1.64,0.331-3.203,0.927-4.627L3.245,11.044L3.245,11.044 z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#ffeea3"
                        d="M7,20c0-1.869,0.402-3.642,1.112-5.248l-4.056-3.09C2.749,14.156,2,16.989,2,20 c0,2.858,0.684,5.55,1.869,7.951L8,25C7.357,23.461,7,21.772,7,20z"
                      />
                    </g>
                  </svg>
                  <Typography className={classes.signwgoogle} variant="body1">
                    Sign in with Google Account instead
                  </Typography>
                </Link>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Authentication;
