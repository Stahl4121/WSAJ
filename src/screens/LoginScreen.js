//from a sandbox tutuorial

import React from "react";

import LogForm from '../components/LoginForm.js';

//const { email, password, submitting } = this.state;

export default function ContactScreen() {
  return (
      <div>
          <LogForm
            email='no@no.no'
            password='abc'
            submitting='false'
          />
      </div> 
  );
}

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      submitting: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    if (onSubmit) {
      this.setState({ submitting: true });
      onSubmit(email, password);
    }
  };

  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };

}

