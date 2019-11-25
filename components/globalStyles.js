import React from 'react'
import { colors, fonts } from '../data/theme'

const globalStyles = () => {
	return (
		<div>
			<style global jsx>{`
				body {
					color: ${colors.textColor};
					font-family: ${fonts.nunito};
				}
			`}</style>
		</div>
	);
}

export default globalStyles