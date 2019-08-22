import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import NotificationItem from './NotificationItem';

const notifications =[{
    id:1,
    date:'December 12, 2019',
    message:'A new monthly report is ready to download!'
},
{
    id:2,
    date:'December 7, 2019',
    message:'$290.29 has been deposited into your account!'
},
{
    id:3,
    date:'December 12, 2019',
    message:"Spending Alert: We've noticed unusually high spending for your account."
},

]

 class Notifications extends Component {
    //TODO classnames - state, fetching Notifications

    render() {
        return (
            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                    role="menu">
                    <h6 className="dropdown-header">alerts center</h6>
                    {notifications.map((item, i)=> <NotificationItem key={i} notification={item}/>)}
                  <Link className="text-center dropdown-item small text-gray-500" to="/profile">Show All Alerts</Link></div>
            </div>
        </li>
        )
    }
}
export default Notifications