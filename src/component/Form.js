import React, { PureComponent } from 'react';

class Form extends PureComponent {
    state = {
        title: 'JavaScript',
        text: 'JavaScript nice',
        library: 'React',
        isChecked: true,
    };

    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value,
        // });

        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isChecked: e.target.checked,
            });
        } else {
            console.log('Nothing here');
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, text, library, isChecked } = this.state;
        console.log(title, text, library, isChecked);
    };

    render() {
        const { title, text, library, isChecked } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="title" type="text" value={title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.handleChange} />

                    <br />
                    <br />

                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="VueJs">VueJs</option>
                    </select>

                    <br />
                    <br />

                    <input type="checkbox" checked={isChecked} onChange={this.handleChange} />

                    <br />
                    <br />

                    <input type="submit" value="Submit" />
                </form>
                {/* <p>{title}</p> */}
            </div>
        );
    }
}

export default Form;
