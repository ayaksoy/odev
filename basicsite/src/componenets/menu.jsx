import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
	return (
		<Nav>
			<NavItem>
				<NavLink className="navitemm" href="#">
					Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="navitemm" href="#">
					About
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="navitemm" href="#">
					Contact
				</NavLink>
			</NavItem>
		</Nav>
	);
};

export default Menu;
