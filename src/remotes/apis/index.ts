import axios from 'axios'

const { VITE_API_HOST, MODE } = import.meta.env

const isProd = MODE === 'production'

export const http = axios.create({
	baseURL: isProd ? `${window.location.origin}/api` : VITE_API_HOST,
	withCredentials: true,
})
