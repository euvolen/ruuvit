import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Register extends Component {

    render() {
        return (
            <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Registration</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <form>
                    <div className="form-group"><label for="name">Name</label><input className="form-control item" type="text" id="name"/></div>
                    <div className="form-group"><label for="password">Password</label><input className="form-control item" type="password" id="password"/></div>
                    <div className="form-group"><label for="email">Email</label><input className="form-control item" type="email" id="email"/></div><button className="btn btn-primary btn-block" type="submit">Sign Up</button></form>
            </div>
        </section>
        )
    }
}
export default Register