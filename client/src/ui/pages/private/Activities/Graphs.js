import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Graphs extends Component {


    render() {
        return (
            <div className="row">
            <div className="col-lg-7 col-xl-8">
                <div className="card shadow mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">Earnings Overview</h6>
                        <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                            <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                role="menu">
                                <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart-area"><canvas data-bs-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-xl-4">
                <div className="card shadow mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">Revenue Sources</h6>
                        <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                            <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                role="menu">
                                <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart-area"><canvas data-bs-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{}}}"></canvas></div>
                        <div
                            className="text-center small mt-4"><span className="mr-2"><i className="fas fa-circle text-primary"></i>&nbsp;Direct</span><span className="mr-2"><i className="fas fa-circle text-success"></i>&nbsp;Social</span><span className="mr-2"><i className="fas fa-circle text-info"></i>&nbsp;Refferal</span></div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
export default Graphs