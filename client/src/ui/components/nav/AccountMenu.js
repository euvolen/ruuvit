import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Mutation } from 'react-apollo'
import { SIGN_OUT } from '../../../apollo/Mutations'
import { logout } from '../../../redux/actions';


 class AccountMenu extends Component {
    //TODO classnames - state, fetching AccountMenu

    render() {
        const {  user } = this.props;
        return (
            <li className="nav-item dropdown no-arrow" role="presentation">
            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">{user ? user.name : 'Valerie Luna'}</span><img className="border rounded-circle img-profile" style={{width:'35px'}} src={user.avatar? user.avatar : "/assets/img/dogs/image2.jpeg"}/></a>
                <div
                    className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                        <Link className="dropdown-item" role="presentation" to="/settings"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</Link>
                        <Link className="dropdown-item" role="presentation" to="/dashboard"><i className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Dashboard</Link>
                    <Link className="dropdown-item" role="presentation" to="/patients"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Pantients</Link>
                        <div className="dropdown-divider"></div>
                        <Mutation mutation={SIGN_OUT}>
    {(signOut, { data }) => (
      <a className="dropdown-item" role="presentation" href="#" onClick={(e)=>{
        e.preventDefault()
        signOut()
        .then(res=>{this.props.logout()})
        }}><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>)}
  </Mutation>
                       
                        </div>
      </div>
      </li>
        )
    }
}

AccountMenu.propTypes = {
    logout:PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    user: state.auth.user
  });
export default connect(mapStateToProps,{logout})(AccountMenu)