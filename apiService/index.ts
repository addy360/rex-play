import { create } from "apisauce";


const api = create({ baseURL: "https://jsonplaceholder.typicode.com" })



export const getUsers = () => api.get("/users")

export const getPosts = () => api.get("/posts")