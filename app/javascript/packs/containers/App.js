/**
 * Created by minimac on 1/4/18.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AppointmentsList from '../components/appointments_list'
import AppointmentForm from '../components/appointment_form'

class App extends Component {

    constructor (props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <h1>React Calendar</h1>
                <h2>Appointments</h2>
                <AppointmentForm/>
                <AppointmentsList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

App = connect(mapStateToProps)(App)

export default App