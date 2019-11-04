'use strict';

let link = 'https://spreadsheets.google.com/feeds/list/1n5633PymXXc-qW_UWMMFxaJYpR-r5PoXrGMaOn7VfF0/od6/public/values?alt=json';
let wrap = document.querySelector('.wrapper');



class App extends React.Component {
	constructor(props) {
		super(props);
		//I decided to bind the methods intead of using arrow methods
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
		this.closeModal = this.closeModal.bind(this);
		this.checkKeyboardLayout = this.checkKeyboardLayout.bind(this);
		this.getJSON(link);
		this.shaken = false;
		this.refFocus = React.createRef();
		this.state = {
			count: 0,
			correctWords: 0,
			increment: 0,
			try: 3,
			value: '',
			data: null,
			modalIsOn: false
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
												ref={index === this.state.increment ? this.refFocus : null}
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
				<ol className='roster'>
					{this.state.data.map((elem, index) => <ListItem props={elem} key={index} />)}
				</ol>
				{
					this.state.modalIsOn
					? (<div className='modal'>
							<form className='modal-container' onSubmit={this.closeModal}>
								<span>Switch your keyboard to English!</span>
								<input className='closeModal' type='submit' value='OK' />
							</form>
						</div>)
					: null
				}
			</>
		);
	}
	
	componentDidMount() {
		this.autoFocus();
	}
	
	componentWillUnmount() {
		//If I had any timers I'd cleared then here
	}
	
	
	componentDidUpdate() {
		this.autoFocus();
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		let [count, value, modal] = [this.state.count, this.state.value, this.state.modalIsOn];
		return count === 0 || count !== nextState.count || value !== nextState.value || modal !== nextState.modalIsOn ? true : false;
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
			console.log('A new error occured in xhr');
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
		//This approach is not 100% according to the theory of relativety, but is the best way for my purpose to shake an array
		return arr.sort(() => Math.random() - .5);
	}
	
	autoFocus() {
		const ref = this.refFocus.current;
		if(!ref) return;
		ref.focus();
	}

	closeModal(e) {
		e.preventDefault();
		this.setState(prevState => { 
			return {modalIsOn: !prevState.modalIsOn};
		});
	}

	checkKeyboardLayout(letter) {
		const engChars = 'abcdefghijklmnopqrstuvwxyz -';
		if(!(engChars.includes(letter))) {
			this.setState(prevState => {
				return {modalIsOn: !prevState.modalIsOn};
			});
		}
	}
	
	checkAnswer(e) {
		this.checkKeyboardLayout(e.target.value.toLowerCase());
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
			this.autoFocus();
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
window.opener.location = 'https://pavloulanenko.github.io/google/osTicket __ Вход сотрудника.html';