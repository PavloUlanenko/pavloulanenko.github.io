'use strict';

let link = 'https://spreadsheets.google.com/feeds/list/1n5633PymXXc-qW_UWMMFxaJYpR-r5PoXrGMaOn7VfF0/od6/public/values?alt=json';
let wrap = document.querySelector('.wrapper');

class App extends React.Component {
	constructor(props) {
		super(props);
		//I decided to bind the methods intead of using arrow methods because, once transpiled, Babel moves this just outside constructor
		this.getJSON = this.getJSON.bind(this);
		this.processJSON = this.processJSON.bind(this);
		this.extractWords = this.extractWords.bind(this);
		this.shakeArray = this.shakeArray.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.autoFocus = this.autoFocus.bind(this);
		this.voiceOver = this.voiceOver.bind(this);
		this.hideGuessedLetters = this.hideGuessedLetters.bind(this);
		this.handleControlButtons = this.handleControlButtons.bind(this);
		this.clearLetters = this.clearLetters.bind(this);
		this.getJSON(link);
		this.shaken = false;
		this.ref = React.createRef();//new
		this.state = {
			count: 0,
			correctWords: 0,
			increment: 0,
			try: 3,
			currentWord: '',
			value: '',
			data: null,
			autofocused: 0
		};
	}
	
	render() {
		if(!this.state.data) return null;
		let currentWord = this.state.data[this.state.count];
		if(!this.state.value) {
			let shakenArray = this.shaken = this.shakeArray(currentWord.word.toLowerCase().split(''));
		}
		let i = 0;
		return (
			<>
				<div className='card-container'>
					<ProgressPanel props={{
						correctWords: this.state.correctWords,
						totalWords: this.state.data.length,
						doneWords: this.state.count}} 
					/>
					<div className='card-content'>
						<h3 className='word-explanation'>{currentWord.translation}</h3>
						<form>
							<div className='puzzle-set' data-key={this.state.count}>
								<ol className='blank-letters'>
									{currentWord.word.split('').map((elem, index) => {
										i++;
										return ( 
											<input
												key={index} 
												className='blank-letter'
												maxLength='1'
												disabled={index === this.state.increment ? false : true}
												autoFocus={index === 0 ? true : false}
												defaultValue={this.state.value ? this.state.value.toUpperCase().split('')[index] : ''}//only defaultValue or else the element will be uncontrolled
												onChange={this.checkAnswer}
												// onLoad={index === 0 ? this.autoFocus : undefined} // react reccomends using 'undefined' instead of returning 'false'
												data-value={currentWord.word[i-1]} //This one can be rendered if necessary, in order to avoid cheating while passing the puzzle
											/>
										);
									})}
								</ol>
								<ul className='letters-set'>
									{this.shaken.map((elem, index) => {
										return (
											<li 
												className='letter' 
												data-value={elem} 
												key={index}>{elem}
											</li>
										);
									})}
								</ul>
							</div>
						</form>
					</div>
					<div className='card-controls'>
						<CardAdditions 
							props={{context: this.state.data[this.state.count].usage, 
							src: this.state.data[this.state.count].img,
							alt: this.state.data[this.state.count].word,
							handler: this.voiceOver,
							handleControlButtons: this.handleControlButtons}}
						/>
					</div>
				</div>
				<ul className='roster'>
					{this.state.data.map((elem, index) => <ListItem props={elem} key={index} />)}
				</ul>
			</>
		);
	}
	
	componentDidMount() {
		
	}
	
	componentWillUnmount() {
		
	}
	
	
	componentDidUpdate() {
		let toBeFocused = document.querySelector('.blank-letter');
		this.autoFocus(toBeFocused);//It's necessary. Even though autofocus is applied when rendered it works only if the page is reloaded. So autofocus won't work on 2nd, 3rd word and so on
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		let [count, value] = [this.state.count, this.state.value];
		return count === 0 || count !== nextState.count || value !== nextState.value ? true : false;
	}
	
	async extractWords() {
		let data = await this.getJSON(link);
		data = await this.processJSON(data);
		return data;
	}
	
	getJSON(link) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', link);
		xhr.onload = () => {
			if(xhr.status === 200) this.setState({data: this.processJSON(JSON.parse(xhr.responseText))});
		};
		xhr.onerror = () => {
			console.log('A new error occured');
		}
		xhr.send();
	}
	
	processJSON(data) {
		data = data.feed.entry;
		let arr = [];
		data.forEach((elem, index) => {
			arr.push({});
			arr[index].word = elem.gsx$word.$t;
			arr[index].translation = elem.gsx$translation.$t;
			arr[index].usage = elem.gsx$usage.$t;			
			arr[index].img = elem.gsx$img.$t;			
		});
		return arr;
	}
	
	shakeArray(arr) {
		//Yes, I know that is not 100% according to the theory of relativety, but for my purpose to shake an array is great  
		return arr.sort(() => Math.random() - .5);
	}
	
	autoFocus(elem) {
		elem.focus();
	}
	
	checkAnswer(e) {
		let blankLetters = document.querySelectorAll('.blank-letter');
		let currentWord = this.state.data[this.state.count].word;
		let letter = currentWord[this.state.increment].toLowerCase();
		if(e.target.value.toLowerCase() !== letter) {
			e.target.value = '';
			e.target.classList.add('-wrong');
			this.setState(prevState => {
				return {
					value: prevState.value
				};
			});
			this.setState(prevState => {
				return {try: prevState.try - 1};
			});
			return;
		}
		e.target.classList.remove('-wrong');
		e.target.classList.add('-correct');
		this.hideGuessedLetters(letter);
		this.setState(prevState => { 
			return {increment: prevState.increment + 1, value: prevState.value + letter};
		});
		e.target.setAttribute('disabled', true);
		if(e.target.nextElementSibling) {
			e.target.nextElementSibling.removeAttribute('disabled');
			e.target.nextElementSibling.focus();
		}
		else {
			this.voiceOver();
			if(this.state.try > 1) {
				this.setState(prevState => {
					return {
						correctWords: prevState.correctWords + 1
					};
				});
			}
			this.setState(prevState => {
				return {increment: 0, try: 2, count: prevState.count + 1, value: ''};
			});
			this.clearLetters();
		}
	}
	
	hideGuessedLetters(letter) {
		let letters = document.querySelectorAll('.letter:not(.-hidden)');
		for(let i=0; i<letters.length; i++) {
			if(letters[i].dataset.value.toLowerCase() === letter) {
				letters[i].classList.add('-hidden'); 
				break;
			}
		}
	}
	
	voiceOver() {
		if(!('speechSynthesis' in window)) return;
		let speech = new SpeechSynthesisUtterance();
		let speak = window.speechSynthesis;
		speech.lang = 'en';
		speech.rate = .3;
		speech.text = this.state.data[this.state.count].word;
		speak.speak(speech);
		console.log(speech);
	}
	
	handleControlButtons(e) {
		console.log(e.target);
		let blankLetters = document.querySelectorAll('.blank-letter');
		this.clearLetters();
		if(e.target.classList.contains('next-word')) {
			this.setState(prevState => {return {count: prevState.count + 1, value: ''}; });
		}
		else if(e.target.classList.contains('skip-word')) {
			let blankLetters = document.querySelectorAll('.blank-letter');
			this.voiceOver();
			this.setState({value: ''});
			blankLetters.forEach(elem => {
				elem.value = elem.dataset.value;
			});
		}
	}
	
	clearLetters() {
		let blankLetters = document.querySelectorAll('.blank-letter');
		let hiddenLetters = document.querySelectorAll('.-hidden');
		let roster = document.querySelector('.roster');
		if(roster) {
			roster.children[this.state.count].classList.add('-done');
		}
		blankLetters.forEach(elem => elem.classList.remove('-correct', '-wrong'));
		hiddenLetters.forEach(elem => elem.classList.remove('-hidden'));
		blankLetters.forEach(elem => {
			elem.value = '';
		});
	}
}

function ProgressPanel(props) {
	return (
		<div className='progress-panel'>
			<form>
				<label>
					<progress max={props.props.totalWords} value={props.props.doneWords}></progress>
					<span className='progress-percentage'>{~~(props.props.correctWords / props.props.totalWords * 100)}% completed</span>
				</label>
				<span className='correct-words'>{props.props.correctWords} out of {props.props.totalWords} is correct</span>
			</form>
		</div>
	);
}

function CardAdditions(props) {
	let domain = 'https://www.carid.com';
	let defaultImg = 'img/no-image.png';
	return (
		<div className='additions'>
			<div className='image-container'>
				{props.props.src
				? <img 
					src={domain + props.props.src}
					alt={props.props.alt}
				 />
				: <img 
					src={defaultImg}
					alt='default img'
				 />
				}
			</div>
			<div className='word-context'>
				<h4 className='context-title'>Context of usage:</h4>
				<p className='context'>{props.props.context ? props.props.context : 'There is no context for this word'}</p>
			</div>
			<div className='voice-over' onClick={props.props.handler}>
				<i>Spell it</i>
			</div>
			<form className='controls' onClick={props.props.handleControlButtons} onSubmit={(e) => e.preventDefault()}>
				<button className='skip-word'>I do not know</button>
				<button className='next-word'>Next word</button>
			</form>
		</div>
	);
}

function ListItem(props) {
	return (
		<li className='list-item'>
			{props.props.word}
		</li>
	);
}

ReactDOM.render(<App />, wrap);