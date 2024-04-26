(function() {
    document.addEventListener('DOMContentLoaded', function() {
        function animateLoadersSection2() {
            const loaders = document.querySelectorAll('.container-2-wrap > .box');
            loaders.forEach((loader) => {
                let progressFrom = 0;
                const progressTo = loader.dataset.progressValue;
                const progressColor = loader.dataset.progressColor;
                const progressNumber = loader.querySelector('h2');
                const interval = setInterval(() => {
                    if (progressFrom >= progressTo) {
                        clearInterval(interval);
                    } else {
                        progressFrom++;
                        loader.style.background = `conic-gradient(${progressColor} ${progressFrom}%, #222 0%)`;
                        progressNumber.firstElementChild.textContent = progressFrom;
                        progressNumber.style.color = progressColor;
                    }
                }, 50);
            });
        }

        animateLoadersSection2();
    });
})();