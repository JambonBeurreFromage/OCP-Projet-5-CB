/////////////////Import /////////////////////
import { Link } from 'react-router-dom'

/////////////////Import objets///////////////
import backgroundImage1 from '../../Assets/backgroundImg1.jpg'
import bdo from '../../Data/bdo.json'

//////////////Import components///////////////
import Banner from '../../Components/banner.jsx'
import Card from '../../Components/card.jsx'

function Main() {
	return (
		<main>
			{
				<Banner
					src={backgroundImage1}
					alt="photo de plage"
					text="Chez vous, partout et ailleurs"
				/>
			}

			{/* liste les  différents logements avec le component card prenant en attributs des éléments de la bdo
			le link appel la route /sheet+numéro d'identification du logement en bdo*/}
			<ul className="main__ul">
				{bdo.map(({ id, cover, title }) => (
					<li key={id}>
						<Link to={`/sheet/${id}`} className="main__link">
							<Card cover={cover} title={title} />
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}

export default Main
