import { PureComponent } from 'react';

class Emoji extends PureComponent {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        const { children } = this.props;
        return children({ addEmoji: this.addEmoji });
    }
}

export default Emoji;
