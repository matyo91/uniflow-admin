import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
    ConnectedRouter,
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import Welcome from './Welcome';
import {Create, List, Show, Update} from "./components/program";
import program from "./reducers/program"

const history = createBrowserHistory();
const store = createStore(
    combineReducers({
        router: connectRouter(history),
        form,
        program
    }),
    applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={Welcome} strict={true} exact={true}/>
                <Route path="/programs/create" component={Create} exact key="create" />,
                <Route path="/programs/edit/:id" component={Update} exact key="update" />,
                <Route path="/programs/show/:id" component={Show} exact key="show" />,
                <Route path="/programs/" component={List} exact strict key="list" />,
                <Route path="/programs/:page" component={List} exact strict key="page" />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();