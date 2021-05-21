import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import HoverCounter from './component/HoverCounter';

function App() {
    return (
        <div>
            {/* <Counter
                render={(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            /> */}
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>

            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
