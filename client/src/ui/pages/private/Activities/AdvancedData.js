import React, { Component } from 'react'

export default class AdvancedData extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">Projects</h6>
                    </div>
                    <div className="card-body">
                    <div className="row mb-3 ">
                <div className="col">
                    <div className="card text-white bg-primary shadow">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col">
                                    <p className="m-0">Peformance</p>
                                    <p className="m-0"><strong>65.2%</strong></p>
                                </div>
                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                            </div>
                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-success shadow">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col">
                                    <p className="m-0">Peformance</p>
                                    <p className="m-0"><strong>65.2%</strong></p>
                                </div>
                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                            </div>
                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                        </div>
                    </div>
                </div>
            </div>
                        <h4 className="small font-weight-bold">Server migration<span className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}><span className="sr-only">20%</span></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales tracking<span className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span className="sr-only">40%</span></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database<span className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span className="sr-only">60%</span></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details<span className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span className="sr-only">80%</span></div>
                        </div>
                        <h4 className="small font-weight-bold">Account setup<span className="float-right">Complete!</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}><span className="sr-only">100%</span></div>
                        </div>
                    </div>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span></div>
                                <div className="col-auto">
                                    <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-1"/><label className="custom-control-label" htmlFor="formCheck-1"></label></div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">11:30 AM</span></div>
                                <div className="col-auto">
                                    <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-2"/><label className="custom-control-label" htmlFor="formCheck-2"></label></div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">12:30 AM</span></div>
                                <div className="col-auto">
                                    <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-3"/><label className="custom-control-label" htmlFor="formCheck-3"></label></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="col">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-primary shadow">
                            <div className="card-body">
                                <p className="m-0">Primary</p>
                                <p className="text-white-50 small m-0">#4e73df</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-success shadow">
                            <div className="card-body">
                                <p className="m-0">Success</p>
                                <p className="text-white-50 small m-0">#1cc88a</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-info shadow">
                            <div className="card-body">
                                <p className="m-0">Info</p>
                                <p className="text-white-50 small m-0">#36b9cc</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-warning shadow">
                            <div className="card-body">
                                <p className="m-0">Warning</p>
                                <p className="text-white-50 small m-0">#f6c23e</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-danger shadow">
                            <div className="card-body">
                                <p className="m-0">Danger</p>
                                <p className="text-white-50 small m-0">#e74a3b</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-secondary shadow">
                            <div className="card-body">
                                <p className="m-0">Secondary</p>
                                <p className="text-white-50 small m-0">#858796</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
