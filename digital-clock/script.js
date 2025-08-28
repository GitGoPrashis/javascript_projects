

// creating the digital clock
const label = document.getElementById("mylabel");


update()
setInterval(update, 1000)

function update(){
    let date = new Date();
    label.innerHTML = formatetime(date);

    function formatetime(){
        let hours = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12 ? "pm" : "am"

        hours = (hours % 12 || 12);

        return `${hours}:${minute}:${seconds} ${amorpm}`
    }

}