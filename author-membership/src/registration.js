import React, { useState } from "react";
import './Form.css';
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Add sign up logic here
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Add Google authentication logic here
  };

  const responseFacebook = (response) => {
    console.log(response);
    // Add Facebook authentication logic here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="username">Username:</label><br />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
        /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        /><br />

        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        /><br />

        <label htmlFor="confirmPassword">Confirm Password:</label><br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => onChange(e)}
        /><br />

        <input type="submit" value="Sign Up" />
      </form>

      <hr />

      <p>Or sign up with:</p>

      {/* <GoogleLogin
        clientId="your-google-client-id"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <FacebookLogin
        appId="your-facebook-app-id"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      /> */}
    </div>
  )}

  export default Signup