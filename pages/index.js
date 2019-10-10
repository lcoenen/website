import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const PAGE_HEIGHT = 1080;
const GU = 8;
const mainColor = '#CDBAB0';

const Home = () => (
  <div>
    <Head>
      <title>Loic Coenen | Full stack developer</title>
			<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <div className='page oceaned'>
			<div className="head">
				<h1 className="left-column">Loïc Coenen</h1>
				<h2 className="right-column">Full stack developer</h2>
				<div className='button-bar'>
					<button>My blog</button>
					<button><img alt="Contact me" src="assets/contact.png" /></button>
					<button><img alt="Github" src="assets/github.png" /></button>
				</div>
			</div>	
			<div className="left-column">
				My skills
			</div>
			<div className="right-column">
				<ul>
					<li><strong>Javascript</strong> Typescript, Coffeescript, Assemblyscript and other scripts</li>
					<li><strong>Frameworks</strong> React, Angular 2+</li>
					<li><strong>HTML5</strong> CSS3, SCSS/SASS</li>
					<li><strong>UX</strong> Design, evaluation, research</li>
					<li><strong>Blockchain</strong> Web3, Solidity, Web assembly</li>
					<li><strong>Unix</strong> administration, Docker, vim, tmux, git, ...</li>
					<li><strong>Programming</strong> C, C++, Python, PHP, R, ...</li>
					<li><strong>Psychology</strong> Usability, social cognition, statistics, ergonomics</li>
					<li><strong>Database</strong> SQL, NoSQL</li>
					<li><em>... and more to come</em></li>
				</ul>
			</div>
    </div>

		<div className='page '>
			<div className='left-column'>My stories</div>
			<div className='right-column'> 
				<p>I was 14 years old. The (56k) internet	went down. I got bored, and
					started randomly browsing my C:/ drive. In the browser cache, I
					opened a .js file. That was my first contact with	the code.</p>

				<p>I learned myself how to code in C, C++, Javascript/PHP, I graduated
					in computer science, but quickly realized software were meant for
					people. Thus, I persued a psychology degree, during which I studied
					usability, social cognition and workplace psychology.</p>

				<p>Nevertheless, I kept myself updated with the latest web technologies
					of the times. JQuery, XSLT, Angular, React, Wasm, Ethereum,...</p>
			</div>
		</div>

		<div className='page starskied timeline'>
			<div className='left-column'>My timeline</div>

			<div className='timeline-element'>
				<div className='date'>1990</div>
				<div className='content'><strong>Birth</strong>, in Liege, Belgium.</div>`
			</div>

			<div className='timeline-element'>
				<div className='date'>2004-2007</div>
				<div className='content'><strong>Self-teaching</strong>, C, C++, PHP / HTML, Javascript</div>`
			</div>

			<div className='timeline-element'>
				<div className='date'>2009-2009</div>
				<div className='content'><strong>Self-teaching</strong>, C, C++, PHP / HTML, Javascript</div>`
			</div>
		</div>


    <style jsx global>{`

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

			.button-bar {
				background-color: orange;
			}

			.head {
				top: ${GU}px;
				width: 100%;
				height: 20%;
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			h1 {
				margin-top: ${4*GU}px;
				letter-spacing: -0.1em;
				font-weight: lighter;
			}

			h1.left-column {
				font-size: 64px;
			}

			h2 {

				border-left: 1px solid ${mainColor};
				padding-left: ${4*GU}px;
				font-size: 36px;
				letter-spacing: -0.05em;
				width: 50%;

			}

			.left-column {
				text-align: end;
				margin-right: ${4*GU}px;
				font-weight: 300;
				font-size: 32px;
				width: 30%;
				// heigth: 60%;
			}

			.right-column {
				border-left: 1px solid ${mainColor};
				padding-left: ${4*GU}px;
				font-weight: normal;
				font-size: 24px;
				width: 50%;
			}

			.right-column ul, .right-column p {
				margin-top: 0;
			}

			.right-column strong {
				font-size: 28px;
			}

		`}</style>

  </div>
)

export default Home
