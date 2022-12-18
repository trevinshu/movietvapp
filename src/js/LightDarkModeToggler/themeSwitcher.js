const button = document.getElementById('colorModeIcon');
let lightMode = localStorage.getItem('lightMode');

//Enable Light Mode
const enableLightMode = () => {
  document.body.classList.add('light');
  button.classList.add('fa-moon');
  button.classList.remove('fa-sun');
  localStorage.setItem('lightMode', 'enabled');
};

//Disable Light Mode
const disableLightMode = () => {
  document.body.classList.remove('light');
  button.classList.remove('fa-moon');
  button.classList.add('fa-sun');
  localStorage.setItem('lightMode', null);
};

//Load Light Mode If Enabled On Previous Visit
if (lightMode === 'enabled') {
  enableLightMode();
}

//Toggle Light Mode On/Off
const themeToggler = toggleColorScheme.addEventListener('click', (e) => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
  e.preventDefault();
});

export default themeToggler;
