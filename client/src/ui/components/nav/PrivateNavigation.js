import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../../../redux/actions';
import Search from './Search';
import Notifications from './Notifications';
import Messages from './Messages';
import AccountMenu from './AccountMenu';

 class PrivateNavigation extends Component {
 

    render() {
        const { user } = this.props.auth;
        return (
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                    </div>
                </form>
                 <ul className="nav navbar-nav flex-nowrap ml-auto">
              <Search/>
              <Notifications/>
             {user.role == 'user' ? <Messages/> : undefined}
                    <div className="d-none d-sm-block topbar-divider"></div>
                <AccountMenu/>
                  </ul>
              </div>
              </nav>
        )
    }
}
PrivateNavigation.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps,{logout})(PrivateNavigation);