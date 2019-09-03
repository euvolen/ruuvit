
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import setToken from '../../../utils/setToken';

class Login extends Component {
  state = {
    email: '',
    password: '',
    err: ''
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    const {email, password, err } = this.state
    return (
      
              <section className="clean-block clean-form">
              <div className="container">
                  <div className="block-heading">
                      <h1 className="form-title">Login</h1>
                      {err ? <p>{err}</p>: undefined}
                  </div>
                  <form className="border rounded-sm" onSubmit={(e) =>{
                     e.preventDefault()
                    axios.post('http://localhost:5000/admin', {email, password}).
                    then(res => {setToken(res.data.token); this.props.history.push('/admin-dashboard')} ).catch(err => this.setState({err}))
                  }}>
                

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                      <input className="form-control item"  
                      value={email}
                       onChange={this.onChange.bind(this)}
                       name="email"
                       type="email"
                       placeholder="your email"/>
                       </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control"  
                        value={password}
                       onChange={this.onChange.bind(this)}
                       name="password"
                       type="password"
                       placeholder="Password"/>
                        </div>  
                      
                    <div className="form-group text-center"><button className="btn btn-primary btn-block" type="submit">Login</button>
                     </div>
                     {err ? <p>{err}</p>: undefined}
                  </form>
               
              </div>
              </section>
     
      
    )
  }

}


export default Login;