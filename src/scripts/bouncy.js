document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("footer .border");
    images.forEach((img, index) => {
        const duration = 0.7 + Math.random() * 2;
        const delay = Math.random();
        const bounceHeight = 12 + Math.random() * 25;
        const timingFunction = "cubic-bezier(0.1, 0.5, 0.5, 1.2)";
        const keyframes = `
            @keyframes bounce${index} {
                0% { transform: translate(0, 0); }
                15% { transform: translate(0px, -${bounceHeight * 0.7}px); }
                30% { transform: translate(0px, 0); }
                45% { transform: translate(0, -${bounceHeight}px); }
                60% { transform: translate(0px, ${bounceHeight * -0.2}px); }
                75% { transform: translate(0, -${bounceHeight * 0.3}px); }
                100% { transform: translate(0, 0); }
            }
        `;

        const style = document.createElement("style");
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        img.style.animation = `bounce${index} ${duration}s infinite ${delay}s ${timingFunction}`;
        img.style.willChange = "transform";
        img.style.transformOrigin = "bottom center";
    });
});