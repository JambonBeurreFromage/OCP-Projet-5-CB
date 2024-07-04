/////////////////Import objets///////////////
import backgroundImage2 from '../../Assets/backgroundImg2.jpg'
import info from '../../Data/texte.json'

/////////////////Import components///////////////
import Banner from '../../Components/banner.jsx'
import Collapse from '../../Components/collapse.jsx'

function About() {
	return (
		<main className="about">
			<Banner src={backgroundImage2} alt="photo de montagne" text="" />
			<div className="about__collapse">
				{info.map(({ title, content }) => (
					<Collapse name={title} elements={content} />
				))}
			</div>
		</main>
	)
}

export default About
