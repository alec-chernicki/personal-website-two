import React from 'react';
import Button from '../../components/Button/Button';
import styles from './ContactForm.css';
import CSSModules from 'react-css-modules';
import { Form, Text, Textarea } from 'react-form';

const _onSubmit = (values) => {
  console.log('submitted:', values);
};

const _validate = ({name, email, message}) => {
  return {
    name: !name ? 'A name is required' : null,
    email: (!email || email.length < 6) ? 'Invalid email' : null,
    message: !message ? 'Please enter your message' : null,
  }
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderForm = this.renderForm.bind(this);
  }
  renderForm({submitForm}) {
    return (
      <form onSubmit={submitForm}>
        <div className={styles['control']}>
          <Text field='name' placeholder='Full name' className={styles['input']} />
        </div>
        <div className={styles['control']}>
          <Text field='email' placeholder='Email' className={styles['input']} />
        </div>
        <div className={styles['control']}>
          <Textarea field='message' placeholder='Message' className={styles['input']} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    )
  }
  render() {
    return (
      <div styleName="contact-form">
        <Form
          onSubmit={_onSubmit}
          validate={_validate}
        >
          {this.renderForm}
        </Form>
      </div>
    )
  }
}

export default CSSModules(ContactForm, styles);
