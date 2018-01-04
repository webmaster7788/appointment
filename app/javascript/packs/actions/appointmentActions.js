/**
 * Created by minimac on 1/5/18.
 */
import config from '../config'
import { push } from 'react-router-redux'

const apiUrl = config.api.url

// List all appointments
export const LIST_APPOINTMENTS_START = 'LIST_APPOINTMENTS_START'
export const LIST_APPOINTMENTS_SUCCESS = 'LIST_APPOINTMENTS_SUCCESS'
export const LIST_APPOINTMENTS_ERROR = 'LIST_APPOINTMENTS_ERROR'

export function appointmentsListStart(data) {
    return { type: LIST_APPOINTMENTS_START, data }
}

export function appointmentsListSuccess(data) {
    return { type: LIST_APPOINTMENTS_SUCCESS, data }
}

export function appointmentsListError(data) {
    return { type: LIST_APPOINTMENTS_ERROR, data }
}

export function listAppointments() {
    return (dispatch) => {
        dispatch(appointmentsListStart())
        fetch(`${apiUrl}/appointments`)
            .then(res => res.json())
            .then(json => {
                dispatch(appointmentsListSuccess(json))
            })
            .catch(error => {
                dispatch(appointmentsListError())
            })
    }
}

// Create Appointment
export const CREATE_APPOINTMENTS_START = 'CREATE_APPOINTMENTS_START'
export const CREATE_APPOINTMENTS_SUCCESS = 'CREATE_APPOINTMENTS_SUCCESS'
export const CREATE_APPOINTMENTS_ERROR = 'CREATE_APPOINTMENTS_ERROR'

export function appointmentsCreateStart(data) {
    return { type: CREATE_APPOINTMENTS_START, data }
}

export function appointmentsCreateSuccess(data) {
    return { type: CREATE_APPOINTMENTS_SUCCESS, data }
}

export function appointmentsCreateError(data) {
    return { type: CREATE_APPOINTMENTS_ERROR, data }
}

export function createAppointment(data) {
    return (dispatch) => {
        dispatch(appointmentsCreateStart())
        fetch(`${apiUrl}/appointments`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                dispatch(appointmentsCreateSuccess(json))
            })
            .catch(error => {
                dispatch(appointmentsCreateError())
            })
    }
}
