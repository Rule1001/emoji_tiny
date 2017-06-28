import React from 'react';
import EmojiList from './emojiList';
import Search from './search';

import emojis from './emojiList.json';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.emojiFilter = this.emojiFilter.bind(this);
        this.handleFilterInput = this.handleFilterInput.bind(this);
        this.state = {
            filterStr: '',
            emojis
        };

    }

    handleFilterInput(e) {
        this.setState({
            filterStr: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Search Emoji's</h3>
                <Search onChange={this.handleFilterInput} />
                <EmojiList emoji={this.emojiFilter(this.state.emojis)} />
            </div>
        );
    }

    emojiFilter(emojis) {
        const str = this.state.filterStr.toLowerCase();
        return emojis.filter(function (item) {
            // var finder = item.keywords;
            // return str.match(finder)
            var reg = new RegExp(str);

            if (reg.test(item.keywords)) {
                return reg.test(item.keywords);
            } else {
                return reg.test(item.title);

            }

        });
    }
}

export default App;
