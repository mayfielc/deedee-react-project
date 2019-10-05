import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
    
    return (
      <div>
        <h1>Log In</h1>
        <GoogleLogin
    clientId="566086733416-s3dv1spv4v00f9fesdp1krdmpidvdpqe.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={props.handleLogin}
    onFailure={props.handleLogin}
    cookiePolicy={'single_host_origin'}
  />
      </div>
      )
}

export default Login;
