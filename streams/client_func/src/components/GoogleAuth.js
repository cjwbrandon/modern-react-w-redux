import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
  const auth = useRef();
  const { signIn, signOut } = props;

  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) signIn(auth.current.currentUser.get().getId());
      else signOut();
    };

    // Load auth client
    window.gapi.load("client:auth2", () => {
      // Initialise client with client id and scope
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [signIn, signOut]);

  const onSignInClick = () => {
    auth.current.signIn();
  };

  const onSignOutClick = () => {
    auth.current.signOut();
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
