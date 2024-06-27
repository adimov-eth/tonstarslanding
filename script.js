let countDownDate = new Date("Jul 1, 2024 00:00:00").getTime();

function updateCountdown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update the countdown every 1 second
let countdownFunction = setInterval(updateCountdown, 1000);

$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #b920a5, #1f1663)');
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for signing up!");
  });

  document.getElementById("coin").addEventListener("click", (event) => {
    for (let i = 0; i < 20; i++) {
      createParticle(event.clientX, event.clientY);
    }
  });

  function createParticle(x, y) {
    const colors = [
      {startColor: '#4F1500', endColor: '#0029FF'},
      {startColor: '#004CFE', endColor: '#6600FF'},
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.background = `linear-gradient(45deg, ${color.startColor}, ${color.endColor})`;
    particle.style.maskImage = `url('/star.svg')`;
    particle.style.maskSize = 'cover';

    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * Math.max(window.innerWidth, window.innerHeight); // Radius to the edge of the window
    particle.style.setProperty('--x', `${Math.cos(angle) * radius}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * radius}px`);

    document.body.appendChild(particle);

    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
});

