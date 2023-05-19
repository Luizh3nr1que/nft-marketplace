window.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');

    function updateTimer() {
        var now = new Date();
        var days = now.getDay();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();


        var formattedTime =
            ('0' + days).slice(-2) + 'd ' +
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + seconds).slice(-2);


        timerElement.textContent = formattedTime;
    }

    setInterval(updateTimer, 1000); // Atualiza o cronômetro a cada segundo
});
