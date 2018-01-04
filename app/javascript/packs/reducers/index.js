/**
 * Created by minimac on 1/4/18.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import appointmentReducer from './appointmentReducer'

const reducers = combineReducers({
    appointments: appointmentReducer,
    routing: routerReducer
})

export default reducers