// Function to render journal entries on the page
const renderJournalEntries = (entries) => {
  const journalList = document.querySelector('.journal-entries ul');
  journalList.innerHTML = ''; // Clear existing entries

  entries.forEach((entry) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.content}</p>
    `;
    journalList.appendChild(listItem);
  });
};

// Function to fetch and display journal entries
const fetchJournalEntries = async () => {
  try {
    const response = await fetch('/api/users/journal');
    if (response.ok) {
      const entries = await response.json();
      renderJournalEntries(entries);
    } else {
      console.error('Failed to fetch journal entries');
    }
  } catch (error) {
    console.error('Error fetching journal entries:', error);
  }
};

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
        // Fetch and display updated journal entries after successful submission
    fetchJournalEntries();
      } else {
        // Display an error message if the request fails
        alert('Failed to save journal entry');
      }
    }
  };
  
  // Attach form submission event listener
  document.querySelector('.journal-form').addEventListener('submit', journalFormHandler);

  fetchJournalEntries();

  