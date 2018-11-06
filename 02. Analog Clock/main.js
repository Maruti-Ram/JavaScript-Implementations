const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    
    const minute = now.getMinutes();
    const minDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hrDegrees = ((hour / 12) * 360) + 90;
    hrHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(setDate, 1000);
