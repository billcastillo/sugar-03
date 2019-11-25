import React from 'react';
import fetch from 'isomorphic-unfetch';
import MenuItem from '../components/menuItem';

const Menu = ({ data }) => {
	return (
		<div className="menu-container">
			{data.map((item, index) => (
				<MenuItem key={index} data={item} />
			))}
		</div>
	);
};

Menu.getInitialProps = async function get() {
	const spreadsheetURL =
		'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json';
	const res = await fetch(spreadsheetURL);
	const menuData = await res.json();

	return menuData;
};

export default Menu;
