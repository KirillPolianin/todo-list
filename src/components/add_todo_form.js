import React, { Component } from 'react';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      description: ""
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
      date: "",
      description: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onInputSubmit}>
        <fieldset>
          <legend>Add todo:</legend>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" name="description" value={this.state.description} onChange={this.onInputChange} required />
          <label htmlFor="date">Date: </label>
          <input type="text" id="date" name="date" value={this.state.date} onChange={this.onInputChange} required />
          <input type="submit" value="Add" />
        </fieldset>
      </form>
    );
  }
}

export default AddTodoForm;
