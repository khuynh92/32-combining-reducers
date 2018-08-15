import React, { Component } from 'react';

export default class  extends Component {
  render() {
    return (
      <ListItem expense={this.props.expense} />
    );
  }
}

const ListItem = (props) => {
  return (
    <p>{props.expense.expense}: ${props.expense.price}</p>
  );
};