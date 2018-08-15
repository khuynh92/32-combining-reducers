import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryDestroy, editCurrent, categoryUpdate, cancelBtn } from '../../../action/category-actions.js';

import CategoryForm from '../category-form/CategoryForm.js';
import ExpenseContainer from '../../expense/expense-container/ExpenseContainer.js';

import './CategoryItem.scss';

class CategoryItem extends Component {
  render() {
    return (
      !this.props.editing ? <ListItem categoryDestroy={this.props.categoryDestroy} editCurrent={this.props.editCurrent} category={this.props.category} /> : <UpdateForm categoryUpdate={this.props.categoryUpdate} cancelBtn={this.props.cancelBtn} category={this.props.category} />
    );
  }
}

const ListItem = (props) => {
  return (
    <li onDoubleClick={() => props.editCurrent(props.category)}>
      <button onClick={() => props.categoryDestroy(props.category)}>x</button>
      <div>
        <h4 className="category-name">{props.category.name}</h4>
        <p> Budget: ${props.category.budget}</p>
        <br />
        <h6>Expenses:</h6>
        <br />
        <ExpenseContainer category={props.category}/>
      </div>
    </li>
  );
};

const UpdateForm = (props) => (
  <li className="editing">
    <CategoryForm buttonText='update' onComplete={props.categoryUpdate} category={props.category} />
    <button onClick={() => props.cancelBtn(props.category)}>cancel</button>
  </li>
);

const mapDispatchToProps = dispatch => {
  return {
    cancelBtn: category => dispatch(cancelBtn(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
    editCurrent: category => dispatch(editCurrent(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);