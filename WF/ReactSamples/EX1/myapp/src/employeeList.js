import React from "react"

// export class EmployeeList extends React.Component {

//     getEmployees() {
//         return this.props.employees.map(
//             x => <div><h1>FName: {x.FName}, LName: {x.LName}, Age: {x.Age}</h1></div>
//         );        
//     }

//     render() {
//         return (
//         <div>
//             <input type="button" value="AddNew" onClick={this.props.onAddNew}/>
//             <h1>Employee List: {this.props.employees.length}</h1>
//             {this.getEmployees()}
//         </div>
//         );
//     }
// }

function GetEmployees (props) {
    return props.employees.map(
        (x, index) => {
            return (
            
                <tr key={index}>
                    <td>FName: {x.FName}</td>
                    <td>LName: {x.LName}</td>
                    <td>Age: {x.Age}</td>
                </tr>
            
            )}
    );
}

//State-less components, gets re-rendered only when parent get re-rendered
export const EmployeeList = (props) => {
    return (
        <div>
        <input type="button" value="AddNew" onClick={props.onAddNew}/>
        <h1>Employee List: {props.employees.length}</h1>
        <table>{GetEmployees(props)}</table>
        </div>
    );
}