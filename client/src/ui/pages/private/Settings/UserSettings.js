import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {


    render() {
        const {patient, doctor} = this.props
        return (
            <>

            <div className="row">
                <div className="col">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">User Settings</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="username"><strong>Username</strong></label><input className="form-control" type="text" placeholder="user.name" name="username"/></div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="email"><strong>Email Address</strong></label><input className="form-control" type="email" placeholder="user@example.com" name="email"/></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="first_name"><strong>First Name</strong></label><input className="form-control" type="text" placeholder="John" name="first_name"/></div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="last_name"><strong>Last Name</strong></label><input className="form-control" type="text" placeholder="Doe" name="last_name"/></div>
                                    </div>
                                </div>
                                <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Contact Settings</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group"><label htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" placeholder="Sunset Blvd, 38" name="address"/></div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city"/></div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country"/></div>
                                    </div>
                                </div>
                                <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </>
        )
    }
}
export default Message