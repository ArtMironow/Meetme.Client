import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FindPair from "./components/FindPair/FindPair";
import Profile from "./components/Profile/Profile";
import Callback from "./components/Callback/Callback";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { checkAuthStatus } from "./services/authServices";

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const checkAuth = async () => {
			const isAuthenticated = await checkAuthStatus();
			if (isAuthenticated) {
				dispatch(login());
			} else {
				dispatch(logout());
			}
		};

		checkAuth();
	}, [dispatch]);

	return (
		<>
			<Navbar />

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
					<Route
						path="/callback"
						element={<Callback />}
					/>
				</Routes>
			</div>
		</>
	);
}
