const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();


  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),

    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    response.json().then((res) => {
      // console.log('user login res ===', res)
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user))
      }
    })
    
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
}


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
