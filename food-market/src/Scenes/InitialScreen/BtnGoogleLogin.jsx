import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

class BtnGoogleLogin extends Component {
  responseGoogle = (response) => {
    // console.log(response);
    if(response.googleId) {
      console.log(response.profileObj);
      this.props.history.push('/u/recipe');
    }
  }
  render() {


    return (
      <div className="App">
      <GoogleLogin
        clientId="222526087215-1tb1u0f9b1r9if7meko5v5jg8gcjolu0.apps.googleusercontent.com"
        buttonText="INGRESA CON GOOGLE"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />

      </div>
    );
  }
}

export default withRouter(BtnGoogleLogin);
