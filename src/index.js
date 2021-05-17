import React from 'react';
import ReactDOM from 'react-dom';

/*
    ===================Component & Props=================
*/

//= ==========Functional Component==============
/*
function Colock({ locale }) {
    return (
        <h1 className="heading">
            <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
        </h1>
    );
}

ReactDOM.render(<Colock locale="bn-BD" />, document.getElementById('root'));
*/

//= ==========Class Component==============

class Clock extends React.PureComponent {
    render() {
        const { locale } = this.props;
        return (
            <h1 className="heading">
                <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));
