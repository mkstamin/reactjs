import ClockList from './component/ClockList';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantities={quantities} />
        </div>
    );
}

export default App;
