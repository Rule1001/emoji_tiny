import React from 'react';
import Emoji from './emojis';


class EmojiList extends React.Component {
    render() {
        return(
            <div>
                <h3>emoji list</h3>
                <Emoji/>
                <Emoji/>
                <Emoji/>
                <Emoji/>
                <Emoji/>
                <Emoji/>
            </div>
        )


    }


}

export default EmojiList;