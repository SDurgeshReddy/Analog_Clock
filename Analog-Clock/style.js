function show_clock(){
    // giving variables to hands

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    // giving fuctions to the hands

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // to decide hands rotating manner

    h.style.transform = `rotate(${30 * hours + minutes/
    2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 *  seconds}deg)`;
}

setInterval(show_clock, 1000);