import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return(
      <Form
        name="title"
        component={}
      </Form>
    );
  }
}

export default reduxForm({
  //  value V  just has to be something unique
  form: 'PostsNewForm'
})(PostsNew);
