import React from "react"
import ReactDOM from "react-dom"
import {Customer} from "./customer"
import {Supplier} from "./supplier"
import {createStore} from "redux"

import {Employee} from "./employee";
import {Provider} from "react-redux"
//import {CSSComponent} from "./cssComponent"

import {BrowserRouter, Route, Link} from "react-router-dom"

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
            <div>
                <header>
                    <Link to="/employee">Employee</Link>
                    <Link to="/customer">Customer</Link>
                    <Link to="/supplier">Supplier</Link>
                </header>
                <Route path="/employee" component={Employee}/>
                <Route path="/customer" component={Customer}/>
                <Route path="/supplier" component={Supplier}/>
            </div>
            </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


/*
 * Redux Code 
 */



const MyReducer = (state = { a : 1}, action) => {
    if(action.type === "ADD") {
        state.a  = state.a + action.payload;
    }
    return state;
}

let store = createStore(MyReducer);

store.subscribe(() => {
    console.log("A", store.getState());
});

// store.dispatch({
//     type : "ADD",
//     payload : 12
// });