import React from "react";
import EmojiList from "./emojiList";
import Search from "./search";

class App extends React.Component {
  // constructor (props) {
  //     super(props);
  //     this.state = {
  //         emoji: this.props.emoji
  //     }
  // }
  render() {
    return (
      <div>
        <h3>Search Emoji's</h3>
        <Search />
        <EmojiList />
      </div>
    );
  }
}

export default App;
