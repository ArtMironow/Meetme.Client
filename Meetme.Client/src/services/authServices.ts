import axios from "axios";
import { AUTH_ENDPOINTS } from "../constants/apiEndpoints";
import { AppDispatch } from "../store/authReducer";
import { logout } from "../store/authSlice";

export const checkAuthStatus = async (): Promise<boolean> => {
	try {
		const response = await axios.get(AUTH_ENDPOINTS.AUTH_STATUS, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error("Error checking authentication:", error);
		return false;
	}
};

export const userLogin = async (): Promise<void> => {
	try {
		const response = await axios.get(AUTH_ENDPOINTS.AUTH_LOGIN);
		if (response.status === 200 && response.data.loginUrl) {
			window.location.href = response.data.loginUrl;
		} else {
			console.error("Login failed");
		}
	} catch (error) {
		console.error("Error during login:", error);
	}
};

export const userLogout = async (dispatch: AppDispatch): Promise<void> => {
	try {
		const response = await axios.get(AUTH_ENDPOINTS.AUTH_LOGOUT, {
			withCredentials: true,
		});

		if (response.status === 200 && response.data.logoutUrl) {
			dispatch(logout());
			window.location.href = response.data.logoutUrl;
		} else {
			console.error("Logout failed");
		}
	} catch (error) {
		console.error("Error during logout:", error);
	}
};

export const exchangeCodeForTokens = async (code: string): Promise<void> => {
	try {
		const response = await axios.get(AUTH_ENDPOINTS.AUTH_TOKENS,
			{
				params: { code },
				withCredentials: true,
			}
		);

		if (response.status !== 200) {
			throw new Error("Failed to exchange code for tokens");
		}
	} catch (error) {
		console.error("Error exchanging code for tokens:", error);
	}
};