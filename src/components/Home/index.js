import './index.scss'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react';
import Logo from '../Logo';

const Home = () => {
	const [ letterClass, setLetterClass ] = useState( 'text-animate' );
	const nameArray = [ 'E', 'd', 'u', 'a', 'r', 'd', 'o', ' ', 'M', 'a', 'r', 't', 'í', 'n', 'e', 'z', '.', ];
	const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.', ];

	useEffect( () => {
		setTimeout( () => {
			setLetterClass( 'text-animate-hover' )
		}, 4000 )
	}, [] );

	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<h1><br />
					Hello, <br />
					<AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={10} /><br />
					<AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16} /><br />
				</h1>
				<h2>
					Fullstack Developer / Graphic Designer
				</h2>
				<Link to="/contact" className='flat-button'>CONTACT ME</Link>
			</div>
			<Logo />
		</div>
	)
}

export default Home;