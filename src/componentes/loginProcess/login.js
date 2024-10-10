const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username ||!password) {
    alert('Please enter your username and password.');
    return;
  }


  alert('Login successful!');
  form.reset();
});
