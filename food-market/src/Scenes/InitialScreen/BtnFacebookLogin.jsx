import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

class BtnFacebookLogin extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }
  
  componentClicked = () => {
    console.log( "Clicked!" )
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    let fbContent;
    if(this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (<FacebookLogin
        appId="551759372283447"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        icon="fa-facebook"
      /> );
    }
    return (
      <div> {fbContent} </div>
    );
  }
}

export default BtnFacebookLogin;
