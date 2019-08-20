import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contacts extends Component {

    render() {
        return (
            <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <form>
                    <div className="form-group"><label>Name</label><input className="form-control" type="text"/></div>
                    <div className="form-group"><label>Subject</label><input className="form-control" type="text"/></div>
                    <div className="form-group"><label>Email</label><input className="form-control" type="email"/></div>
                    <div className="form-group"><label>Message</label><textarea className="form-control"></textarea></div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Send</button></div>
                </form>
            </div>
        </section>
        )
    }
}
export default Contacts