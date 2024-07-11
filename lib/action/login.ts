import axios from 'axios'
type User = {
    username: string,
    password: string
}
export const login = async (values: User) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LOGIN!, values);
    return response.data.token
}