import axios from 'axios'
type User = {
    username: string,
    password: string,
    fullname: string,
    email: string,
    birthdate: string
}
export const register = async (values: User) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_REGISTER!, values);
    return response
}