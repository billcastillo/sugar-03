import React from "react";
import { fonts, colors, media } from "../data/theme";

const contact = () => {
	return (
		<div className="container">
			<div className="contact-us">
				<h2 className="contact-us-title">
					For orders, contact us @ our facebook page.
				</h2>
				<div className="contact-us-social">
					<a
						href="https://www.facebook.com/sugarrushbyana"
						target="_blank"
						rel="noopener"
					>
						<img src="/static/social/facebook.png" alt="Facebook Page" />
					</a>
					<a href="https://m.me/sugarrushbyana" target="_blank" rel="noopener">
						<img src="/static/social/messenger.svg" alt="Messenger" />
					</a>
				</div>
			</div>

			<style jsx>{`
				.contact-us {
					display: flex;
					justify-content: center;
					flex-direction: row;
					align-items: center;
				}

				.contact-us .contact-us-title {
					max-width: 30%;
					font-family: ${fonts.nunito};
					font-weight: ${fonts.black};
					font-size: 20px;
					line-height: 1.4;
					text-transform: uppercase;
					text-align: center;
					padding: 16px;
					margin: 16px;
					border-radius: 12px;
					background: ${colors["Sugar Pink"]};
					border: 4px solid white;
					box-shadow: 2px 12px 32px rgba(0, 0, 0, 0.15);
					color: white;
				}

				.contact-us h2 {
					position: relative;
				}

				.contact-us .contact-us-social {
				}

				.contact-us img {
					width: 100px;
					height: 100px;
					margin: 16px;
				}

				@media (max-width: ${media.sm}) {
					.contact-us {
						flex-direction: column;
					}

					.contact-us .contact-us-title {
						max-width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default contact;
