import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axious from 'axios'
class AdminButtonGroup extends Component {

    state = {
        started:'',
        test:false,
        msg:''
    }

    start(){
        axious.post('http://localhost:5000/start').then(res=>{
            this.setState({started:res.data.status, msg:res.data.msg})
        })
    }
    stop(){
        axious.post('http://localhost:5000/stop').then(res=>{
            this.setState({started:res.data.status, msg:res.data.msg})
        })
    }
    test(){
        axious.post('http://localhost:5000/test').then(res=>{
            this.setState({msg:res.data.msg, test:res.data.test})
        })
    }

    render() {
        const {started, test, msg} = this.state
        const check = (<div className="col-md-6 col-xl-4 mb-4">
        <div className="card shadow border-left-primary py-2">
            <div className="card-body">
                <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                        <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Check running threads</span></div>
                    </div>
                    <div className="col-auto" onClick={this.test.bind(this)}><i className="fas fa-play fa-2x text-gray-300"></i></div>
                </div>
            </div>
        </div>
    </div>)
        const btns = (
<div className="col-md-6 col-xl-4 mb-4">
                <div className="card shadow border-left-primary py-2">
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Manager</span></div>
                   
                                <div className="text-dark font-weight-bold h5 mb-0"><span>Message: {msg}</span></div>
                            </div>
                            <div className="row">   <div className="col-auto" onClick={this.start.bind(this)}><i className="fas fa-play fa-2x text-gray-300"></i></div>
                            <div className="col-auto" onClick={this.stop.bind(this)}><i className="fas fa-stop fa-2x text-gray-300"></i></div>
                            <div className="col-auto" onClick={this.test.bind(this)}><i className="fas fa-vials fa-2x text-gray-300"></i></div></div>
                         
                        </div>
                    </div>
                </div>
            </div>
        
        )
        return (
            <div className="row">
            {!test ? check : btns}
        </div>
        )
    }
}
export default AdminButtonGroup