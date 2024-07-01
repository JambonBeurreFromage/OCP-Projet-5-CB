function Banner({ src, alt, text }) {
	return (
		<div className="banner">
			<h1>{text}</h1>
			<img src={src} alt={alt} />
		</div>
	)
}

export default Banner
