import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.handleInputChange}/>;
    }

    handleInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;
