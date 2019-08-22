import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Messages extends Component {
    //TODO classnames - state, fetching messages

    render() {
        return (
            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-envelope fa-fw"></i><span className="badge badge-danger badge-counter">7</span></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                    role="menu">
                    <h6 className="dropdown-header">alerts center</h6>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="/assets/img/avatars/avatar4.jpeg"/>
                            <div className="bg-success status-indicator"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                            <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                        </div>
                    </a>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="/assets/img/avatars/avatar2.jpeg"/>
                            <div className="status-indicator"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                            <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                        </div>
                    </a>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="/assets/img/avatars/avatar3.jpeg"/>
                            <div className="bg-warning status-indicator"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                            <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                        </div>
                    </a>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="/assets/img/avatars/avatar5.jpeg"/>
                            <div className="bg-success status-indicator"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                            <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                        </div>
                    </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
            </div>
            <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
        </li>
        )
    }
}
export default Messages