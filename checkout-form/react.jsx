'use strict';

let root = document.querySelector('.wrapper');

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.validate = this.validate.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.id = arr[0].id;
		this.footerLinks = arr[3];
		this.state = {
			cartQty: 22,
			asideContent: arr[1].asideContent,
			formContent: arr[2],
			needsValidation: false,
			allFieldsAreValid: false
		};
	}
	
	render() {
		return (
			<React.Fragment>
				<Header cartQty={this.state.cartQty} />
				<main>
				  <div className='wrap clearfix'>
					<HeadersGroup />
					<section className='main'>
						<p className='account-info'>
						<span className='req'>*</span>
						Required Information</p>
						<h2>Account Info</h2>
						<form id='registration' name='registration' method='POST' action='#' noValidate={this.state.needsValidation} onSubmit={this.needsValidation}>
							{	
								this.state.formContent.map((elem, index) => {
									let rows = elem[Object.keys(elem)];
									console.log(rows);
									return (
										<React.Fragment key={this.id[index]}>
											<fieldset className={Object.keys(elem).toString().toLowerCase().split(' ').join('-')}>
												<legend>
													<h3>{Object.keys(elem)}</h3>
													<span className='subhead'>{rows[0].subhead}</span>
												</legend>
												<table>
													<tbody>
														{
															rows.map((elem, index) => {
																return(
																	<Row 
																		props={elem} 
																		index={index} 
																		key={this.id[index]} 
																		id={this.id}
																		changeHandler={this.changeHandler}
																	/>
																);
															})
														}
														<SubmitButton index={index} />
													</tbody>
												</table>
											</fieldset>
										</React.Fragment>
									);
								})
							}
						</form>
					</section>
					<Aside props={{content: this.state.asideContent, id: this.id}} />
				  </div>
				</main>
				<Footer props={{links: this.footerLinks, id: this.id}} />
			</React.Fragment>
		);
	}
	
	changeHandler(e) {
		let value = e.target.value;
		if(value) {
			e.target.parentElement.firstElementChild.innerText = '';
		}
		if(e.target.pattern) {
			if(e.target.validity.patternMismatch) {
				e.target.closest('td').classList.add('-invalid');
				return;
			}
		}
		e.target.closest('td').classList.remove('-invalid');
	}
	
	validate(e) {
		e.preventDefault();
		if(!document.querySelectorAll('.-invalid')) {
			alert('Form is valid');
		}
	}
}

function Header(props) {
	return (
		<header>
		  <div className="wrap">
			<a href="/" className="icon-container">
				<img alt="CAR ID" src="img/id-icon.svg" />
				<span className="sub-icon" hidden></span>
			</a>
			<p className="mobile-sub-icon">Secure checkout</p>
			<div className="telephone" hidden>
				<a href="tel:+1-800-200-4545">800.200.4545</a>
			</div>		
			<div className="helpcenter" hidden>
				<a href="">Help Center</a>
			</div>		
			<div className="cart">
				<a href="">
					<span className="cart-qty">{props.cartQty}</span>
				</a>
			</div>
		  </div>
		</header>
	);
}

function HeadersGroup(props) {
	return (
		<div className="headers-group">
			<h1 hidden>Customer Info</h1>
			<ol className="steps">
				<li className="customer-info -active">Customer<br/>Info</li>
				<li className="payment">Review &amp;<br/>Payment</li>
				<li className="receipt">Order<br/>Receipt</li>
			</ol>
		</div>
	);
}

function Footer(props) {
	//Small tag is to emphasize that the content in the footer is less important than the one in main
	return (
		<footer>
		  <div className="wrap">
			<small>
				<p className="copyright">
					&copy;
					<span className="date">
						2003-{new Date().getFullYear()}
					</span>
					&nbsp;All rights reserved
				</p>
				<ul className="links">
					{props.props.links.footerLinks.map((elem, index) => {
						return (
							<li key={props.props.id[index]}>
								<a href="#">{elem}</a>
							</li>
						);
					})}
				</ul>
			</small>
		  </div>
		</footer>
	);
}

function Aside(props) {
	let content = props.props.content;
	let keys = content.map(elem => Object.keys(elem));
	return (
		<aside>
			<div className='container'>
				<div className="cart-summary">
					<div>
						<h3>Cart summary</h3>
						<span className="subhead">
							<em>{props.props.cartQty}</em>
							items in your cart
						</span>
					</div>
					<table>
						<tbody>
							{	
								//form='' attribute is used to connect a separate Submit button with a form
								content.map((elem, index) => {
									return (
										<tr key={props.props.id[index]}>
											<td className="position">{keys[index]}</td>
											<td className="price">${elem[keys[index]]}</td>
										</tr>
									);
								})
							}
							<SubmitButton props={'registration'} index={0} />
						</tbody>
					</table>
				</div>
				<div className="side-information">
					<div className="car-safety">
						<a href="#">Shop safely at Carid.com<br/>Your information is secure</a>
					</div>
					<div className="car-help">Need Help? Visit Our
						<a href="#"> Help Zone,</a>
						<a href="#" className="live-chat"> Live Chat</a>
						<br/>
						or Call us at
						<a href="tel:+1-800-500-8899"> (800) 500-8899</a>
					</div>
				</div>
			</div>
		</aside>
	);
}

function SubmitButton(props) {
	if(props.index === 1) return null;
	return (
		<tr>
			<th></th>
			<td className="checkbox submit">
				<button type="submit" form={props.props || null}>Continue checkout</button>
			</td>
		</tr>
	);
}

function Input(props) {
	let propsArr = props.props;
	return (
		<input
			type={propsArr.type} 
			id={propsArr.id}
			required={propsArr.required ? true : null}
			defaultChecked={propsArr.checked ? true : null}
			multiple={propsArr.multiple ? true : null}
			maxLength={propsArr.maxLength ? propsArr.maxLength : null}
			pattern={propsArr.pattern ? propsArr.pattern : null}
			className={propsArr.className ? propsArr.className : null}
			onBlur={props.changeHandler}
		/>		
	);
}

function Select(props) {
	let propsArr = props.props;
	return (
		<select defaultValue={propsArr.selected}>
			{propsArr.options.map((opt, index) => {
				return (
					<option value={opt} key={props.id[index]}>{opt}</option> 
				);
			})}	
		</select>
	);
}

function Row(props) {
	let elem = props.props;
	let id = props.id;
	return (
		(props.index === 0)
		? null
		: (elem.className === 'business-address-confirm' || elem.className === 'delivery-address-selector')
		?	(
				<tr className={elem.className}>
					<th />
					<td className="checkbox">
						<input id={elem.id} type={elem.type} name={elem.className} defaultChecked={elem.checked || null} />
						<i />
						<label htmlFor={elem.id}>{elem.label}</label>
					</td>
				</tr>
			)
		: (
				<tr key={id[props.index]} className={elem.className || null}>
					<th>
						<label htmlFor={elem.id}>
							{elem.label}
							{elem.required ? <span className="req">*</span> : null}
						</label>
					</th>
					<td className={elem.className || null}>
						<label htmlFor={elem.id}>{elem.placeholder}</label>
						{
							elem.type !== 'select'
								? <Input props={elem} index={id} changeHandler={props.changeHandler}/>
								: (
									<div id={elem.id}>
										<Select props={elem} id={id} />
									</div>
								)
						}
					</td>
				</tr>
			)
	);
}

ReactDOM.render(<App />, root);