import React from 'react'

const MenuItem = props => {
	console.log('props menuItem:', props.data);

	const { data } = props;

	return (
		<div className="menu-item">
			<h4>{data.gsx$menu.$t}</h4>
		</div>
	)
}

export default MenuItem