import Bracket from './component/composition/Bracket';
import Emoji from './component/composition/Emoji';
import Text from './component/composition/Text';

function App() {
    return (
        <Emoji>
            {/* {({ addEmoji }) => <Text addEmoji={addEmoji} />} */}
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji>
    );
}

export default App;
