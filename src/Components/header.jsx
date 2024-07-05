import { Link, useLocation } from 'react-router-dom'

import logo from '../Assets/logo.png'

function Header() {
	//Récupére l'URL actuel
	const location = useLocation()

	return (
		<header>
			<img src={logo} alt="Logo KASA" />
			<nav>
				<Link
					to="/"
					className={
						location.pathname === '/' ? 'header__a--select' : ''
					}
				>
					ACCUEIL
				</Link>
				<Link
					to="/about"
					className={
						location.pathname === '/about'
							? 'header__a--select'
							: ''
					}
				>
					A PROPOS
				</Link>
			</nav>
		</header>
	)
}

export default Header
