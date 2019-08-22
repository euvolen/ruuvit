import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PatientListItem from './Patients/PatientListItem';


const patiens =[
    {
        id:'1',
        name:"Username",
        age:'56',
        avatar:'/assets/img/avatars/avatar1.jpeg',
        status:'at home',
        address:'Turku, FI',
        phone:'0400412345',
        date:'01.09.2019'
    },
    {
        id:'2',
        name:"Username1",
        age:'34',
        avatar:'/assets/img/avatars/avatar1.jpeg',
        status:'at home',
        address:'Turku, FI',
        phone:'0400412345',
        date:'01.09.2019'
    },
    {
        id:'3',
        name:"Username2",
        age:'54',
        avatar:'/assets/img/avatars/avatar1.jpeg',
        status:'at home',
        address:'Turku, FI',
        phone:'0400412345',
        date:'01.09.2019'
    },
    {
        id:'4',
        name:"Username3",
        age:'56',
        avatar:'/assets/img/avatars/avatar1.jpeg',
        status:'at home',
        address:'Turku, FI',
        phone:'0400412345',
        date:'01.09.2019'
    },
    {
        id:'5',
        name:"Username4",
        age:'78',
        avatar:'/assets/img/avatars/avatar1.jpeg',
        status:'at home',
        address:'Turku, FI',
        phone:'0400412345',
        date:'01.09.2019'
    },
]

 class PatientList extends Component {

    
    render() {
        return (
            <div id="wrapper">
     
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">

                <div className="container-fluid">
                    <h3 className="text-dark mb-4">Team</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Employee Info</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Status</th>
                                            <th>address</th>
                                            <th>Phone</th>
                                            <th>Started at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patiens.map((patient, i)=><PatientListItem key={i} patient={patient}/>)}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Age</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td><strong>address</strong></td>
                                            <td><strong>Phone</strong></td>
                                            <td><strong>Started at</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                </div>
                                <div className="col-md-6">
                                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
     
        )
    }
}
export default PatientList