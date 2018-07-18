import React from "react"
import {EmployeeAdd} from "./employeeAdd"
import {EmployeeList} from "./employeeList"

export class Employee extends React.Component {

    employees = [   {FName: "A",LName : "B", Age : 1},
                    {FName: "B",LName : "B", Age : 1},
                    {FName: "C",LName : "B", Age : 1}];

    constructor() {
        super();
        this.state = {view : true, add: false};
    }

    onAddNew = () => {
        this.setState({view : false, add: true});
    }

    onCancel = () => {
        this.setState({view : true, add: false});
    }

    onSave = () => {
        this.setState({view : true, add: false});
    }

    getEmployees() {
        if (this.state.view) {
            return (<EmployeeList employees={this.employees} onAddNew={this.onAddNew}/>);
        } else if(this.state.add) {
            return (<EmployeeAdd employees={this.employees} onCancel={this.onCancel} onSave={this.onSave}/>);
        }   
    }

    render() {
        return (
        <div>
            {this.getEmployees()}
        </div>);
    }
}