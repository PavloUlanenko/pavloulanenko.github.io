window.addEventListener('DOMContentLoaded', function() {
	(function() {
		function renderCars(cars) {
			return `
					<li class="list-item">
						<a href="${cars.src}">
							<img src="${cars.src}" alt="${cars.make} ${cars.model} ${cars.year}">
						</a>
						<h3>${cars.make}</h3>
						<p class="model">${cars.model}</p>
						<p class="year">${cars.year}</p>
						<p class="price">$${cars.price.toLocaleString()}</p>
					</li>
			`;
		}
		let html = cars.map(car => renderCars(car));
		html = `<ul class="list">${html.join(' ')}</ul>`;
		document.body.querySelector('.wrapper').innerHTML = html;
	})();
});