import React from 'react';
import PropTypes from 'prop-types';


//console.log(emojiArr[0])

class Emoji extends React.Component {
    render() {
        return (
            <div>
               <span>{this.props.symbol}</span>
                <span>{this.props.title}</span>
                   
            </div>
        )
    }
}

 Emoji.propTypes = {
    symbol: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
 };

export default Emoji;