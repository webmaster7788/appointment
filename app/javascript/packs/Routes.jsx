import React, { Component } from 'react'
import config from './config'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'

class Routes extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history}>
                    <Route path="/" component={App}>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default Routes