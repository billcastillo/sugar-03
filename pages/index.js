import React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import Menu from '../sections/menu'
import GlobalStyles from '../components/globalStyles'
import dynamic from 'next/dynamic'

/**
 * TODOs:
 * 1. Create special item mole with bidding
 * 2. Slideshow Reviews
 */

const MenuSection = dynamic({
  loader: () => import('../sections/menu'),
  loading: () => <p>Loading Menu ...</p>
})

const Home = props => {
  console.log('propss:', props);

  return (
    <div>
      <Head title="Home" />
      <div className="main-background">
        {/* <img src="/static/drops2x.png" /> */}
      </div>
      <Nav />
      <section className="main-section">
        <h1 className="header-text main-text">
          <span className="sugarrush">Sugarrush</span>
          <span className="by-ana">by ana</span>
        </h1>
      </section>

      <section>
        <MenuSection data={props.entry} />
      </section>

      <GlobalStyles />

      <style jsx>{`
        .main-background {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: -99999;
          background: url('/public/static/drops2x.png') no-repeat;
          background-size: auto 120%;
          background-position: top right; 
        }
        .main-background img {
          width: 100%;
          transform: scale(0.80);
          transform-origin: top right;
        }
        .main-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }
        .main-text {
          text-align: center;
          text-transform: uppercase;
        }
        .main-text span {
          display: block;
        }
        .main-text .sugarrush {
          font-size: calc(2em + 8vw);
          text-shadow: 2px 2px 3px rgba(0,0,0,0.38);
          -webkit-text-stroke: 2px white;
          letter-spacing: -0.0750em;
          line-height: 0.8;
          color: #D29FFB;
        }
        .main-text .by-ana {
          font-size: 2em;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async function() {
	const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
	const res = await fetch(spreadsheetURL)
	const menuData = await res.json()

	console.log('menuData index:', menuData)

	return menuData.feed
}

export default Home
