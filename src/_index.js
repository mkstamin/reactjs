import React from 'react';
import ReactDOM from 'react-dom';

/*
    ================= React JSX Element ============  
 */

/* const element = React.createElement('h1', null, 'Hello World');
{
    type: "h1",
    props:{
        children: "Hello"
    }
}
*/

/*
    ================= React JSX Element Rendering ============  
 */
const index = 0;

setInterval(() => {
    const element = (
        <h1 className="heading" tabIndex={index}>
            <span className="text">Hello {new Date().toLocaleTimeString()}</span>
            <img src="" alt="" />
        </h1>
    );

    ReactDOM.render(element, document.getElementById('root'));
}, 1000);

/*
element = {
    type: 'h1',
    props: {
        className: 'heading',
        tabIndex: 0,
        children: [
            {
                type: 'span',
                props: {
                    className: 'heading',
                    children: 'Hello World',
                },
            },
            {
                type: 'img',
                props: {
                    src: '',
                    alt: '',
                },
            },
        ],
    },
};
*/
