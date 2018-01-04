import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'
import {createAppointment} from '../actions/appointmentActions'

class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Team standup meeting',
            appt_time: '25 January 2016 9am'
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const appointment = {title: this.state.title, appt_time: this.state.appt_time};
        console.log(appointment)
        this.props.dispatch(createAppointment(appointment))
    }

    setApptTime (e) {
        const name = 'appt_time'
        const obj = {}
        if (obj[name] = e.toDate()) {
            this.setState(obj);
        }
    }

    handleChange (e) {
        const name = e.target.name
        const obj = {}
        obj[name] = e.target.value
        this.setState(obj);
    }

    render() {
        const inputProps = {
            name: 'appt_time'
        };

        return (
            <div>
                <h2>Make a new appointment</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name='title' placeholder='Appointment Title'
                           value={this.state.title}
                           onChange={(event) => this.handleChange(event)} />
                    <Datetime input={false} open={true} inputProps={inputProps}
                              onChange={(event) => this.setApptTime(event)} />

                    <input type='submit' value='Make Appointment' className='submit-button' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

AppointmentForm = connect(mapStateToProps)(AppointmentForm)

export default AppointmentForm