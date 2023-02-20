async function login(email, password) {
  const input = `${email}:${password}`
  const target = `${process.env.REACT_APP_API_URL}/tokens`
  
  const requestOptions = {
    method: 'POST',
    headers: new Headers({
        'Authorization': 'Basic '+ btoa(input), 
        'Content-Type': 'application/json'
    })
  }

  const response = await fetch(target, requestOptions);
  
  if (response.ok) {
    const text = await response.text();
    const { token, name } = JSON.parse(text);
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('loggedIn', true)
    return true
  } else {
    return false
  }
}

function logout() {
  sessionStorage.removeItem('loggedIn')
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('name')
}

function isLoggedIn() {
  return sessionStorage.getItem('loggedIn') == 'true' ? true : false
}

export default { login, logout, isLoggedIn };
