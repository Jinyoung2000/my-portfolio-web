import axios from 'axios'

const { VITE_API_HOST } = import.meta.env

console.log(VITE_API_HOST)

export const http = axios.create({
	baseURL: VITE_API_HOST,
	withCredentials: true,
})
