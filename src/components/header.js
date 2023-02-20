import { useState } from "react";
import userService from '../services/user-service.js';

function LoginButton() {
  return <a href="/login">Log In</a>
}

function LogoutButton(props) {

  return <a href="/login" {...props}>Log Out</a>
}

function Header() {
  const logout = (event) => {
    event.preventDefault();
    userService.logout()
    setIsLoggedIn(false)
  }

  const cta = userService.isLoggedIn() ? <LogoutButton onClick={logout}/> : <LoginButton />
  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn())
  const name = sessionStorage.getItem('name')

  return(
    <div className="header">
      {cta}
      {isLoggedIn && <h4>Welcome, {name}</h4>}
    </div>
  )
}

export default Header;
