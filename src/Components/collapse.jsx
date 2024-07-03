import { useState } from 'react'
import arrow from '../Assets/arrow_forward.png'

function Collapse({ name, elements }) {
	const [open, setOpen] = useState(false)

	function deploye() {
		setOpen(!open)
	}

	return (
		<div className="collapse">
			<div
				onClick={deploye}
				className={open ? 'collapse__head--open' : 'collapse__head'}
			>
				<h3>{name}</h3>
				<button className="collapse__button">
					<img
						src={arrow}
						alt="Flêche"
						className={
							open ? 'collapse__arrow--open' : 'collapse__arrow'
						}
					/>
				</button>
			</div>
			{open && (
				<div className="collapse__element">
					{typeof elements === 'string' ? (
						<p>{elements}</p>
					) : (
						<ul>
							{elements.map((element, index) => (
								<li key={index}>{element}</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	)
}

export default Collapse
