import React from "react"

export class Content extends React.Component {

    constructor() {
        super();
        this.state = {customerAge : 22};
        this.customerName = "XYZ"
    }

    clickHandler = () => {
        this.customerName = "Rahul"
        var tempVal = this.state.customerAge + 1
        this.setState({customerAge : tempVal});
    }

    render() {
        return (
        <div>
            <h1>From Content {this.customerName}, Age: {this.state.customerAge}</h1>
            <input type="button" value="ClickMe" onClick={this.clickHandler}/>
        </div>);
    }
}