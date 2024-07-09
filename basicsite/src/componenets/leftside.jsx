import React from "react";
import Category from "./category";

const LeftSide = (veri) => {
	return (
		<div className="left-side">
			{veri.index.map((item) => (
				<Category title={item} />
			))}
		</div>
	);
};

export default LeftSide;
