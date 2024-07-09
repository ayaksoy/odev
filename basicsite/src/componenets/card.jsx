import React from "react";

const Card = ({ veri }) => {
	return (
		<div className="cards">
			{veri.map((item, index) => (
				<div key={index} className="card">
					<img className="card-img" src={item.img} alt={item.title} />
					<h2 className="card-title">{item.title}</h2>
					<p className="card-text">{item.content}</p>
				</div>
			))}
		</div>
	);
};

export default Card;
