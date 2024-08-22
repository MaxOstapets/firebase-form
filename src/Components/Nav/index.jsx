import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-indigo-950 text-white text-2xl font-bold flex justify-center items-center h-20 w-full">
            <ul className="flex justify-center items-center gap-52">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/signin'>Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;