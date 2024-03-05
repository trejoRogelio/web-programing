const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');
const alarm = localStorage.getItem('alarma');
let isPermitShowNotification;

document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window) {
    Notification.requestPermission((request) => {
      isPermitShowNotification = request === 'granted';
    });
  }
  
  if (localStorage.getItem('alarma') !== null) {
    const input = formAlarm.children[0];
    const alarm = new Date(localStorage.getItem('alarma'));

    input.value = formatNumber(alarm.getHours()) + ":" + formatNumber(alarm.getMinutes());
  }

  getCurrentTime();

});

formAlarm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const value = formData.get('time');

  if (value === null || value === "")
    return alert("Seleccione una hora precisa!!!");
  
    // Obtener las horas y minutos de cada valor
  let alarmHours = parseInt(value.substring(0,2));
  let alarmMinutes = parseInt(value.substring(3));

  const currentDate = new Date();
  const setAlarm = new Date();

  const lasHorasSonMenores = alarmHours < currentDate.getHours();
  const lasHorasSonIguales = alarmHours === currentDate.getHours();
  const losMinutosSonMenoresOiguales = alarmMinutes <= currentDate.getMinutes();

  (lasHorasSonMenores || (lasHorasSonIguales && losMinutosSonMenoresOiguales)) && setAlarm.setDate(setAlarm.getDate() + 1);
  
  setAlarm.setHours(alarmHours);
  setAlarm.setMinutes(alarmMinutes);
  setAlarm.setSeconds(0);

  localStorage.setItem("alarma", setAlarm.toString());
});

async function getCurrentTime () {
  const currentDate = new Date();

  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  hours.innerText = formatNumber(currentHours);
  minutes.innerText = formatNumber(currentMinutes);
  seconds.innerText = formatNumber(currentSeconds);

  window.requestAnimationFrame(getCurrentTime)
}

function setAlarm() {
  const [inputDate] = formAlarm.children;
  const alarm = new Date(localStorage.getItem('alarma'));
  const hoursAlarm = alarm.getHours();
  const minutesAlarm = alarm.getMinutes();

  inputDate.value = `${formatNumber(hoursAlarm)}:${formatNumber(minutesAlarm)}`;
}

const formatNumber = value => value < 10 ? `0${value}` : value;