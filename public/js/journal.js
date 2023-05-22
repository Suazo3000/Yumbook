// Handle form submission
const journalFormHandler = async (event) => {
    event.preventDefault();

    const user = await JSON.parse(localStorage.getItem('user') || {})
    console.log('user data ===', user);
  
    // Get the form inputs
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    // Validate form inputs
    if (title && content) {
      // Send a POST request to create a new journal entry

      const response = await fetch('/api/users/journal', {
        method: 'POST',
        body: JSON.stringify({ title, content, user_id: user ? user.id : 0 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Redirect to the journals page after successful submission
        document.location.replace('/journal');
      } else {
        // Display an error message if the request fails
        alert('Failed to save journal entry');
      }
    }
  };
  
  // Attach form submission event listener
  document.querySelector('.journal-form').addEventListener('submit', journalFormHandler);