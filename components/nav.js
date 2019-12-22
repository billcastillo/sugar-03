import React from "react";
import Link from "next/link";
import { colors, fonts } from "../data/theme";
import MainText from "./mainText";

const headerLinks = [
	{
		title: "Home",
		href: "/",
		internal: true,
		cta: false
	},
	{
		title: "About",
		href: "#about",
		internal: false,
		cta: false
	},
	{
		title: "Menu",
		href: "#menu",
		internal: false,
		cta: false
	},
	{
		title: "Order Now",
		href: "#contact",
		internal: false,
		cta: true
	}
];

const NavLinks = ({ title, href, internal, cta }) => {
	let template;

	if (internal) {
		template = (
			<li>
				<Link href={href}>
					<a>{title}</a>
				</Link>
			</li>
		);
	} else {
		template = (
			<li>
				<a href={href}>{title}</a>
			</li>
		);
	}

	return template;
};

const Nav = () => (
	<header className="container">
		<div className="header-logo">
			<img className="header-logo-blob" src="/static/logo-blob.svg" />
			<MainText size="small" />
		</div>

		<nav className="header-nav">
			<ul>
				{headerLinks.map(link => (
					<NavLinks data={link} />
				))}
				{/* <li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#menu">Menu</a>
				</li>
				<NavLinks href="#contact">Order Now</NavLinks> */}
			</ul>
		</nav>

		<style jsx>{`
			header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-top: 24px;
			}
			.header-logo {
				position: relative;
				margin: 24px 48px;
			}
			.header-logo-blob {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translate3D(-50%, -60%, 0);
			}

			nav {
				text-align: right;
				margin: 24px 0;
			}
			ul {
				display: flex;
				justify-content: flex-end;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			li:not(:last-child) {
				margin-right: 24px;
			}
			a {
				color: ${colors["Dark Theme"]};
				font-family: ${fonts.nunito};
				font-weight: ${fonts.bold};
				text-decoration: none;
				font-size: 16px;
				text-transform: uppercase;
			}
		`}</style>
	</header>
);

export default Nav;
