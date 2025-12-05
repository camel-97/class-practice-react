import React, { Component } from "react";
import ClassInput from "./ClassInput";
import FunctionalInput from "./FunctionalInput";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            child1Count: 0,
            child2Count: 0,
        };
    }

    handleCountChange = (childIndex, newCount) => {
        if (childIndex === 1) {
            this.setState({child1Count: newCount});
        } else if (childIndex === 2) {
            this.setState({child2Count: newCount});
        }
    };

    render() {
        const total = this.state.child1Count + this.state.child2Count;

        return (
            <div>
                <h2>Total Todos: {total}</h2>
                <FunctionalInput onCountChange = {(c) => this.handleCountChange(1, c)}/>
                <ClassInput onCountChange = {(c) => this.handleCountChange(2, c)}/>
            </div>
        )
    }
}

export default Counter;