import React, { Component } from "react";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Mutation } from 'react-apollo'
import { SIGN_OUT } from '../../../apollo/Mutations'
import { logout } from '../../../redux/actions';
import PrivateNavigation from "./PrivateNavigation";

class Navigation extends Component {



  render() {


    const { isAuthenticated, user } = this.props.auth;
    const private_nav = (<>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item" role="presentation"><Link className="nav-link" to="/settings">Settings</Link></li>
        <li className="nav-item" role="presentation">    <Mutation mutation={SIGN_OUT}>
                {(signOut, { data }) => (
                  <a className="nav-link" href="/" onClick={(e)=>{
                    e.preventDefault()
                    signOut()
                    .then(res=>{this.props.logout()})
                    }}>Log out</a>)}
              </Mutation> </li>
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

    const public_navigation = (   <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    <div className="container"><a className="navbar-brand logo" href="#">Ruuvit</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse"
            id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
            {isAuthenticated ? private_nav : public_nav}
            </ul>
        </div>
    </div>
</nav>)
 
    return isAuthenticated ? <PrivateNavigation/> : public_navigation;
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{logout})(Navigation);