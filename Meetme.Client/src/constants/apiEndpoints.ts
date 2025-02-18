const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;

export const AUTH_ENDPOINTS = {
	AUTH_STATUS: `${AUTH_BASE_URL}/auth/status`,
	AUTH_LOGIN: `${AUTH_BASE_URL}/auth/login`,
	AUTH_LOGOUT: `${AUTH_BASE_URL}/auth/logout`,
	AUTH_TOKENS: `${AUTH_BASE_URL}/auth/callback`,
};
