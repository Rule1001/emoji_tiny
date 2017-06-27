import React from "react";
import EmojiList from "./emojiList";
import Search from "./search";

import emojis from './emojiList.json'


class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          emojis
      }
      this.emojiFilter = this.emojiFilter.bind(this)
  }
  render() {
    return (
      <div>
        <h3>Search Emoji's</h3>
        <Search text="text" onChange={this.changeHandler}/>
        <EmojiList emoji={this.state.emojis}/>
      </div>
    );
  }
  emojiFilter(emojis, str) {
    str.toLowerCase()
    return emojis.filter(function (item) {
        var finder = item.keywords
        return eval('/' + str + '/').test(finder)
    });
    this.setState({
        emojis
    })
    }
}

export default App;
