import React from 'react';
import { useState, useEffect} from 'react';
import { signup, isAuth } from '../../actions/auth';
import Router from 'next/router';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Marvin2',
    email: 'Marv2@gmail.com',
    username: 'Marvelo2',
    password: '12345678901',
    error: '',
    loading: false,
    msg: '',
    showForm: true
  });

  const {
    name,
    email,
    username,
    password,
    error,
    loading,
    message,
    showForm } = values;

  useEffect(() => { // will run each time there's a change in state
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); /* So page doesn't reload */
    setValues({
      ...values,
      loading: true,
      error: false
    });
    const user = { name, email, username, password };

    signup(user)
    .then(data => {
      if(data.error) { //send error as string, or you may get browser errors
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          username: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false
       });
      }
    })
    .catch( err => {
      console.log(err);
    });
  };

  const handleChange = name => e => { /* fxn returning another fxn */
    setValues({
       ...values, /* means keep values already stored and set following values */
       error: false,
       [name]: e.target.value
     });
  };

  const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
  const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');
  const signupForm = () => {
    return(
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input value={name}
                   onChange={handleChange('name')}
                   type="text"
                   className="form-control"
                   placeholder="Enter your name."
             />
          </div>

          <div className="form-group">
            <input value={email}
                   onChange={handleChange('email')}
                   type="email"
                   className="form-control"
                   placeholder="Enter your email."
            />
          </div>

          <div className="form-group">
            <input value={username}
                   onChange={handleChange('username')}
                   type="text"
                   className="form-control"
                   placeholder="Enter a username."
            />
          </div>

          <div className="form-group">
            <input value={password}
                   onChange={handleChange('password')}
                   type="password"
                   className="form-control"
                   placeholder="Enter a password."
            />
          </div>

          <div>
            <button className="btn-primary"> Sign Up </button>
          </div>
        </form>
      );
  };

  return(
      <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signupForm()}
      </React.Fragment>
    );
};

export default SignupComponent;
