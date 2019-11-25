import React from 'react';
import Link from 'next/link'
import Head from '../components/head'
import GlobalStyles from '../components/globalStyles'
import OfflineSupport from '../components/OfflineSupport';

const Page = ({children, noHeader, pageTitle}) => {
	return (
		<>
		<OfflineSupport />
		<Head title={pageTitle} />

		{noHeader ? '' :
			<header>
				<nav>
					<ul>
						<li><Link href='/'><a>Home</a></Link></li>
					</ul>
				</nav>
			</header>
		}

		<main>
			<GlobalStyles />
			{children}
		</main>
		</>
	);
};

export default Page;