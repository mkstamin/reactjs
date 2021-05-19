import Clock from './Clock';

function ClockList({ quantities = [] }) {
    return (
        <div>
            {quantities.map(() => (
                <Clock key={Math.random()} /> // key তে index ব্যাহার করা গুড প্রাক্টিস না
            ))}
        </div>
    );
}

export default ClockList;
