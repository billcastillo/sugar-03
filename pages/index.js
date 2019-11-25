import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../sections/page'

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
  return (
    <Page pageTitle="Home">
      <div className="main-background">
        {/* <img src="/static/drops2x.png" /> */}
      </div>

      <section className="main-section">
        <h1 className="header-text main-text">
          <span className="sugarrush">Sugarrush</span>
          <span className="by-ana">by ana</span>
        </h1>
      </section>

      <section>
        <MenuSection data={props.entry} />
      </section>

      <style jsx>{`
        .main-background {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: -99999;
          background: url('/static/drops2x.png') no-repeat;
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
          -webkit-text-stroke: 2px white;
          text-shadow: 2px 2px 3px rgba(0,0,0,0.38);
          letter-spacing: -0.0750em;
          line-height: 0.8;
          color: #D29FFB;
        }
        .main-text .by-ana {
          font-size: 2em;
        }

        @media (min-width: 1440px) {
          .main-text .sugarrush {
            -webkit-text-stroke: 4px white;
            text-shadow: 4px 4px 6px rgba(0,0,0,0.38);
          }
        }

        @media (max-width: 480px) {
          .main-text .sugarrush {
            -webkit-text-stroke: 1px white;
          }
        }
      `}</style>
    </Page>
  );
}

Home.getInitialProps = async function() {
	const spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1UjD-AjOJr-CaYSbeNjltDZCX3B10ysVRvAF5pXDikUg/1/public/values?alt=json'
	const res = await fetch(spreadsheetURL)
	const menuData = await res.json()

	return menuData.feed
}

export default Home
