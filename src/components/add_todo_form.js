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
        <div className="form-inline justify-content-center">
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" className="form-control" name="description" value={this.state.description} onChange={this.onInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date: </label>
            <input type="text" id="date" className="form-control" name="date" value={this.state.date} onChange={this.onInputChange} required />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodoForm;
