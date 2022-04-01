const watch = document.querySelector('#watch')
const lap = document.querySelector('#lap')
const result = document.querySelector('.results')
let milSec = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer)
    timer = setInterval( () => {
        milSec += 10;
        let dateTimer = new Date(milSec)
        watch.innerHTML = ('0' +dateTimer.getUTCHours()).slice(-2) + ':' +
                         ('0' +dateTimer.getUTCMinutes()).slice(-2) + ':' +
                         ('0' +dateTimer.getUTCSeconds()).slice(-2) + ':' +
                         ('0' +dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};



const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
}

const resetWatch = () => {
    watch.classList.remove('paused')
    clearInterval(timer)
    milSec = 0;
    watch.innerHTML = '00:00:00:00'
    result.innerHTML = ''
}

const lapWatch = () => {
    let h3 = document.createElement('h3')
    h3.classList.add('laps')
    h3.textContent = watch.innerHTML
    result.append(h3)
}

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'lap') lapWatch();
    if (element.id === 'pause') pauseWatch();
    if (element.id === 'reset') resetWatch();
})