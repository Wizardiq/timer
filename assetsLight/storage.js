const deadline = localStorage.getItem('time')

if(localStorage.getItem("exists")){
     document.getElementById("main").style.display = "none";
    initializeClock(deadline);
}

document.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("name");
    localStorage.setItem("name", inputName.value);

    const inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);

    const inputZip = document.getElementById("zip");
    localStorage.setItem("zip", inputZip.value);

    const requestNum = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    localStorage.setItem("request", `${requestNum}`);

    const time = 3013 * 60 * 1000,
        fixDate = new Date(Date.parse(new Date().toString()) + time).toString();

    if(!deadline) {
        localStorage.setItem('time', fixDate)
    }
    localStorage.setItem("exists", "1");
    document.querySelector(".form").submit();
})





function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date().toString());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    const nav = document.querySelector(".nav1");
    const info = document.createElement("div");
    function updateClock() {
        const t = getTimeRemaining(endtime);
        let days = t.days,
        hours = ('0' + t.hours).slice(-2),
        minutes = ('0' + t.minutes).slice(-2),
        seconds = ('0' + t.seconds).slice(-2);

        const storageName = localStorage.getItem("name"),
            storageEmail = localStorage.getItem("email"),
            storageRequest = localStorage.getItem("request");

            info.className = "col-12 mt-3 text-center info-block";

        info.innerHTML = `
        <div class="mb-3">Спасибо ${storageName}! Ваш емейл "${storageEmail}"</div>
        <div class="mb-3">Номер вашей заявки - ${storageRequest}</div>
        <div>Ожидайте ${days} дня ${hours} часа ${minutes} минут ${seconds} секунд, мы подбираем вам подходящие предложения.</div>
        `;

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    nav.after(info);
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}





