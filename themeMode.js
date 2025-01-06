
const toggleButton = document.createElement('button');
toggleButton.textContent = 'turn dark';

document.body.appendChild(toggleButton);
function toggleMode(toggleButton) {
  const body = document.body;
  if (toggleButton.textContent === 'turn dark')
  {
    body.style.backgroundColor = 'black';
    toggleButton.textContent = 'turn light';
  }  
  if (toggleButton.textContent === 'turn light')
  {
    body.style.backgroundColor = 'lightgrey';
    toggleButton.textContent = 'turn dark';
  }
}
toggleButton.addEventListener('click', function () {
  toggleMode(toggleButton);
});
