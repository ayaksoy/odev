import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./componenets/header";
import LeftSide from "./componenets/leftside";
import Content from "./componenets/content";
import Footer from "./componenets/footer";
import "./App.css";
import category from "./componenets/category";
function App() {
	return (
		<div className="App">
			<Header />
			<Container id="bb">
				<Row>
					<Col xs="3">
						<LeftSide
							title="Categories Sayfasi"
							index={[
								"Meyve",
								"Sebze",
								"Unlu Mamuller",
								"İçecekler",
								"Temizlik Ürünleri",
							]}
						/>
					</Col>
					<Col xs="9">
						<Content />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
