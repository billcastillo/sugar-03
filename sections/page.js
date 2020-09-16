import React from "react";
import Link from "next/link";
import Head from "../components/head";
import GlobalStyles from "../components/globalStyles";
import OfflineSupport from "../components/OfflineSupport";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Page = ({ children, noHeader, pageTitle }) => {
	return (
		<>
			<OfflineSupport />
			<Head title={pageTitle} />

			{noHeader ? (
				""
			) : (
				<header>
					<Nav />
				</header>
			)}

			<main>
				<GlobalStyles />
				{children}
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default Page;
