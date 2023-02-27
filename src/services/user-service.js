async function login(email, password) {
  const input = `${email}:${password}`
  const target = `${process.env.REACT_APP_API_URL}/tokens`
  
  const requestOptions = {
    method: 'POST',
    headers: new Headers({
        'Authorization': 'Basic '+ btoa(input), 
        'Content-Type': 'application/json',
        mode: 'cors',
    })
  }

  const response = await fetch(target, requestOptions);
  
  if (response.ok) {
    const text = await response.text();
    const { token, name } = JSON.parse(text);
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('isLoggedIn', true)
    return true
  } else {
    return false
  }
}

function logout() {
  sessionStorage.removeItem('isLoggedIn')
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('name')
}

function isLoggedIn() {
  return sessionStorage.getItem('isLoggedIn') == 'true' ? true : false
}

function getName() {
  return sessionStorage.getItem('name')
}

export default { getName, login, logout, isLoggedIn };
