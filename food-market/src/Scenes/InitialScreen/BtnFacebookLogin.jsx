import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class BtnFacebookLogin extends Component {
  
  render() {
    const responseFacebook = (response) => {
      // console.log(response);
      if(response.accessToken) {
        console.log(response.name, response.email, response.picture);
        this.props.history.push('/u/recipe');
      }
    }
    
    return (
      <FacebookLogin
        appId="551759372283447"
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    );
  }
}

export default withRouter(BtnFacebookLogin);
