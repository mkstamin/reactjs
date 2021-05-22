import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => {
    const context = useContext(ThemeContext);

    const { theme, switchTheme } = context;
    return (
        <div>
            <h2>This is a content</h2>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
};

// class Content extends PureComponent {
//     componentDidMount() {
//         // this.context;
//     }

//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 <h2>This is a content</h2>
//                 <Counter>
//                     {(counter, incrementCount) => (
//                         <HoverCounter
//                             count={counter}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                 </Counter>
//             </div>
//         );
//     }
// }

// Content.contextType = ThemeContext;

export default Content;
