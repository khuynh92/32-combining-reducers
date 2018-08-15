import React, { Component } from 'react';
export default class ExpenseForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expense: '',
      price: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete({ ...this.state, categoryID: this.props.category.id });

    this.setState({
      expense: '',
      price: '',
    });

    this.props.handleCancel();

  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} >
          <label >
            Expense :
            <input type="text" name="expense" onChange={this.handleChange} value={this.state.expense} />
          </label>
          <label >
            Price:
            <input type="number" name="price" onChange={this.handleChange} value={this.state.price} />
          </label>
          <br />
          <input type="submit" />
        </form>
        <button onClick={this.props.handleCancel}>cancel</button>
      </React.Fragment>
    );
  }
}
