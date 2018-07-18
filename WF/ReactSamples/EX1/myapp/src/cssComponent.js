import React from "react"
import "./my.css"

export class CSSComponent extends React.Component {

    a = {
        color : "blue"
    };

    render() {
        return (
        <div>
            <h1 className="MyClass"> CSS Header</h1>
            <h1 style={this.a}>Inline</h1>
        </div>
        );
    }
}