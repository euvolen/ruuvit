import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import {SIGN_UP} from '../../../apollo/Mutations'
import { connect } from 'react-redux';
import { getErrors,authenticate } from '../../../redux/actions';
import PropTypes from 'prop-types'

class Register extends Component {
    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        password2: '',
        err:""
      }
      onChange(e){
        this.setState({[e.target.name]:e.target.value})
      }
    
    render() {
        const {email, password, password2, firstname, lastname,  err } = this.state
        console.log(this.props.history)

        return (
            <Mutation mutation={SIGN_UP}>
            {(signUp, {data})=>(
                     <section className="clean-block clean-form">
                     <div className="container">
                         <div className="block-heading">
                             <h1 className="form-title">Register</h1>
                             {err ? <p>{err}</p>: undefined}
                         </div>
                         <form className="border rounded-sm" onSubmit={(e) =>{
                            e.preventDefault()
                            if(password===password2)  {
                            signUp({variables: {email, firstname, lastname,  password}})
                            .then(res=>{console.log(res.data); this.props.authenticate(res.data.signUp, this.props.history)})
                            .catch(err => {
                              this.setState({err:err.message})
                              this.props.getErrors(err.message)})}
                            else{
                                this.setState({err:"Passwords don't match"})
                            }}}>
       
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
                               <label htmlFor="email">First Name</label>
                             <input className="form-control item"  
                             value={firstname}
                              onChange={this.onChange.bind(this)}
                              name="firstname"
                              type="text"
                              placeholder="your first name"/>
                              </div>
                              <div className="form-group">
                               <label htmlFor="email">Family name</label>
                             <input className="form-control item"  
                             value={lastname}
                              onChange={this.onChange.bind(this)}
                              name="lastname"
                              type="text"
                              placeholder="your family name"/>
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
                               <div className="form-group">
                               <label htmlFor="password">Confirm Password</label>
                               <input className="form-control"  
                               value={password2}
                               onChange={this.onChange.bind(this)}
                               name="password2"
                               type="password"
                               placeholder="Repeate a password"/>
                               </div> 
                           <div className="form-group text-center"><button className="btn btn-primary btn-block" type="submit">Sign up</button>
                            </div>
                           
                         </form>
                     </div>
                 </section>
            )}
        </Mutation>
        )
    }
}
Register.propTypes = {
  authenticate: PropTypes.func.isRequired,
  getErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(mapStateToProps, { getErrors, authenticate })(Register);