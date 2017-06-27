import React from "react";
import Emoji from "./emojis";



class EmojiList extends React.Component {
//   constructor (props){
//     super(props)

//   }

  render() {
    return (
      <div>
        <h2>list</h2>
        {this.props.emoji.map(function(emoji) {
          return <Emoji 
          symbol={emoji.symbol} 
          title={' ' + emoji.title} />;
        })}

      </div>
    );
  }
}

export default EmojiList;
