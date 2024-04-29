document.addEventListener('DOMContentLoaded', function() {
    function prepareShadow(distanceX, distanceY) {
        let shadow = '';

        for (let i = 0; i < 200; i++) {
            let shadowX = -distanceX * (i / 200);
            let shadowY = -distanceY * (i / 200);
            let opacity = 1 - i / 100;
            shadow += `${shadowX}px ${shadowY}px 0 rgba(33, 33, 33, ${opacity}), `;
        }
        shadow = shadow.slice(0, -2);

        return shadow;
    }

    function animateLightAndShadow() {
        const textWithShadow = document.querySelector('.section-1 > .text');
        const light = document.querySelector('.section-1 > .light');
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const distanceX = mouseX - textWithShadow.offsetLeft - textWithShadow.offsetWidth / 2;
            const distanceY = mouseY - textWithShadow.offsetTop - textWithShadow.offsetHeight / 2;

            light.style.left = mouseX + 'px';
            light.style.top = mouseY + 'px';
            textWithShadow.style.textShadow = prepareShadow(distanceX, distanceY);
        });
    }

    animateLightAndShadow();
});