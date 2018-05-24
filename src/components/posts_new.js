import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return(
      <div className="form-group">
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
          />
        <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values);  -->  {title: 'asdf', categories: 'fasd', content: 'ghjkl' }
  const errors = {};

  // Validates input from values

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter categories!";
  }
  if (!values.content) {
    errors.content = "Enter content!";
  }

  // if errors is empty, Redux assumes form is fine,
  // if errors has any properties, redux assumes invalid
  return errors;
}

export default reduxForm({
  validate,
  //  value V  just has to be something unique
  form: 'PostsNewForm'
})(PostsNew);
