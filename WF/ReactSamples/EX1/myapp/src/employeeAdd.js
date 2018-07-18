import React from "react"
import { Life } from "./lifecycle";

export class EmployeeAdd extends React.Component {

    state = {FName : "Default Value"};

    setFName = (event) => {
        this.setState({FName : event.target.value}, function() {
            this.props.employees.push({FName: this.state.FName});
        })
    }

    render() {
        return (
        <div>
            <h1>EmployeeAdd</h1>
            FName:<input type="textbox" name="FName" value={this.state.FName} onChange={this.setFName}></input> <br/>
            <input type="button" value="Save" onClick={this.props.onSave} />
            <input type="button" value="Cancel" onClick={this.props.onCancel}/>
            <hr/>
            <Life></Life>
        </div>);
    }
}