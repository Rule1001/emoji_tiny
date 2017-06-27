import React from 'react';
import EmojiList from './emojiList';
import Search from './search';

class App extends React.Component {
    render () {
        return (
            <div>
                <h3>welcome to my emoji app</h3>
                <Search />
                <EmojiList />
            </div>
        );

    }
}

export default App;

