//------------------------------Timer------------------------------

    const countdown = () => {
    const countDate = new Date ('July 5, 2025 00:00:00').getTime();
    const now = new Date();

    const gap = countDate - now;

    //Set up time

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate time gap

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Update the HTML
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    }

    setInterval(countdown,1000);

//------------------------------Pop Up------------------------------

    function abrirPopup() {
      document.getElementById("miPopup").style.display = "flex";
    }

    function cerrarPopup() {
      document.getElementById("miPopup").style.display = "none";
    }