document.addEventListener('DOMContentLoaded', (event) => {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');
  
  if (savedFontSize) {
    document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
    document.getElementById('fontsize').value = savedFontSize;
  }
  
  if (savedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    document.getElementById('fontcolor').value = savedFontColor;
  }

  document.getElementById('customization-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    setCookie('fontsize', fontSize, 365);
    setCookie('fontcolor', fontColor, 365);
  });
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
