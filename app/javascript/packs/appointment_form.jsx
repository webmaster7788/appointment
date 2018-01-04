import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'

export default class AppointmentForm extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {

    }

    setApptTime (e) {

    }

    handleChange (e) {

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
                           value={this.props.input_title}
                           onChange={(event) => this.handleChange(event)} />

                    <Datetime input={false} open={true} inputProps={inputProps}
                              value={this.props.appt_time}
                              onChange={(event) => this.setApptTime(event)} />

                    <input type='submit' value='Make Appointment' className='submit-button' />
                </form>
            </div>
        )
    }
}