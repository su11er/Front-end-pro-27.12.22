const addBtn = document.querySelector('#add-btn');
const removeBtn = document.querySelector('#remove-btn');
const container = document.querySelector('#container');

let count = 0;

addBtn.addEventListener('click', () => {
  count++;
  const textDiv = document.createElement('div');
  textDiv.textContent = `Добавленный div ${count}`;
  textDiv.id = `text-div-${count}`;
  container.appendChild(textDiv);

  textDiv.addEventListener('click', () => {
    textDiv.classList.toggle('active');
  });
});

removeBtn.addEventListener('click', () => {
  const lastDiv = container.lastElementChild;
  if (lastDiv.id.startsWith('text-div-')) {
    container.removeChild(lastDiv);
  }
});