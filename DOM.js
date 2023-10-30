<<<<<<< HEAD
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
=======
const DomSelectors = {
    form: document.getElementById('p'),
    nameInput: document.getElementById(`a`),
    hobbyInput: document.getElementById('m'),
    addDataButton: document.getElementById('i'),
    dataList: document.getElementById('s'),
}

function createDataObject(name, hobby) {
    return { name, hobby};
  }

  function injectDataObject(dataObject) {
    const dataItem = document.createElement('div');
    dataItem.innerHTML = `<strong>Name:</strong> ${dataObject.name}, <strong>hobby:</strong> ${dataObject.hobby}
    <button class="remove-data">Remove</button>`;
    DOMSelectors.dataList.appendChild(dataItem);
  }

  function clearInputFields() {
    DOMSelectors.nameInput.value = 'x';
    DOMSelectors.hobbyInput.value = 'y';
  }

  function removeDataObject(event) {
    if (event.target.classList.contains('remove-data')) {
      event.target.parentElement.remove();
    }
  }

  DOMSelectors.addDataButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const hobby = DOMSelectors.emailInput.value;
    if (name && hobby) {
      const dataObject = createDataObject(name, hobby);
      injectDataObject(dataObject);
      clearInputFields();
    }
  });

  DOMSelectors.dataList.addEventListener('click', removeDataObject);


>>>>>>> d2dd754c21e9e08e67bafad674867ea5b4540c29
