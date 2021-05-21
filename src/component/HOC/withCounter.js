import { Component } from 'react';

const withCounter = (OriginalComponet) => {
    class NewComponent extends Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponet count={count} incrementCount={this.incrementCount} />;
        }
    }

    return NewComponent;
};

export default withCounter;
