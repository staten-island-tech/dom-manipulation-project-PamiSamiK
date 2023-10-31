const DOMSelectors = {
  form: document.getElementById('myForm'),
  artistInput: document.getElementById('artist'),
  genreInput: document.getElementById('genre'),
  albumInput: document.getElementById('album'),
  submitButton: document.getElementById('submit'),
  outputDiv: document.getElementById('output')
};

DOMSelectors.form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get user input from form
  const artist = DOMSelectors.artistInput.value;
  const genre = DOMSelectors.genreInput.value;
  const album = DOMSelectors.albumInput.value;

  // Create a JavaScript object with the user's data
  const userData = {
    artist: artist,
    genre: genre,
    album: album
  };

  // Create an HTML card for the user's data
  const userDataHTML = `
    <div class="card">
      <p>Artist: ${userData.artist}</p>
      <p>Genre: ${userData.genre}</p>
      <p>Album: ${userData.album}</p>
    </div>
  `;

  // Append the HTML card to the output div
  DOMSelectors.outputDiv.innerHTML += userDataHTML;

  // Clear the form inputs
  DOMSelectors.artistInput.value = '';
  DOMSelectors.genreInput.value = '';
  DOMSelectors.albumInput.value = '';
});
  
function inject(alb) {
  DOMSelectors.page.insertAdjacentHTML(
    "beforeend",
    <div class="box">
    <h2>${alb.artist}</h2>
    <h3>${alb.genre}</h3>
    <h4>${alb.album}</h4>
    </div>
  )
} 