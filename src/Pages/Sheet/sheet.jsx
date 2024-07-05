import React from 'react'
import { useParams } from 'react-router-dom'

///////Importation objets/////
import bdo from '../../Data/bdo.json'

///////Importation components/////
import Carrousel from '../../Components/carrousel.jsx'
import Rating from '../../Components/rating.jsx'
import Collapse from '../../Components/collapse.jsx'

function Sheet() {
	// récupération des élément du hook location passé par le composent Home
	const { id } = useParams()

	const data = bdo.find((item) => item.id === id)

	return (
		<main className="sheet">
			{/* Carrousel */}
			<div className="sheet__carousel">
				<Carrousel title={data.title} pictures={data.pictures} />
			</div>

			{/* Présentation du logement et de l'hote en récupérant directement en BDO nom prénom et photo*/}
			<div className="sheet__presentation">
				<h1>{data.title}</h1>
				<h2>{data.place}</h2>

				{/* récupération des tags en bdo */}
				<div className="sheet__presentation-tag">
					{data.tags.map((tag, index) => (
						<span key={`tag ${index}`}>{tag}</span>
					))}
				</div>

				{/* Présentation de l'hote */}
				<div className="sheet__presentation-host">
					{/* appel du component rating avec la récupération de la note en BDO */}
					<span>
						<Rating rating={data.rating} />
					</span>
					<div className="sheet__presentation-host-picture">
						<span>{data.host.name}</span>
						<img src={data.host.picture} alt={data.host.name} />
					</div>
				</div>
			</div>
			{/* Détails sur le logement en utilisant deux collapses*/}
			<div className="sheet__detail">
				<Collapse name={'Description'} elements={data.description} />
				<Collapse name={'Équipements'} elements={data.equipments} />
			</div>
		</main>
	)
}

export default Sheet
