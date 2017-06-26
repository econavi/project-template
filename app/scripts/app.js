import svg4everybody from 'svg4everybody';
window.onload = () => {
	svg4everybody();
};

import $ from 'jquery';

import mainMenu from './../blocks/main-menu/main-menu';

import textarea from './../blocks/textarea/textarea';
textarea($('textarea'));

console.log('JavaScript подключен.');
