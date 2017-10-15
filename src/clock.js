import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("In Render");
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>At {this.state.date.toLocaleTimeString()} i'm still having a nightmare.</h2>
            </div>
        );
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.sleepTime
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}