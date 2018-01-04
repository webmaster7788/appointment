import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Appointment from './appointment'
import {listAppointments} from '../actions/appointmentActions'


class AppointmentsList extends Component {

    constructor (props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(listAppointments())
    }

    render() {
        const { appointments, isLoading } = this.props
        console.log()
        return (
            <div>
            {appointments.map(function (appointment) {
                return (
                    <Appointment appointment={appointment} key={appointment.id} />
                )
            })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appointments: state.appointments.appointmentsList.appointments,
    isLoading: state.appointments.appointmentsList.loading
})

AppointmentsList = connect(mapStateToProps)(AppointmentsList)

export default AppointmentsList