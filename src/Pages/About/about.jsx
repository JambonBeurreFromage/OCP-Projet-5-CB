/////////////////Import objets///////////////
import backgroundImage2 from '../../Assets/backgroundImg2.jpg'

/////////////////Import components///////////////
import Banner from '../../Components/banner.jsx'
import Collapse from '../../Components/collapse.jsx'

function About() {
	return (
		<main className="about">
			<Banner src={backgroundImage2} alt="photo de montagne" text="" />
			<div className="about__collapse">
				<Collapse name={'Fiabilité'} elements={''} />
				<Collapse name={'Respect'} elements={''} />
				<Collapse name={'Service'} elements={''} />
				<Collapse name={'Sécurité'} elements={''} />
			</div>
		</main>
	)
}

export default About
