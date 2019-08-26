import React, { Component } from 'react'

import PrimaryData from '../private/Activities/PrimaryData';
import AdminButtonGroup from './AdinButtonGroup';



class AdminDashboard extends Component {


    render() {
        return (
            <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">


                   


                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Admin Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Activity data</a></div>
  <AdminButtonGroup/>

    
            </div>
        </div>
        </div>
        </div>
        )
    }
}

export default AdminDashboard