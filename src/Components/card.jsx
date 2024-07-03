function Card({ title, cover, id }) {
	return (
		<div className="card">
			<img src={cover} alt={title} id={id} />
			<div>
				<h2>{title}</h2>
			</div>
		</div>
	)
}

export default Card
