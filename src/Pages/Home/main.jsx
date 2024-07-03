/////////////////Import /////////////////////
import { useNavigate } from 'react-router-dom'

/////////////////Import objets///////////////
import backgroundImage1 from '../../Assets/backgroundImg1.jpg'
import bdo from '../../Data/bdo.json'

//////////////Import components///////////////
import Banner from '../../Components/banner.jsx'
import Card from '../../Components/card.jsx'

function Main() {
	const navigate = useNavigate()
	const callSheet = (e, id) => {
		console.log(e)
		const data = bdo.find((item) => item.id === id)

		e.preventDefault()

		navigate(`/sheet/${id}`, {
			state: {
				title: data.title,
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
		<main>
			{
				<Banner
					src={backgroundImage1}
					alt="photo de plage"
					text="Chez vous, partout et ailleurs"
				/>
			}

			<ul className="main__ul">
				{bdo.map(({ id, cover, title }) => (
					<li key={id}>
						<button onClick={(e) => callSheet(e, id)}>
							<Card cover={cover} title={title} />
						</button>
					</li>
				))}
			</ul>
		</main>
	)
}

export default Main
