const DOMSelectors = {
  form: document.getElementById('myForm'),
  artistInput: document.getElementById('artist cover'),
  genreInput: document.getElementById('genre'),
  albumInput: document.getElementById('album'),
  submitButton: document.getElementById('submit'),
  outputDiv: document.getElementById('output')
};


DOMSelectors.form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get user input from form
  const artist = DOMSelectors.artistcoverInput.value;
  const genre = DOMSelectors.genreInput.value;
  const album = DOMSelectors.albumInput.value;

  // Create a JavaScript object with the user's data
  const userData = {
    artist: artist,
    genre: genre,
    album : album
  };

  // Create HTML content to display the user's data
  const userDataHTML = `
      <p>artist: ${userData.artist}</p>
      <p>genre: ${userData.genre}</p>
  `;

  // Append the HTML content to the output div
  DOMSelectors.outputDiv.innerHTML = userDataHTML;

  // Clear the form inputs
  DOMSelectors.artistInput.value = '';
  DOMSelectors.genreInput.value = '';
  DOMSelectors.albumInput.value = '';
});

