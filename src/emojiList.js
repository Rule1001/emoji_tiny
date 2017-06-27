import React from "react";
import Emoji from "./emojis";

const emojis = [
  {
    title: "100",
    symbol: "💯",
    keywords: "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  },
  {
    title: "1234",
    symbol: "🔢",
    keywords: "input symbol for numbers symbol"
  },
  {
    title: "Grinning",
    symbol: "😀",
    keywords: "grinning face happy smiley emotion emotion"
  },
  {
    title: "Grimacing",
    symbol: "😬",
    keywords: "grimacing face silly smiley emotion emotion selfie selfie"
  }
];

class EmojiList extends React.Component {
  render() {
    return (
      <div>
        <h2>list</h2>
        {emojis.map(function(emoji) {
          return <Emoji 
          symbol={emoji.symbol} 
          title={emoji.title} />;
        })}

      </div>
    );
  }
}

export default EmojiList;
