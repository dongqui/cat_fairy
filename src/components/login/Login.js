import React from 'react';
import './Login.css';
import fairy from '../../asset/img/pairFairy.png';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../shared/Buttons';

function Login() {

  return (
    <main className="login-container">
      <section className="login-left login-base">
        <img className="img-fairy" src={fairy} />
        <p>개발자가 혼자 디자인하고,</p>
        <p>혼자 기획하고, </p>
        <p>혼자 개발하면 </p>
        <p>이렇게 된단다. </p>
        <p style={{marginTop: "50px"}}>팀을 구하자.</p>
      </section>
      <section className="login-right login-base">
        <div className="login-input-container">
          <form className="login-form">
            <h2>로그인</h2>
            <input className="login-input login-email" placeholder="ID"/>
            <input className="login-input login-password" placeholder="Password"/>
            <DefaultButton text="로그인" variant="contained"  color="primary" fullWidth/>
          </form>
          <footer>
            <Link
              exact
              to={`/signUp`}>
              Sign up
            </Link>
          </footer>
        </div>
      </section>
    </main>
  )
}



export default Login;