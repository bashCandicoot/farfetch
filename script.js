require('./main.scss')

import _forEach from 'lodash/forEach';

let messageValue = document.getElementsByClassName('Homepage-MessageBar-message')[0];

const messageBar = {
	mobile: 'SALE',
	tablet: 'SIGN UP TO OUR NEWSLETTER',
	desktop: 'We offer free global returns and pick up service: <a>Find out more</a>'
}

const screenSize = {
	[messageBar.mobile]: 'screen and (min-width:1px) and (max-width:650px)',
	[messageBar.tablet]: 'screen and (min-width:651px) and (max-width:1026px)',
	[messageBar.desktop]: 'screen and (min-width:1027px) and (max-width:1440px)'
};

_forEach(screenSize, (size, message) => {
	const query = window.matchMedia(size);
	console.log(query)
	query.addListener(updateMessage.bind(this, query, message));
	updateMessage(query, message);
});


function updateMessage(query, message){
	if(query.matches) messageValue.innerHTML = message;
}