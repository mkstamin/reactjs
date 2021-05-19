import React from 'react';
import Button from './Button';

class Clock extends React.PureComponent {
    state = { date: new Date(), locale: 'bn-BD' };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //     };
    // }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    } // runs after component has been rendered to the DOM

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handelClick = (locale) => {
        // handelClick(e) {
        // e.preventDefault();
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock component');

        // const { locale } = this.props;
        const { date, locale } = this.state;
        return (
            <>
                <h1 className="heading">
                    {/* <span className="text">Hello {date.toLocaleTimeString(locale)}</span> */}
                    <span className="text">Hello {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handelClick} locale="en-us" />
            </>
        );
    }
}

export default Clock;
