import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Settings/Message';
import AdvancedData from './Activities/AdvancedData';
import UserSettings from './Settings/UserSettings'
 class AccountPage extends Component {

    render() {
        const {id} = this.props.match.params
        return (
            <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
    
            <div className="container-fluid">
                
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <div className="card mb-3">
                        <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src="/assets/img/dogs/image2.jpeg" width="160" height="160"/>
                            <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                        </div>
                    </div>
          <AdvancedData/>
                </div>
                <div className="col-lg-6">
                     <UserSettings/>
                    <Message patient={id}/>
                </div>
            </div>
       
        </div>
        </div>
            </div>
        </div>
        )
    }
}

export default AccountPage