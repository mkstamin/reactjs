import React from 'react';
import Button from './Button';

class Clock extends React.PureComponent {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    } // runs after component has been rendered to the DOM

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handelClick = (locale) => {
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
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>

                {locale === 'bn-BD' ? (
                    <Button change={this.handelClick} locale="en-US" show={false} />
                ) : (
                    <Button change={this.handelClick} locale="bn-BD" show />
                )}
            </div>
        );
    }
}

export default Clock;
