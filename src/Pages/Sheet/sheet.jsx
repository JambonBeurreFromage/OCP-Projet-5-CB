// import { Link } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom'

function Sheet() {
	const location = useLocation()
	const {
		title,
		cover,
		pictures,
		description,
		host,
		rating,
		location: place,
		equipments,
		tags
	} = location.state

	return (
		<main className="sheet">
			<img className="sheet__img" src={cover} alt={title} />
			<div className="sheet__presentation">
				<h1>{title}</h1>
				<h2>{place}</h2>
				<div className="sheet__presentation-tag">
					{tags.map((tag, index) => (
						<span key={`tag ${index}`}>{tag}</span>
					))}
				</div>
				<div className="sheet__presentation-host">
					<span>note: {rating}</span>
					<div className="sheet__presentation-host-picture">
						<span>{host.name}</span>
						<img src={host.picture} alt={host.name} />
					</div>
				</div>
			</div>
			<div className="sheet__detail"></div>
			<p>{description}</p>
			<div>
				{equipments.map((equipment, index) => (
					<span key={`equipment ${index}`}>{equipment}</span>
				))}
			</div>
			<div>
				{pictures.map((pic, index) => (
					<img
						className="sheet__img"
						key={`Apparetment ${index}`}
						src={pic}
						alt={`Apparetment ${index + 1}`}
					/>
				))}
			</div>
		</main>
	)
}

export default Sheet
