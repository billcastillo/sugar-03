import React from "react";
import { colors } from "../data/theme";

const mainText = ({ size = "small" }) => {
	// Set style properties based on size
	const constants = {
		fontSizeMobile: "36px"
	};
	const prop = {
		small: {
			fontSize: "52px",
			shadow: "1px 1px 2px rgba(0, 0, 0, 0.38)",
			stroke: "1px"
		},
		big: {
			fontSize: "calc(2em + 8vw)",
			shadow: "2px 2px 3px rgba(0, 0, 0, 0.38)",
			stroke: "2px"
		}
	};

	return (
		<>
			<div className="main-text">
				<h1>
					<span className="sugarrush">Sugarrush </span>
					<span className="by-ana">by ana</span>
				</h1>
			</div>

			<style jsx>{`
				.main-text {
					position: relative;
					display: inline-block;
					text-transform: uppercase;
				}

				.main-text .sugarrush {
					font-size: ${prop[size].fontSize};
					-webkit-text-stroke: ${prop[size].stroke} white;
					text-shadow: ${prop[size].shadow};
					letter-spacing: -0.075em;
					line-height: 0.8;
					color: ${colors["Sugar Pink"]};
				}

				.main-text .by-ana {
					display: block;
					text-align: right;
					color: ${colors["Dark Theme"]};
					mix-blend-mode: multiply;
				}

				@media (max-width: 480px) {
					.main-text .sugarrush {
						font-size: ${constants.fontSizeMobile};
					}
				}
			`}</style>
		</>
	);
};

export default mainText;
