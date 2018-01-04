/**
 * Created by minimac on 1/4/18.
 */
import {push} from 'react-router-redux'
import update from 'immutability-helper'

import {
    LIST_APPOINTMENTS_START,
    LIST_APPOINTMENTS_SUCCESS,
    LIST_APPOINTMENTS_ERROR,
    CREATE_APPOINTMENTS_START,
    CREATE_APPOINTMENTS_SUCCESS,
    CREATE_APPOINTMENTS_ERROR,
} from '../actions/appointmentActions'

const initialState = {
    appointmentsList: {
        appointments: [],
        error: null,
        loading: true
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LIST_APPOINTMENTS_START:
            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    loading: true
                })
            })
        case LIST_APPOINTMENTS_SUCCESS:
            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    appointments: action.data,
                    loading: false
                })
            })
        case LIST_APPOINTMENTS_ERROR:
            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    error: action.error,
                    loading: false
                })
            })
        case CREATE_APPOINTMENTS_START:
            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    loading: true
                })
            })
        case CREATE_APPOINTMENTS_SUCCESS:
            const appointment = action.data
            const appointments = update(state.appointmentsList.appointments, { $push: [appointment]});

            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    appointments: appointments.sort(function(a,b){
                        return new Date(a.appt_time) - new Date(b.appt_time);
                    }),
                    loading: false
                })
            })
        case CREATE_APPOINTMENTS_ERROR:
            return Object.assign({}, state, {
                appointmentsList: Object.assign({}, state.appointmentsList, {
                    error: action.error,
                    loading: false
                })
            })
        default:
            return state
    }
}

