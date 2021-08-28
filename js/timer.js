function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(time) {
    // timer
    const deadline = Date.parse(new Date()) + (time * 1000);
    function calcTimeRemaining(deadline) {
        let timeRemaining = (deadline - (Date.parse(new Date()))) / 1000,
            minutesRemaining = Math.floor(timeRemaining / 60),
            secondsRemaining = Math.floor(timeRemaining % 60);
        return {
            'totalTimeRemaining': timeRemaining,
            'minutesRemaining': minutesRemaining,
            'secondsRemaining': secondsRemaining
        };
    }
    setClock();
    function setClock() {
        const minutesRemaining = document.querySelector('#minutes'),
            secondsRemaining = document.querySelector('#seconds'),
            timer = setInterval(setClock, 1000);

        minutesRemaining.innerHTML = getZero(calcTimeRemaining(deadline).minutesRemaining);
        secondsRemaining.innerHTML = getZero(calcTimeRemaining(deadline).secondsRemaining);
        if (calcTimeRemaining(deadline).totalTimeRemaining <= 0) {
            clearInterval(timer);
            minutesRemaining.innerHTML = "00";
            secondsRemaining.innerHTML = "00";
        }

    }
}

export default timer;
export { getZero };