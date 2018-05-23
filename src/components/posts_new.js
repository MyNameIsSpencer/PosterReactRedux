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
      </div>
    );
  }



  render() {
    return(
      <form>
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
          name=""
          component={this.renderField}
          />
      </form>
    );
  }
}

export default reduxForm({
  //  value V  just has to be something unique
  form: 'PostsNewForm'
})(PostsNew);
