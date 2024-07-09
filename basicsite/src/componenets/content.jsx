import React from "react";
import Card from "./card";

const Content = () => {
	const data = [
		{
			title: "Title 1",
			content: "Content 1",
			img: "https://picsum.photos/200/200",
		},
		{
			title: "Title 2",
			content: "Content 2",
			img: "https://picsum.photos/201/201",
		},
		{
			title: "Title 3",
			content: "Content 3",
			img: "https://picsum.photos/202/202",
		},
		{
			title: "Title 4",
			content: "Content 4",
			img: "https://picsum.photos/203/203",
		},
		{
			title: "Title 5",
			content: "Content 5",
			img: "https://picsum.photos/204/204",
		},
		{
			title: "Title 6",
			content: "Content 6",
			img: "https://picsum.photos/205/205",
		},
		{
			title: "Title 7",
			content: "Content 7",
			img: "https://picsum.photos/206/206",
		},
		{
			title: "Title 8",
			content: "Content 8",
			img: "https://picsum.photos/207/207",
		},
		{
			title: "Title 9",
			content: "Content 9",
			img: "https://picsum.photos/208/208",
		},
		{
			title: "Title 10",
			content: "Content 10",
			img: "https://picsum.photos/209/209",
		},
		{
			title: "Title 11",
			content: "Content 11",
			img: "https://picsum.photos/210/210",
		},
		{
			title: "Title 12",
			content: "Content 12",
			img: "https://picsum.photos/211/211",
		},
		{
			title: "Title 13",
			content: "Content 13",
			img: "https://picsum.photos/212/212",
		},
		{
			title: "Title 14",
			content: "Content 14",
			img: "https://picsum.photos/213/213",
		},
		{
			title: "Title 15",
			content: "Content 15",
			img: "https://picsum.photos/214/214",
		},
		{
			title: "Title 16",
			content: "Content 16",
			img: "https://picsum.photos/215/215",
		},
		{
			title: "Title 17",
			content: "Content 17",
			img: "https://picsum.photos/216/216",
		},
		{
			title: "Title 18",
			content: "Content 18",
			img: "https://picsum.photos/217/217",
		},
	];
	return (
		<div className="content">
			<h2>Main Content</h2>
			<Card className="banana" veri={data} />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Content;
