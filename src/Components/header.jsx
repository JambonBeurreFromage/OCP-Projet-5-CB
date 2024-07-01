import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'

function Header() {
	return (
		<header>
			<img src={logo} alt="Logo KASA" />
			<nav>
				<Link to="/">ACCUEIL</Link>
				<Link to="/about">A PROPOS</Link>
			</nav>
		</header>
	)
}

export default Header
