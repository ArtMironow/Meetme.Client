import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { exchangeCodeForTokens } from "../../services/authServices";

export default function Callback() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const handleAuthCallback = async () => {
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");

			if (!code) {
				console.error("Authorization code is missing");
				return;
			}

			await exchangeCodeForTokens(code);

			dispatch(login());
			navigate("/profile");
		};

		handleAuthCallback();
	}, [dispatch, navigate]);

	return <div>Processing authentication...</div>;
}
