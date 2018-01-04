import React from 'react'
import ReactDOM from 'react-dom'
import AppointmentForm from './appointment_form'
// import {AppointmentsList} from './appointments_list'
import update from 'immutability-helper'

export default class Appointments extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            title: 'Team standup meeting',
            appt_time: '25 January 2016 9am'
        }
    }

    render() {
        return (
            <div>
                <AppointmentForm input_title={this.state.title} input_appt_time={this.state.appt_time}/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Appointments/>,
        document.body.appendChild(document.createElement('div')),
    )
})
