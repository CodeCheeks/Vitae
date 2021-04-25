import './Login.css'
import React, { Suspense, useState } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../../hooks/useUser';
import { login } from '../../../services/AuthService';
import { setAccessToken } from '../../../store/AccessTokenStore';


// eslint-disable-next-line no-useless-escape
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const validators = {
  email: (value) => {
    let message;

    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }

    return message;
  },
  password: (value) => {
    let message;

    if (!value) {
      message = "Password is required";
    } else if (value && value.length < 8) {
      message = "Incorrect password";
    }

    return message;
  },
};

const Login = () => {
  const { push } = useHistory();
  const { getUser: doLogin } = useUser();
  const { t } = useTranslation();

  const [state, setState] = useState({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: validators.email(),
      password: validators.password(),
    },
  });

  const [touched, setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    const { fields } = state;
    e.preventDefault();

    if (isValid()) {
      login(fields)
      .then((response) => {
        setAccessToken(response.access_token);
        doLogin().then(() => push("/area-personal"));
      })
      .catch(error => {
        console.log("Auth ERROR")
        console.log(error)
      })
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const { email, password } = state.fields;
  const { errors } = state;

 
  return (

    <div className="Login mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: 500 }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          {t('login.email.title')}
          </label>
          <input
            className={`form-control custom__input ${touched.email && errors.email ? "is-invalid" : ""}`}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.email==="Email is required" ?  t('login.email.error.required') : t('login.email.error.invalid')}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          {t('login.pass.title')}
          </label>
          <input
            className={`form-control ${
              touched.password && errors.password ? "is-invalid" : ""
            }`}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.password==="Password is required" ?  t('login.pass.error.required') : t('login.pass.error.invalid')}</div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={!isValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};



export default function App() {
  return (
    <Suspense fallback="loading">
      <Login />
    </Suspense>
  );
}