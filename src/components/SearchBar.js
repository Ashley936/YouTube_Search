import React from "react";

class SearchBar extends React.Component {
  state = { value: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value)
  };

  render() {
    return (
      <div className="ui raised segment" style={{ marginTop: "30px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui blue ribbon label">Video Search</div>
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              style={{ marginTop: "10px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
