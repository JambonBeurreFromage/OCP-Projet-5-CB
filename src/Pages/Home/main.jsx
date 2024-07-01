/////////////////Import objets///////////////
import backgroundImage1 from '../../Assets/backgroundImg1.jpg'
import bdo from '../../Data/bdo.json'

/////////////////Import components///////////////
import Banner from '../../Components/banner.jsx'
import Card from '../../Components/card.jsx'

function Home() {
	return (
		<main>
			{
				<Banner
					src={backgroundImage1}
					alt="photo de plage"
					text="Chez vous, partout et ailleurs"
				/>
			}

			<ul>
				{bdo.map(({ id, cover, title }) => (
					<li key={id}>
						<Card cover={cover} title={title} id={id} />
					</li>
				))}
			</ul>
		</main>
	)
}

export default Home
