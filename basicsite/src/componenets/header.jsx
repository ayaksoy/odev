import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
	return (
		<Container id="asd">
			<Row className="align-items-center">
				<Col xs="6">
					<Logo data="https://picsum.photos/200/200" />
				</Col>
				<Col xs="6" className="text-right">
					<Menu />
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
