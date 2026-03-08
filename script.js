document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".bg-effects");
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;

    bg.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.style.position = "fixed";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(63,169,255,.6)";
    ripple.style.animation = "ripple 1s ease-out forwards";

    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
});

document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.classList.add("bg-particle");

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1800);
});
const energyContainer = document.querySelector('.hero-energy');

for (let i = 0; i < 6; i++) {
    const line = document.createElement('div');
    line.classList.add('energy-line');
    line.style.top = Math.random() * 100 + '%';
    line.style.animationDuration = 12 + Math.random() * 20 + 's';
    energyContainer.appendChild(line);
}

for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div');
    dot.classList.add('energy-dot');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    energyContainer.appendChild(dot);
}

document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.energy-dot').forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dx = e.clientX - rect.left;
        const dy = e.clientY - rect.top;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
            dot.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px)`;
        } else {
            dot.style.transform = 'translate(0, 0)';
        }
    });
});
