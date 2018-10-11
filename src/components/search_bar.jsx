import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          onKeyUp={event => this.onKeyPressed(event.keyCode)}
        />
      </div>
    );
  }

  onKeyPressed(keyCode) {
    if (keyCode !== 13) {
      return;
    }
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
