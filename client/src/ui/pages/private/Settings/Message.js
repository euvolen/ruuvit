import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {


    render() {
        const {patient, doctor} = this.props
        return (
            <div className="card shadow mb-5">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">Send a message to your {patient ? 'patient' : 'doctor'}</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group"><label htmlFor="signature"><strong>Message</strong><br/></label><textarea className="form-control" rows="4" name="signature"></textarea></div>
                         
                            <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Message