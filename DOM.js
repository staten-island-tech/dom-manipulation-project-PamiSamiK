const DOMSelectors = {
  form: document.getElementById('myForm'),
  nameInput: document.getElementById('name'),
  hobbyInput: document.getElementById('hobby'),
  submitButton: document.getElementById('submit'),
  outputDiv: document.getElementById('output')
};


DOMSelectors.form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get user input from form
  const name = DOMSelectors.nameInput.value;
  const hobby = DOMSelectors.hobbyInput.value;

  // Create a JavaScript object with the user's data
  const userData = {
      name: name,
      hobby: hobby
  };

  // Create HTML content to display the user's data
  const userDataHTML = `
      <p>Name: ${userData.name}</p>
      <p>Hobby: ${userData.hobby}</p>
  `;

  // Append the HTML content to the output div
  DOMSelectors.outputDiv.innerHTML = userDataHTML;

  // Clear the form inputs
  DOMSelectors.nameInput.value = '';
  DOMSelectors.hobbyInput.value = '';
});

