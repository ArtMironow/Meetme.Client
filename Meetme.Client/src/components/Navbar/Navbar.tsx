import { useState } from "react";
import { Link } from "react-router-dom";
import { userLogin, userLogout } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/authReducer";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);

	const handleLogout = async () => {
		await userLogout(dispatch);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<nav className="bg-gray-900 text-white shadow-md">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<Link
					to="/"
					className="text-2xl font-bold text-white"
				>
					MeetMe
				</Link>

				<button
					onClick={toggleMenu}
					className="md:hidden text-white focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<div className="hidden md:flex space-x-6">
					<Link
						to="/profile"
						className="hover:text-gray-400 transition"
					>
						My Profile
					</Link>
					<Link
						to="/find-pair"
						className="hover:text-gray-400 transition"
					>
						Find Pair
					</Link>
				</div>

				<div className="hidden md:block">
					{isAuthenticated ? (
						<button
							onClick={handleLogout}
							className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
						>
							Logout
						</button>
					) : (
						<button
							onClick={userLogin}
							className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
						>
							Login
						</button>
					)}
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-6 py-4 px-6">
					<Link
						to="/profile"
						className="hover:text-gray-400 transition"
					>
						My Profile
					</Link>
					<Link
						to="/find-pair"
						className="hover:text-gray-400 transition"
					>
						Find Pair
					</Link>

					<div>
						{isAuthenticated ? (
							<button
								onClick={handleLogout}
								className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
							>
								Logout
							</button>
						) : (
							<button
								onClick={userLogin}
								className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
							>
								Login
							</button>
						)}
					</div>
				</div>
			)}
		</nav>
	);
}
