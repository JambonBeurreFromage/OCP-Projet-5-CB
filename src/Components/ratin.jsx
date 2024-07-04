import star_icon_red from '../Assets/star_icon_red.png'
import star_icon_grey from '../Assets/star_icon_grey.png'

function Rating({ rating }) {
	const range = [1, 2, 3, 4, 5]

	return (
		<div className="rating">
			{range.map((rangeElement) =>
				rating >= rangeElement ? (
					<span>
						<img src={star_icon_red} alt="Etoile positive" />
					</span>
				) : (
					<span>
						<img src={star_icon_grey} alt="Etoile négative" />
					</span>
				)
			)}
		</div>
	)
}

export default Rating
