import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';

const PAGE_HEIGHT = 800;
const GU = 8;
const mainColor = '#CDBAB0';

const MY_BLOG = 'https://dev.to/lcoenen';
const MY_MAIL = 'mailto:loic.coenen.lg@gmail.com';
const MY_GITHUB = 'https://github.com/lcoenen';

const Home = () => (
  <div>
    <Head>
      <title>Loic Coenen | Full stack developer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
			<link rel="icon" href="static/favicon.ico" type="image/x-icon"/>
			<link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon"/>
    </Head>

    <div className="page oceaned">
      <div className="head">
        <h1 className="left-column">Loïc Coenen</h1>
        <h2 className="right-column">Javascript engineer</h2>
        <div className="button-bar">
          <a href={MY_BLOG}>My blog</a>
          <a href={MY_MAIL}>
						<img alt="Contact me" src="static/contact.png" />
          </a>
          <a href={MY_GITHUB}>
						<img alt="Github" src="static/github.png" />
          </a>
        </div>
      </div>
      <div className="left-column">My skills</div>
      <div className="right-column">
        <ul>
          <li>
            <strong>Javascript</strong>: Typescript, Coffeescript,
            Assemblyscript and other scripts
          </li>
          <li>
            <strong>Frameworks</strong>: React, Angular 2+
          </li>
          <li>
            <strong>HTML5</strong>: CSS3, SCSS/SASS
          </li>
          <li>
            <strong>UX</strong>: Design, evaluation, research
          </li>
          <li>
            <strong>Blockchain</strong>: Web3, Solidity, Web assembly
          </li>
          <li>
            <strong>Unix</strong> administration: Docker, vim, tmux, git, ...
          </li>
          <li>
            <strong>Programming</strong>: C, C++, Python, PHP, R, ...
          </li>
          <li>
            <strong>Psychology</strong>: Usability, social cognition,
            statistics, ergonomics
          </li>
          <li>
            <strong>Database</strong>: SQL, NoSQL
          </li>
          <li>
            <em>... and more to come</em>
          </li>
        </ul>
      </div>
    </div>

    <div className="page vertically-centered">
      <div className="left-column">My story</div>
      <div className="right-column">
        <p>
          I was 14 years old. The (56k) internet went down. I got bored, and
          started randomly browsing my C:/ drive. In the browser cache, I opened
          a .js file. That was my first contact with the code.
        </p>

        <p>
          I learned myself how to code in C, C++, Javascript/PHP, I graduated in
          computer science, but quickly realized software were meant for people.
          Thus, I persued a psychology degree, during which I studied usability,
          social cognition and workplace psychology.
        </p>

        <p>
          Nevertheless, I kept myself updated with the latest web technologies
          of the times. JQuery, XSLT, Angular, React, Wasm, Ethereum,...
        </p>
      </div>
    </div>

    <div className="page starskied timeline vertically-centered">
      <div className="left-column">
        <div>My timeline</div>

        <div className="date first">
          1990<div className="dot"></div>
        </div>
        <div className="date">
          2004-2007<div className="dot"></div>
        </div>
        <div className="date">
          2008-2009<div className="dot"></div>
        </div>
        <div className="date">
          2009-2016<div className="dot"></div>
        </div>
        <div className="date">
          2015<div className="dot"></div>
        </div>
        <div className="date">
          2016<div className="dot"></div>
        </div>
        <div className="date">
          2017<div className="dot"></div>
        </div>
        <div className="date">
          2018<div className="dot"></div>
        </div>
        <div className="date">
          2019<div className="dot"></div>
        </div>
      </div>
      <div className="right-column">
        <div className="content">
          <strong>Birth</strong>, in Liege, Belgium.
        </div>
        <div className="content">
          <strong>Self-teaching</strong>, C, C++, PHP / HTML, Javascript
        </div>
        <div className="content">
					<strong>Secondary graduation</strong>, comp. sci
        </div>
        <div className="content">
					<strong>Master degree</strong>, usability and social cognition
        </div>
        <div className="content">
					<strong>Internship</strong>, UX Design @ Defimedia Digital Agency 
        </div>
        <div className="content">
					<strong>Self-teaching</strong>, Angular
        </div>
        <div className="content">
					<strong>Apple Inc.</strong>, Mac OS advisor
        </div>
        <div className="content">
					<strong>CTO/Frontend developer</strong> @ Whichost.com (React) 
        </div>
        <div className="content">
					<strong>Software engineer</strong> @ Johnson Controls 
        </div>
      </div>
    </div>

    <style jsx global>{`
      .page.vertically-centered {
        padding-top: 256px;
        margin-bottom: 0px;
      }

      body {
        background-color: black;
        font-family: 'Quicksand', sans-serif;
        color: ${mainColor};
        margin: 0;
      }

      .oceaned {
        background-image: url('static/ocean.png');
        background-repeat: no-repeat;
      }

      .starskied {
        background-image: url('static/starsky.png');
        background-repeat: no-repeat;
      }

      .page {
        margin: 0;
        width: 100%;
        height: ${PAGE_HEIGHT}px;
        display: flex;
        flex-direction: row;
        align-items: start;
        flex-grow: 1;
        flex-wrap: wrap;
      }

      .head {
        top: ${GU}px;
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

			.head .right-column {
				width: 30%;
				text-align: center;
				margin-bottom: 2em;
        align-self: flex-end;
        padding-top: 16px;
        padding-bottom: 8px;
			}

      h1 {
        margin-top: ${4 * GU}px;
        letter-spacing: -0.1em;
        font-weight: lighter;
      }

      h1.left-column {
        font-size: 64px;
      }

      h2 {
        border-left: 1px solid ${mainColor};
        padding-left: ${4 * GU}px;
        font-size: 36px;
        letter-spacing: -0.05em;
        width: 50%;
      }

      .left-column {
        text-align: end;
        margin-right: ${4 * GU}px;
        font-weight: 300;
        font-size: 32px;
        width: 30%;
      }

      .right-column {
        border-left: 1px solid ${mainColor};
        padding-left: ${4 * GU}px;
        font-weight: normal;
        font-size: 24px;
        width: 50%;
      }

      .right-column ul,
      .right-column p {
        margin-top: 0;
      }

      .right-column strong, .date {
        font-size: 28px;
      }

      .date.first {
        margin-top: 24px;
      }

      .content:first-child {
        margin-top: 64px;
      }

			.dot {
				position: relative;
				left: 40px;
				top: 12px;
				float: right;
				background: ${mainColor};
				width: 16px;
				height: 16px;
				border-radius: 50%;
			}

      .button-bar {
        position: fixed;
        margin-top: 16px;
        margin-left: 85%;
      }

			.button-bar a {
				font-family: Quicksand;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 40px;

				padding: 16px;

				text-decoration: none;

				/* or 250% */
				text-align: center;

				color: #EEEEEE;
				background: rgba(19, 13, 15, 0.5);
				border: 1px solid #CDBAB0;
				box-sizing: border-box;
				border-radius: 16px;
			}

			.button-bar a img {
				position: relative;
				top: 4px;
				width: 24px;
				height: 24px;
			}

			@media only screen and (max-width: 799px) {
				h1 { 
				}

				h2 { 
					width: 100% !important;
				}

				.page {
					height: 100% !important;
        	flex-direction: column;
					align-Vitems: center;
				}

				.head {
					flex-direction: column;
					align-items: center;
					margin-bottom: 2em;
				}	

				.left-column {
					text-align: center !important;
					width: 100% !important;
					margin-bottom: 1em;
				}

				.right-column { 
					width: 100%;
					border: 0;
					padding-right: ${4 * GU}px;
					width: 80%;
				}

				.date {
					font-size: 12px;
				}

				.dot { 
					display: none;
				}

				.page.timeline .right-column {
					font-size: 12px;
					width: 60%;
					padding: 0;
				}
			
				.page.timeline .left-column {
					width: 40% !important;
					margin-right: 0;
				}

				.page.timeline {
					flex-direction: row;
					align-elements: top;
				}

				.content strong {
					font-size: 12px !important;	
				}

			}

    `}</style>
  </div>
);

export default Home;
