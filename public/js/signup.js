// form element
const signupForm = document.querySelector('.signup-form');

// Event listener for form submission
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // input values
  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Perform form validation
  if (email && password) {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to sign up');
      }
    } catch (error) {
      console.error(error);
      // Display error message
      const errorMessage = document.querySelector('.alert-danger');
      if (errorMessage) {
        errorMessage.textContent = error.message;
      }
    }
  }
});