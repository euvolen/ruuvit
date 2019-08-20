import React, { Component } from "react";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Navigation extends Component {



  render() {
    const { isAuthenticated, user } = this.props.auth;
    const private_nav = (<>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/settings">Settings</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/logout">Logout</Link></li>
        </>
    )
    const public_nav = (<>
       <li className="nav-item" role="presentation"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/about">About Us</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Login</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/register">Register</Link></li>
        </>
    )
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><a className="navbar-brand logo" href="#">Ruuvit</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                {isAuthenticated ? private_nav : public_nav}
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navigation);