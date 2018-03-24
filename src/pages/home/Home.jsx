import React from 'react';

/** Co */
import LinkButton from '../../components/link-button/LinkButton';

/** Stlye */
import './Home.scss';

export default class Home extends React.Component {

	componentDidMount() {
		this.moveToContact();
	}
	
 	moveToContact() {
		const btn = document.querySelector('#moveToContact');
		const posContactPage = document.querySelector('#contact-page').getBoundingClientRect().top + window.scrollY - 70;
		btn.addEventListener('click', () => {
			window.scrollTo({
				top:posContactPage,
				left:0,
				behavior: 'smooth',
			}) 
		});
	}

	render() {
		return (
			<div className="homepage">
				<div className="background">
					<img src="../../imgs/coffee-keyboard.jpg" alt=""/>
				</div>
				<h1>Hello, I'm Lambert. I am a Front End developer</h1>
				<h3>Feel free to checkout my latest works and projects</h3>
				<LinkButton id="moveToContact" name="and yes, I'm available for hiring" />
			</div>
		)
	}
}

