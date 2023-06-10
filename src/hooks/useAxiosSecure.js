import { useContext, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../AuthProvider/AuthProvider"

const axiosSecure = axios.create({
    baseURL: 'https://summry-camp-school-server.vercel.app'
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Perform the logout action asynchronously and redirect to the login page
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error);
            }

        )

    }, [logOut, navigate])
    return [axiosSecure]
}
export default useAxiosSecure