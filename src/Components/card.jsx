import { Link, useNavigate } from 'react-router-dom'
import bdo from '../Data/bdo.json'

function Card({ title, cover, id }) {
	const navigate = useNavigate()

	const callSheet = (e) => {
		const data = bdo.find((item) => item.id === id)

		e.preventDefault()

		if (!data) {
			console.error('Data not found for id:', id)
			return
		}
		navigate('/sheet', {
			state: {
				title: data.title,
				cover: data.cover,
				pictures: data.pictures,
				description: data.description,
				host: data.host,
				rating: data.rating,
				location: data.location,
				equipments: data.equipments,
				tags: data.tags
			}
		})
	}

	return (
		<div className="card">
			<Link href="/" onClick={callSheet}>
				<img src={cover} alt={title} id={id} />
				<div>
					<h2>{title}</h2>
				</div>
			</Link>
		</div>
	)
}

export default Card
