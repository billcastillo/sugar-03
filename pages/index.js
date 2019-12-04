import React from 'react';
import fetch from 'isomorphic-unfetch';
import Page from '../sections/page';
import Menu from '../sections/menu';

/**
 * TODOs:
 * Create special item mole with bidding
 * Slideshow Reviews
 * PropTypes
 * Framer motion page transition https://reacttricks.com/animating-next-page-transitions-with-framer-motion/
 * Loading while fetching https://spectrum.chat/next-js/general/getinitialprops-making-main-page-load-slow~5c6af0c6-3899-4484-9ba7-f35a515cb789
 * PWAs https://able.bio/drenther/building-a-progressive-web-app-with-nextjs-part-i--00edasw / next-pwa / https://frustrated.blog/2016/07/17/pwa_step_one.html
 * Add service worker / next-offline
 * Make manifest dynamic / https://github.com/arthurbergmz/webpack-pwa-manifest
 */

const url =
	'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuData: null,
		};
	}

	componentDidMount() {
		const { menuData } = this.state;
		fetch(url)
			.then(
				response => {
					return response.json();
				},
				err => {
					console.error('oh no something went wrong =(', err);
				},
			)
			.then(response => {
				this.setState({ menuData: response.feed.entry });
			});
	}

	// static async getInitialProps() {
	//   const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
	//   const res = await fetch(spreadsheetURL)
	//   const menuData = await res.json()

	//   return menuData.feed
	// }

	render() {
		const { menuData } = this.state;

		return (
			<Page pageTitle="Home">
				<div className="main-background">{/* <img src="/static/drops2x.png" /> */}</div>

				<section className="main-section">
					<h1 className="main-text">
						<span className="sugarrush">Sugarrush</span>
						<span className="by-ana">by ana</span>
					</h1>
				</section>

				<section className="menu-section">
					<Menu data={menuData} />
				</section>

				<style jsx>{`
					.main-background {
						position: absolute;
						top: 0;
						right: 0;
						width: 100%;
						height: 100%;
						z-index: -99999;
						background: url('/static/drops2x.png') no-repeat;
						background-size: auto 120%;
						background-position: top right;
					}
					.main-background img {
						width: 100%;
						transform: scale(0.8);
						transform-origin: top right;
					}
					.main-section {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						min-height: 60vh;
					}
					.main-text {
						text-align: center;
						text-transform: uppercase;
					}
					.main-text span {
						display: block;
					}
					.main-text .sugarrush {
						font-size: calc(2em + 8vw);
						-webkit-text-stroke: 2px white;
						text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.38);
						letter-spacing: -0.075em;
						line-height: 0.8;
						color: #d29ffb;
					}
					.main-text .by-ana {
						font-size: 2em;
					}

					@media (min-width: 1440px) {
						.main-text .sugarrush {
							-webkit-text-stroke: 4px white;
							text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.38);
						}
					}

					@media (max-width: 480px) {
						.main-text .sugarrush {
							-webkit-text-stroke: 1px white;
						}
					}
				`}</style>
			</Page>
		);
	}
}

export default Home;
