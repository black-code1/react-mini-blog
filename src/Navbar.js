import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The Coder Blog</h1>
			<Link to="/">Home</Link>
			<Link to="/create">New Blog</Link>
		</nav>
	);
};

export default Navbar;
