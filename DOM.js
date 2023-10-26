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


