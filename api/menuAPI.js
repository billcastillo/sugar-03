import React from 'react';
import fetch from 'isomorphic-unfetch';

const fetchMenu = () => {
	const url =
		'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json';

	return fetch(url)
		.then(
			res => {
				res.json();
			},
			error => {
				loadingMenu = false;
				console.error('Oh no! something went wrong =(', error);
			},
		)
		.then(res => res.entry);
};

const wrapPromise = promise => {};

export default fetchMenu;
