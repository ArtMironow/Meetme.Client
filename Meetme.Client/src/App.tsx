import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FindPair from "./components/FindPair/FindPair";
import Profile from "./components/Profile/Profile";
import Callback from "./components/Callback/Callback";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/authReducer";
import { login, logout } from "./store/authSlice";

export default function App() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await fetch("http://localhost:5041/auth/status", {
					method: "GET",
					credentials: "include",
				});

				if (!response.ok) {
					throw new Error("Failed to fetch auth status");
				}

				const isAuthenticated = await response.json();

				if (isAuthenticated) {
					dispatch(login());
				} else {
					dispatch(logout());
				}
			} catch (error) {
				console.error("Error checking authentication:", error);
				dispatch(logout());
			}
		};

		checkAuth();
	}, [dispatch]);

	const handleLogin = async () => {
		try {
			const response = await fetch("http://localhost:5041/auth/login", {
				method: "GET",
			});
			const data = await response.json();

			console.log(data);

			if (response.ok && data.loginUrl) {
				window.location.href = data.loginUrl;
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	const handleLogout = async () => {
		try {
			const response = await fetch("http://localhost:5041/auth/logout", {
				method: "GET",
				credentials: "include",
			});

			const data = await response.json();

			if (response.ok && data.logoutUrl) {
				dispatch(logout());
				window.location.href = data.logoutUrl;
			} else {
				console.error("Logout failed:", data.message);
			}
		} catch (error) {
			console.error("Error during logout:", error);
		}
	};

	return (
		<>
			<Navbar
				isAuthenticated={isAuthenticated}
				handleLogin={handleLogin}
				handleLogout={handleLogout}
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
					<Route
						path="/callback"
						element={<Callback />}
					/>
				</Routes>
			</div>
		</>
	);
}
