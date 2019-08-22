import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


   const  PatientListItem = ({patient})=> (
            <tr>
            <td><Link to={`/patient/${patient.id}`}><img className="rounded-circle mr-2" width="30" height="30" src={patient.avatar}/>{patient.name}</Link></td>
            <td>{patient.age}</td>
            <td>{patient.status}</td>
            <td>{patient.address}</td>
            <td>{patient.phone}</td>
            <td>{patient.date}</td>
            </tr>
        )
    

export default PatientListItem