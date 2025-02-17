import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";

export default function Callback() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const exchangeCodeForTokens = async () => {
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");

			if (!code) {
				console.error("Authorization code is missing");
				return;
			}

			try {
				const response = await fetch(
					"http://localhost:5041/auth/callback?" +
						new URLSearchParams({
							code: code,
						}).toString(),
					{
						method: "GET",
						credentials: "include",
					}
				);

				if (!response.ok) {
					throw new Error("Failed to exchange code for tokens");
				}

				dispatch(login());
				navigate("/profile");
			} catch (error) {
				console.error("Token exchange failed:", error);
			}
		};

		exchangeCodeForTokens();
	}, [dispatch, navigate]);

	return <div>Processing authentication...</div>;
}
