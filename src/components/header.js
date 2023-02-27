import { useState } from "react";
import userService from '../services/user-service.js';

function LoginButton() {
  return <a href="/login">Log In</a>
}

function LogoutButton(props) {

  return <a href="/login" {...props}>Log Out</a>
}

function Header(props) {
  const { logout } = props
  const isLoggedIn = userService.isLoggedIn()
  const cta = isLoggedIn ? <LogoutButton onClick={logout}/> : <LoginButton />
  const name = userService.getName()

  return(
    <div className="header">
      {cta}
      {isLoggedIn && <h4>Welcome, {name}</h4>}
    </div>
  )
}

export default Header;
