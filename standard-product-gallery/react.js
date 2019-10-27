'use strict';

class App extends React.Component {
	
	constructor() {
		super();
		document.addEventListener('click', this.galleryClickHandler);
		this.galleryClickHandler = this.galleryClickHandler.bind(this);
		this.lazyLoad = this.lazyLoad.bind(this);
		this.state = {
			arr: arr
		}
	}
	
	render() {
		return (
			this.loopOver()
		);
	}
	
	componentDidMount() {
		this.lazyLoad();
	}
	
	loopOver() {
		return this.state.arr.map((elem, index) => {
			return (<Categories
				props={elem}
				key={index}
			/>)
		}); 
	}
	
	lazyLoad() {
		let images = document.querySelectorAll(".lazy");
		if("IntersectionObserver" in window) {
		  let observer = new IntersectionObserver(lazyLoad);
		  function lazyLoad(images, observer) {
			images.forEach(elem => {
			  if(elem.isIntersecting) {
				elem.target.src = elem.target.getAttribute("data-src");
				elem.target.classList.remove('lazy');
			  }
			});
		  }
		  images.forEach(elem => observer.observe(elem));
		}
	}
	
	galleryClickHandler(e) {
		let target = e.target;
		while(!target.parentNode.matches('.gallery > li')) {
			target = target.parentNode;
		}
		target.classList.toggle('-active');
		return;
	}
	
}

function Categories(props) {
	let propsArr = props.props;
	return (
		<li>
			<a href="#">
				<div className="img-container">
					<img data-src={propsArr.src}
						className="lazy"
						src="/"
						alt={propsArr.name}
					/>
				</div>
				<p className="short-decription">{propsArr.name}</p>
				<p className="price">From ${propsArr.price}</p>
			</a>
		</li>
	);
}

//The same without JSX syntax. But in this case it's necessary to aply keys manually
// let Categories = (props) => {
	// let [create, propsArr] = [React.createElement, props.props];
	// let template = create('li', null, create('a', {href: '#'}, 
		// [
			// create('div', {className: 'img-container', key: Math.random()*500}, create('img', {'data-src': propsArr.src, src: '/', alt: propsArr.name, className: 'lazy'})),
			// create('p', {className: 'short-description', key: Math.random()*500}, propsArr.name),
			// create('p', {className: 'price', key: Math.random()*500}, `From $ ${propsArr.price}`)
		// ]
	// ));
	// return template;
// };


ReactDOM.render(<App />, document.querySelector('.gallery'));