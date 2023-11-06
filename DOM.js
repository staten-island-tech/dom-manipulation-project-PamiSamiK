const DOMSelectors = {
  form: document.querySelector('#myForm'),
  artistInput: document.querySelector('#artist'),
  genreInput: document.querySelector('#genre'),
  albumInput: document.querySelector('#album'),
  outputDiv: document.querySelector('#output'),
};
function create(){
  
}
function inject() {
  DOMSelectors.outputDiv.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box">
    <h2>${DOMSelectors.artistInput}</h2>
    <h3>${DOMSelectors.genreInput}</h3>
    <img src="${DOMSelectors.albumInput}"alt="">
    </div>`
)} 
DOMSelectors.form.addEventListener('submit', function (event) {
  event.preventDefault();
  create() // Prevent the default form submission behavior

  // Get user input from form


  inject()
});  










