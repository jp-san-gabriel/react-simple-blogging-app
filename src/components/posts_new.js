import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
      return (
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            {...field.input}
          />
        </div>
      );
  }

  renderCategoriesField(field) {
      return (
        <div className="form-group">
          <label>Categories</label>
          <input
            className="form-control"
            type="text"
            {...field.input}
          />
        </div>
      );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
        <Field
          name="categories"
          component={this.renderCategoriesField}
        />
      </form>
    );
  }

}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
