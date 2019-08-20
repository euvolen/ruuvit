import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {

    render() {
        return (
            <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Log In</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <form>
                    <div className="form-group"><label for="email">Email</label><input className="form-control item" type="email" id="email"/></div>
                    <div className="form-group"><label for="password">Password</label><input className="form-control" type="password" id="password"/></div>
                    <div className="form-group">
                        <div className="form-check"><input className="form-check-input" type="checkbox" id="checkbox"/><label className="form-check-label" for="checkbox">Remember me</label></div>
                    </div><button className="btn btn-primary btn-block" type="submit">Log In</button></form>
            </div>
        </section>
        )
    }
}
export default Login