import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

 class AdminNavigation extends Component {
    //TODO classnames - state, fetching AdminNavigation

    render() {
        return (
            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
                <div className="nav-item no-arrow"> <Link className="nav-link" to='/admin'><span className="d-none d-lg-inline mr-2 text-gray-600 small"><i className="fas fa-user-cog"/></span></Link></div>
               
        </li>
        )
    }
}
export default AdminNavigation