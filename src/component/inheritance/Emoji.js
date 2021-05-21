import React, { PureComponent } from 'react';

class Emoji extends PureComponent {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overwrite) {
        let text = 'I am Emoji Component';

        if (overwrite) text = overwrite;

        return <div>{text}</div>;
    }
}

export default Emoji;
