import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store, { setCurrentGenre, logout } from "../store";
import { GiMusicalNotes } from "react-icons/gi";

class Header extends React.Component {
  constructor() {
    super();
    this.renderLoginLinks = this.renderLoginLinks.bind(this);
  }

  renderLoginLinks() {
    const { user, logout } = this.props;
    return user.id ? (
      <>
        <Link
          to="/profile"
          className="header-link"
          onClick={() => {
            store.dispatch(setCurrentGenre(""));
          }}
        >
          {user.email}
        </Link>
        <Link to="/" className="header-link" onClick={() => logout()}>
          Log Out
        </Link>
      </>
    ) : (
      <>
        <Link to="/login" className="header-link">
          Login
        </Link>
        <Link to="/signup" className="header-link">
          Sign Up
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="header">
        <Link
          to="/"
          className="header-link"
          onClick={() => {
            store.dispatch(setCurrentGenre("All"));
          }}
        >
          <GiMusicalNotes /> Jukebox Center
        </Link>
        <div className="header-login">
          {this.renderLoginLinks()}
          <Link
            to="/cart"
            className="header-link"
            onClick={() => {
              store.dispatch(setCurrentGenre(""));
            }}
          >
            Cart
          </Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Header);
