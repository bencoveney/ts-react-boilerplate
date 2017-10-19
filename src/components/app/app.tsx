import * as React from "react";

export default class App extends React.Component<{}, { count: number; }> {
    public state = { count: 0 };
    private interval: number;

    public componentWillMount() {
        this.interval = window.setInterval(
            () => this.setState({ count: this.state.count + 1 }),
            1000,
        );
    }

    public componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    public render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div>Welcome to the react/typescript boilerplate {this.state.count}</div>
            </div>
        );
    }
}
