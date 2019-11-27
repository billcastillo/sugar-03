import React from 'react';
import MenuItem from '../components/menuItem';
import { media } from '../data/theme';

const Menu = ({ data }) => {
	if (data === null) {
		return <p>Fetching Menu ...</p>;
	}

	return (
		<div className="container">
			<h2 className="section-title text-center">Menu</h2>
			<div className="menu-container">
				{data.map((item, index) => (
					<MenuItem key={index} data={item} />
				))}
			</div>

			<style jsx>{`
				.section-title {
					font-size: 48px;
					margin-bottom: 24px;
				}

				.menu-container {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					margin: 0 auto 64px auto;
				}

				@media (min-width: ${media.lg}) {
					.menu-container {
						max-width: 80%;
					}
				}
			`}</style>
		</div>
	);

	// return (
	// 	{
	// 		data === null
	// 		? <p>Loading ...</p>
	// 		: <div className="menu-container">
	// 				{data.map((item, index) => (
	// 					<MenuItem key={index} data={item} />
	// 				))}
	// 			</div>
	// 	}
	// );
};

// Menu.getInitialProps = async function get() {
// 	const spreadsheetURL =
// 		'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json';
// 	const res = await fetch(spreadsheetURL);
// 	const menuData = await res.json();

// 	return menuData;
// };

export default Menu;
