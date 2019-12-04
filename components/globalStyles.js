import React from 'react';
import { colors, fonts, media } from '../data/theme';

const globalStyles = () => {
	return (
		<div>
			<style global jsx>{`
				::selection {
					color: ${colors['Just Blue']};
					background: ${colors['Angy Red']};
				}

				body {
					color: ${colors.textColor};
					font-family: ${fonts.nunito};
				}

				.container {
					padding: 0 16px;
					max-width: 100%;
				}

				@media (min-width: ${media.xl}) {
					.container {
						max-width: 1440px;
						margin: 0 auto;
						padding: 0 128px;
					}
				}

				@media (max-width: ${media.lg}) {
					.container {
						padding: 0 64px;
					}
				}

				@media (max-width: ${media.md}) {
					.container {
						padding: 0 24px;
					}
				}

				@media (max-width: ${media.sm}) {
					.container {
						padding: 0 16px;
					}
				}

				.text-center {
					text-align: center;
				}
			`}</style>
		</div>
	);
};

export default globalStyles;
