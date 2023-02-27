import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import userService from '../services/user-service.js';
import '../App.css';

function Login(props) {
  const { login } = props;
  const [values, setValues] = useState({email: ``, password: ``});
  const [error, setError] = useState();
  const navigate = useNavigate();

  const changeHandler = ({ target: { name, value } }) => {
    const newState = { ...values, [name]: value };
    setValues(newState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const success = await login(values.email, values.password)
    if (!success) {
      setError('Invalid username or password. Please try again.')
    }

    if (success) {
      navigate('/')
    }
  }

  return(
    <>
      <div className="card">
        Sign in
        <form onSubmit={submitHandler} className="signin">
          <label htmlFor="email">Email</label>
          <input type="text" id="email"
              name="email" placeholder="" value={values.email}
              onChange={changeHandler} />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password"
              name="password" placeholder="" value={values.password}
              onChange={changeHandler} />
            <br />
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
        {error}
        <br />
        <br />
        <a href="password-reset">Forgot your password?</a>
      </div>
      <a href="/">Home</a>
    </>
  )
}

export default Login;
