const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('alarmita') !== null) {
    const input = formAlarm.children[0];
    //  yyyy-mm-ddThh:mm

    localStorage.getItem('alarmita');
    const alarmaFormato = new Date(localStorage.getItem('alarmita'));
    const alarmYear = alarmaFormato.getFullYear();
    const alarmMonth = alarmaFormato.getMonth();
    const alarmDay = alarmaFormato.getDate();
    const alarmHours = alarmaFormato.getHours();
    const alarmMinutes = alarmaFormato.getMinutes();

    input.value = `${alarmYear}-${formatNumber(alarmMonth)}-${formatNumber(alarmDay)}T${formatNumber(alarmHours)}:${alarmMinutes}`;
  }

  if ('Notification' in window) {
    Notification.requestPermission((request) => {
      console.log(request)

      const noti = new Notification("Hola Esta es una tonificacion!!!", { 
        body:  "asdasdasdasdsdads"
      })
    })
  }

  getCurrentTime();
});

setInterval(() => {
  getCurrentTime();
}, 1000);

formAlarm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const value = formData.get('time');
  console.log(value);

  if (value === null || value === "") {
    alert("Establesca una fecha, no sea menso!!!!!");
    return;
  }
    
  const currentDate = new Date();
  const setAlarm = new Date(value);

  if (isValidDate(currentDate, setAlarm)) {
    alert("Fecha Invalida!!!");
    return;
  }

  localStorage.setItem('alarmita', setAlarm.toString());
});


function getCurrentTime() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  hours.innerText = formatNumber(currentHours);
  minutes.innerText = formatNumber(currentMinutes);
  seconds.innerText = formatNumber(currentSeconds);
}

function isValidDate(currentDate, setAlarm) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  const alarmYear = setAlarm.getFullYear();
  const alarmMonth = setAlarm.getMonth();
  const alarmDay = setAlarm.getDate();
  const alarmHours = setAlarm.getHours();
  const alarmMinutes = setAlarm.getMinutes();

  const añoAlarmaEsMenor = alarmYear < currentYear;
  const añoAlarmaIgual = alarmYear === currentYear;
  const mesAlarmaEsMenor = alarmMonth < currentMonth;
  const mesAlarmaIgual = alarmMonth === currentMonth;
  const diaAlarmaEsMenor = alarmDay < currentDay;
  const diaAlarmaIgual = alarmDay === currentDay;
  const horaAlarmaEsMenor = alarmHours < currentHours;
  const horaAlarmaIgual = alarmHours === currentHours;
  const minutosAlarmaEsMenorIgual = alarmMinutes <= currentMinutes;

  return (
    añoAlarmaEsMenor ||
    añoAlarmaIgual && mesAlarmaEsMenor ||
    añoAlarmaIgual && mesAlarmaIgual && diaAlarmaEsMenor ||
    añoAlarmaIgual && mesAlarmaIgual && diaAlarmaIgual && horaAlarmaEsMenor ||
    añoAlarmaIgual && mesAlarmaIgual && diaAlarmaIgual && horaAlarmaIgual && minutosAlarmaEsMenorIgual
  );
}

function formatNumber(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }

  // if (value < 10) {
  //   return "0" + value;
  // }

  // return value;

  // return value < 10 
  //   ? "0" + value
  //   : value;
}

// const formatNumber = value => value < 10 ? "0" + value : value;
