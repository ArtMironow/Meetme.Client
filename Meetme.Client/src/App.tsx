import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FindPair from "./components/FindPair/FindPair";
import Profile from "./components/Profile/Profile";

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<>
			<Navbar
				isAuthenticated={isAuthenticated}
				handleLogin={() => setIsAuthenticated(true)}
				handleLogout={() => setIsAuthenticated(false)}
			/>

			<div className="container mx-auto mt-6 px-4">
				<Routes>
					<Route
						path="/"
						element={<FindPair />}
					/>
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/find-pair"
						element={<FindPair />}
					/>
				</Routes>
			</div>
		</>
	);
}
