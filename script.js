window.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');
    var countdown = 7 * 24 * 60 * 60;

    function updateTimer() {
        var days = Math.floor(countdown / (24 * 60 * 60));
        var hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((countdown % (60 * 60)) / 60);
        var seconds = Math.floor(countdown % 60);

        var formattedTime =
            ('0' + days).slice(-2) + 'd ' +
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + seconds).slice(-2);

        timerElement.textContent = formattedTime;

        if (countdown <= 0) {
            clearInterval(timerInterval);
            countdown = 7 * 24 * 60 * 60;
            setTimeout(function () {
                timerInterval = setInterval(updateTimer, 1000);
            }, 1000);
        }

        countdown--;
    }

    var timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});
