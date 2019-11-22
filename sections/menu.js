import React from 'react'
import menuData from '../data/menu.json'
import MenuItem from '../components/menuItem'

import { colors } from '../data/theme'
import fetch from 'isomorphic-unfetch'

// class Menu extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			menuData: {}
// 		};
// 	}

// 	componentDidMount() {
// 		this.setState({
// 			menuData: this.props.menuData
// 		})
// 	}

	// componentDidMount() {
	// 	this.setState({
	// 		menuData: this.props.menuData
	// 	})
		
	// 	const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
	// 	const bebe = fetch(spreadsheetURL)

	// 	console.log('bebe:',
	// 		bebe.then(data => {
	// 			const res = data.json()
	// 			res.then(response => {
	// 				console.log('res:', response);
	// 			})
	// 		})
	// 	);
	// }
	

// 	render() {
// 		console.log('props:', this.props);
// 		console.log('state:', this.state);

// 		return (
// 			<div className="menu-container">
// 			{
// 				menuData.map((item, index) => (
// 					<MenuItem key={index} data={item} />
// 				))
// 			}
// 		</div>
// 		)
// 	}

// 	static async getInitialProps() {
// 		console.log('babaeadsd')
// 		const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
// 		const res = await fetch(spreadsheetURL)
// 		const menuData = await res.json()
	
// 		console.log('menuData:', menuData)
	
// 		return menuData
// 	}
// }

const Menu = props => {
	console.log('props menu:', props);

	return (
		<div className="menu-container">
			{
				props.data.map((item, index) => (
					<MenuItem key={index} data={item} />
				))
			}
		</div>
	)
};

Menu.getInitialProps = async function() {
	const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
	const res = await fetch(spreadsheetURL)
	const menuData = await res.json()

	// console.log('menuData:', menuData)

	return menuData
}

export default Menu