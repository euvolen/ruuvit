import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
    //TODO classnames - state, fetching Search

    render() {
        return (
            <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
            </div>
        </form>
        )
    }
}
export default Search