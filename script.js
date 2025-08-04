document.addEventListener("DOMContentLoaded", function () {
    const discordImage = document.querySelector(".discord img");
    const loadingScreen = document.getElementById("loading-screen");

    discordImage.onload = function () {
        loadingScreen.style.display = "none";
    };

    if (discordImage.complete) {
        loadingScreen.style.display = "none";
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const ageEl = document.getElementById("age");
    const timeEl = document.getElementById("timezone");

    const birthDate = new Date("2003-02-27");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    ageEl.innerHTML = `<i class="fa-solid fa-cake-candles"></i> Age: ${age}`;
    const updateTime = () => {
        const now = new Date();
        const options = {
            timeZone: "Europe/London",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };

        const formatter = new Intl.DateTimeFormat("en-GB", options);
        const formattedTime = formatter.format(now);

        const dayOfWeek = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(now);

        const timeString = `It's ${formattedTime} on ${dayOfWeek} for me`;

        if (timeEl) {
            timeEl.innerHTML = `<i class="fa-solid fa-clock"></i> ${timeString}`;
        }
    };

    updateTime();

    setInterval(updateTime, 60000);
});

const privacyToggle = document.getElementById("privacy-toggle");
const privacyPopup = document.getElementById("privacy-popup");
const privacyClose = document.getElementById("privacy-close");

privacyToggle.addEventListener("click", () => {
    privacyPopup.style.display = "flex";
});

privacyClose.addEventListener("click", () => {
    privacyPopup.style.display = "none";
});

privacyPopup.addEventListener("click", (e) => {
    if (e.target === privacyPopup) {
        privacyPopup.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});