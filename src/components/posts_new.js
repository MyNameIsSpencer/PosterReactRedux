import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return(
      <div>
        <input
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  //  value V  just has to be something unique
  form: 'PostsNewForm'
})(PostsNew);
