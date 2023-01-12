import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<h1><br />
					Hello, <br />
					I'm Eduardo Martínez <br />
					web developer<br />
					{/* <img src={LogoTitle} alt="developer" /> */}
				</h1>
				<h2>
					Fullstack Developer / Graphic Designer
				</h2>
				<Link to="/contact" className='flat-button'>CONTACT ME</Link>
			</div>
		</div>
	)
}

export default Home;