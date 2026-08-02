const target = new Date("2026-10-11T09:00:00+02:00");

function updateCountdown() {

    const now = new Date();
    const difference = target - now;

    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
        "<h2>💍 We're Married! 💕</h2>";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").innerHTML = `

        <div class="countdown-container">

            <div class="count-box">
                <div class="number">${days}</div>
                <div class="label">Days</div>
            </div>

            <div class="count-box">
                <div class="number">${hours}</div>
                <div class="label">Hours</div>
            </div>

            <div class="count-box">
                <div class="number">${minutes}</div>
                <div class="label">Minutes</div>
            </div>

            <div class="count-box">
                <div class="number">${seconds}</div>
                <div class="label">Seconds</div>
            </div>

        </div>

    `;
}

updateCountdown();

setInterval(updateCountdown,1000);
