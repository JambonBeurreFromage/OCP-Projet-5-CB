/////////////////Imports/////////////////////
import { useState } from 'react'

/////////////////Imports objets/////////////////////
import back from '../Assets/arrow_back.png'
import forward from '../Assets/arrow_forward.png'

function Carrousel({ title, pictures }) {
	const [imgIndex, setImgIndex] = useState(0)

	function clickG() {
		let newIndex = imgIndex - 1
		if (newIndex === -1) {
			newIndex = pictures.length - 1
			setImgIndex(newIndex)
		} else {
			setImgIndex(newIndex)
		}
	}

	function clickD() {
		let newIndex = imgIndex + 1
		if (newIndex === pictures.length) {
			newIndex = 0
			setImgIndex(newIndex)
		} else {
			setImgIndex(newIndex)
		}
	}

	return (
		<div className="carrousel">
			<img
				src={pictures[imgIndex]}
				alt={title + ` vue n° ` + (imgIndex + 1)}
				className="carrousel__img"
			/>
			<>
				{pictures.length > 1 ? (
					<>
						<button
							className="carrousel__button left"
							onClick={clickG}
						>
							<img src={back} alt="" />
						</button>
						<span className="carrousel__index">
							{imgIndex + 1}/{pictures.length}
						</span>
						<button
							className="carrousel__button right"
							onClick={clickD}
						>
							<img src={forward} alt="" />
						</button>
					</>
				) : null}
			</>
		</div>
	)
}

export default Carrousel
