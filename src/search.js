import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);
    this.changeHandler = this.changeHandler.bind(this)
    }
    render(){
        return (
            <div>
                <form >
                    <input 
                    type="text" 
                    onChange={this.changeHandler}
                   />
                </form>
            </div>
        )
    }
  changeHandler (event) {
    // console.log(event.target.value)
    event.preventDefault();
    const stringMatch = event.target.value
    this.props.emojiFilter(this.props.emoji, stringMatch)
  }
}

export default Search;