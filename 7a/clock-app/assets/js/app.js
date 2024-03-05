const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');
let isPermitShowNotification = false;
let isCreatedNotification = false;
let notificationConter = 0;

document.addEventListener('DOMContentLoaded', (e) => {
  if ('Notification' in window) {
    Notification.requestPermission((request) => {
      if(request === 'granted') {
        isPermitShowNotification = true;
      } else {
        isPermitShowNotification = false;
      }

      if (!isPermitShowNotification) {
        const [input, button] = formAlarm.children;

        input.value = "";
        input.disabled = true;
        button.disabled = true;
      }
    });
  
  }
  
  if (localStorage.getItem('alarma') !== null) {
    const input = formAlarm.children[0];
  
    const alarm = new Date(localStorage.getItem('alarma'));
    console.log(alarm);
    // hh:mm

    input.value = formatNumber(alarm.getHours()) + ":" + formatNumber(alarm.getMinutes());
  }

  getCurrentTime();
});

formAlarm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const value = formData.get('time');

  if (value === null || value === "") {
    alert("Seleccione una hora precisa!!!");
  } else {

    // Obtener las horas y minutos de cada valor
    let alarmHours = parseInt(value.substring(0,2));
    let alarmMinutes = parseInt(value.substring(3));

    const currentDate = new Date();
    const setAlarm = new Date();

    const lasHorasSonMenores = alarmHours < currentDate.getHours();
    const lasHorasSonIguales = alarmHours === currentDate.getHours();
    const losMinutosSonMenoresOiguales = alarmMinutes <= currentDate.getMinutes();

    // if (lasHorasSonMenores || (lasHorasSonIguales && losMinutosSonMenoresOiguales)) {
    //   setAlarm.setDate(setAlarm.getDate() + 1);
    //   setAlarm.setHours(alarmHours);
    //   setAlarm.setMinutes(alarmMinutes);
    //   setAlarm.setSeconds(0);
    // } else {
    //   setAlarm.setHours(alarmHours);
    //   setAlarm.setMinutes(alarmMinutes);
    //   setAlarm.setSeconds(0);
    // }

    if (lasHorasSonMenores || (lasHorasSonIguales && losMinutosSonMenoresOiguales)) {
      setAlarm.setDate(setAlarm.getDate() + 1);
    }

    setAlarm.setHours(alarmHours);
    setAlarm.setMinutes(alarmMinutes);
    setAlarm.setSeconds(0);

    localStorage.setItem("alarma", setAlarm.toString());
  }
});

setInterval(function() {
  getCurrentTime();
}, 1000);

const showAlarm = () => {
  if (isPermitShowNotification && localStorage.getItem('alarma') !== null)  {
    const currentTime = new Date();
    const alarm = new Date(localStorage.getItem('alarma'));

    const isTheSameDay = currentTime.getDate() === alarm.getDate();
    const isTheSameHour = currentTime.getHours() === alarm.getHours();
    const isTheSameMinutes = currentTime.getMinutes() === alarm.getMinutes();

    if (isTheSameDay && isTheSameHour && isTheSameMinutes && notificationConter <= 10) {
      new Notification("This is the alarm!!!!");
      notificationConter++;
    }

    if (notificationConter > 10) {
      formAlarm.children[0].value = "";
      localStorage.removeItem('alarma');
      notificationConter = 0;
    }

  }

    // new Notification("TEst!!!!", {
    //   body: "This is a test of notification!!!!!"
    // });
};

function getCurrentTime () {
  showAlarm();

  const currentDate = new Date();

  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  hours.innerText = formatNumber(currentHours);
  minutes.innerText = formatNumber(currentMinutes);
  seconds.innerText = formatNumber(currentSeconds);
}


function formatNumber (value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }

  // if (value < 10) {
  //   return "0" + value;
  // }

  // return value;
  
  // return value < 10 ? "0" + value : value;
}

// const formatNumber = value => value < 10 ? "0" + value : value;
