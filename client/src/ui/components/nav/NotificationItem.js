import React from 'react'
import {Link} from 'react-router-dom'


const  NotificationItem= ({notification}) => (
        <Link className="d-flex align-items-center dropdown-item" to={`/profile`}>
        <div className="mr-3">
            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
        </div>
        <div><span className="small text-gray-500">{notification.date}</span>
            <p>{notification.message}</p>
        </div>
    </Link>
    )


export default NotificationItem

/**
 * 
 *   <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="mr-3">
                            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                        </div>
                        <div><span className="small text-gray-500">December 12, 2019</span>
                            <p>A new monthly report is ready to download!</p>
                        </div>
                    </a>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="mr-3">
                            <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                        </div>
                        <div><span className="small text-gray-500">December 7, 2019</span>
                            <p>$290.29 has been deposited into your account!</p>
                        </div>
                    </a>
                    <a className="d-flex align-items-center dropdown-item" href="#">
                        <div className="mr-3">
                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                        </div>
                        <div><span className="small text-gray-500">December 2, 2019</span>
                            <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                        </div>
                    </a>
 */