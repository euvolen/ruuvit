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
               <Search/>
                 <ul className="nav navbar-nav flex-nowrap ml-auto">
    
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