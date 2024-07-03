import React from 'react'
import { useLocation } from 'react-router-dom'

///////Importation components/////
import Carrousel from '../../Components/carrousel'

function Sheet() {
	// récupération des élément du hook location passé par le composent Home
	const location = useLocation()
	const {
		title,
		pictures,
		description,
		host,
		rating,
		location: place, // Remplacement de location par place pour éviter les erreurs
		equipments,
		tags
	} = location.state

	return (
		<main className="sheet">
			{/* Carrousel */}
			<div className="sheet__carousel">
				<Carrousel title={title} pictures={pictures} />
			</div>
			{/* Présentation du logement et de l'hote*/}
			<div className="sheet__presentation">
				<h1>{title}</h1>
				<h2>{place}</h2>
				<div className="sheet__presentation-tag">
					{tags.map((tag, index) => (
						<span key={`tag ${index}`}>{tag}</span>
					))}
				</div>
				{/* Présentation de l'hote */}
				<div className="sheet__presentation-host">
					<span>note: {rating}</span>
					<div className="sheet__presentation-host-picture">
						<span>{host.name}</span>
						<img src={host.picture} alt={host.name} />
					</div>
				</div>
			</div>
			{/* Détails sur le logement */}
			<div className="sheet__detail"></div>
			<p>{description}</p>
			<div>
				{equipments.map((equipment, index) => (
					<span key={`equipment ${index}`}>{equipment}</span>
				))}
			</div>
		</main>
	)
}

export default Sheet
