import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '', touched: false, error: false, errorMessage: '',
      },
      password: {
        value: '', touched: false, error: false, errorMessage: '',
      },
    };
  }

    handleEmailChange = (event) => {
      const validator = this.validateEmail(event.target.value);
      this.setState({
        email: {
          value: event.target.value,
          touched: true,
          error: validator.isWrong,
          errorMessage: validator.message,
        },
      });
    };

    handlePasswordChange = (event) => {
      const validator = this.validatePassword(event.target.value);
      this.setState({
        password: {
          value: event.target.value,
          touched: true,
          error: validator.isWrong,
          errorMessage: validator.message,
        },
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitting Auth Form ...');
    };

    validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return {
        isWrong: !re.test(String(email).toLowerCase()),
        message: 'Email must be a valid email',
      };
    };

    validatePassword = (password) => {
      const passwordRegex = /(?=.*[0-9])/;
      let isWrong = !passwordRegex.test(password);
      let message;
      if (!password) {
        message = 'Password is required!';
      } else if (password.length < 8) {
        isWrong = true;
        message = 'Password must be 8 characters long.';
      } else if (isWrong) {
        message = 'Invalid password. Must contain one number';
      }
      return { isWrong, message };
    };

    render() {
      const { email, password } = this.state;
      return (
        <div className="container content-main">
          <div className="row">
            <div className="col-sm">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email.value}
                    onChange={this.handleEmailChange}
                    className={`form-control ${email.error && email.touched ? 'is-invalid' : ''}`}
                  />
                  {email.error && email.touched && (
                  <div className="input-feedback">{email.errorMessage}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    value={password.value}
                    onChange={this.handlePasswordChange}
                    className={`form-control ${password.error && password.touched ? 'is-invalid' : ''}`}
                  />
                  {password.error && password.touched && (
                    <div className="input-feedback">{password.errorMessage}</div>
                  )}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-login btn-block"> Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default Login;
