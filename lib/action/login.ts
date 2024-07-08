import axios from 'axios'
export const login = async (values: { username: string, password: string }) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LOGIN!, values);
    return response.data.token
}