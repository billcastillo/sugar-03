import React from 'react';
import Link from 'next/link';
import { colors } from '../data/theme'

const links = [{ href: 'https://github.com/segmentio/create-next-app', label: 'Github' }].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav>
		<ul>
			<li><Link href="/"><a>Home</a></Link></li>
			<li><a href="#menu">Menu</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>

		<style jsx>{`
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
				color: #9A46DD;
				text-decoration: none;
				font-size: 16px;
			}
		`}</style>
	</nav>
);

export default Nav;
