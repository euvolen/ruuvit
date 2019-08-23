import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrimaryData from './Activities/PrimaryData';
import Graphs from './Activities/Graphs';
import AdvancedData from './Activities/AdvancedData';

class Dashboard extends Component {


    render() {
        return (
            <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">


                   


                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Activity data</a></div>
                <PrimaryData/>
                <Graphs/>
                <AdvancedData/>
         
    
            </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Dashboard