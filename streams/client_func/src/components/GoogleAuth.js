import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
  let auth;

  useEffect(() => {
    // Load auth client
    window.gapi.load("client:auth2", () => {
      // Initialise client with client id and scope
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          console.log(auth);
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) props.signIn(auth.currentUser.get().getId());
    else props.signOut();
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) return null;
    if (props.isSignedIn)
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    return (
      <button className="ui red google button" onClick={onSignInClick}>
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
