const endDate="8 August 2023 12:00 PM";
document.getElementById("end-date").innerHTML = endDate;

const pData = document.querySelectorAll("p");
setInterval(
    () => {
const end = new Date(endDate);
const timeNow = new Date();

const final = (end-timeNow)/1000;

        pData[0].innerText = Math.floor(final/3600/24);
        pData[1].innerText = Math.floor((final/3600) % 24);
        pData[2].innerText = Math.floor((final/60) % 60);
        pData[3].innerText = Math.floor(final % 60);
        //console.log(pData[0]);
    },
    1000
);