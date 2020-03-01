import React from 'react';

import PropTypes from 'prop-types';

import { reduxForm, Form, Field } from 'redux-form';
import { useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import InputMulti from '../../components/Input/InputMulti';
import Input from '../../components/Input/Input';

import { actionsPosts } from '../../store/ducks/posts';

const NewPost = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const handleSave = (values) => dispatch(actionsPosts.addPost(values));

  return (
    <Container>

      <Form onSubmit={handleSubmit((values) => handleSave(values))}>
        <Field
          name="title"
          component={Input}
          label="Title"
        />
        <Field
          name="subTitle"
          component={Input}
          label="SubTitle"
        />
        <Field
          name="body"
          component={InputMulti}
          label="Body"
        />

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '7px', float: 'right' }}> Save </Button>
      </Form>
    </Container>
  );
};

NewPost.propTypes = {
  // func
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'newPost',
})(NewPost);
