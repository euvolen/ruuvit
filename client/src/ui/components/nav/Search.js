import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
    //TODO classnames - state, fetching Search

    render() {
        return (
            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search"></i></a>
            <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto navbar-search w-100">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                    </div>
                </form>
            </div>
        </li>
        )
    }
}
export default Search