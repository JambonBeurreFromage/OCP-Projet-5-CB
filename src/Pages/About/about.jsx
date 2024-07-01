/////////////////Import objets///////////////
import backgroundImage2 from '../../Assets/backgroundImg2.jpg'

/////////////////Import components///////////////
import Banner from '../../Components/banner.jsx'

function About() {
	return (
		<main>
			{<Banner src={backgroundImage2} alt="photo de montagne" text="" />}
		</main>
	)
}

export default About
