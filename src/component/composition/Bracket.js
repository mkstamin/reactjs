import { Component } from 'react';

class Bracket extends Component {
    addBracket = (text) => ` [${text} ]`;

    render() {
        const { children } = this.props;
        return children({ addBracket: this.addBracket });
    }
}

export default Bracket;
