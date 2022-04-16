import Logo from "./Logo"
import github from "../Images/github.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin.png"

const NavBar = () => {
    const size = 32;

    return (
        <nav className="flex flex-row-reverse text-white">
            <Logo href="https://linkedin.com/in/altugbakan" img={linkedin} alt="LinkedIn Page" size={size} />
            <Logo href="https://twitter.com/altugbakan" img={twitter} alt="Twitter Page" size={size} />
            <Logo href="https://github.com/altugbakan" img={github} alt="GitHub Page" size={size} />
        </nav>
    );
}

export default NavBar;