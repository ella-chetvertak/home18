// First
class Timer {
    constructor() {
        this.timestamp = undefined;
    }

    static calcDiff() {
        const newTimestamp = Date.now();
    
        const storedTimestamp = this.timestamp || 0;

        this.timestamp = newTimestamp;

        if (!storedTimestamp) {
            console.log('Enabled');
    
            return;
        }

        const diff = Math.floor((newTimestamp - storedTimestamp) / 1000);
    
        console.log(`${diff} seconds passed`);
    }
}

const getTime = () => Timer.calcDiff();

// First
function getTimePassedAlt() {
    window.addEventListener('beforeunload', () => {
        localStorage.removeItem('timestamp');
    });

    const newTimestamp = Date.now();

    const storedTimestamp = +localStorage.getItem('timestamp') || 0;

    localStorage.setItem('timestamp', newTimestamp);

    if (!storedTimestamp) {
        console.log('Enabled');

        return;
    }

    const diff = Math.floor((newTimestamp - storedTimestamp) / 1000);

    console.log(`${diff} seconds passed`);
}

// Second

function timerAlt(time) {
    let countdown = time;

    const timerInterval = setInterval(() => {
        if (!countdown) {
            clearInterval(timerInterval);
        }

        const minutes = Math.floor(countdown / 60);
        const minutesLong = minutes < 10 ? `0${minutes}` : minutes;

        const seconds = countdown % 60;
        const secondsLong = seconds < 10 ? `0${seconds}` : seconds;

        console.log(`${minutesLong}:${secondsLong}`);

        countdown -= 1;
    }, 1000)
}
