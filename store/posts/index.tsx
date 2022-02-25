import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../apiService";
import { Post } from "../../models/Post";


const initialState = {
    posts: [] as Post[],
    loading: false as boolean
}

const fetchAllPosts = createAsyncThunk("posts/fetchAll", async () => {
    const res = await getPosts()
    return res.data as Post[]
})

const post = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.posts = []
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.loading = true as boolean
        }).addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.loading = false
        })
    }
})

export default post.reducer

const { setLoading, clearPosts } = post.actions

export { setLoading, fetchAllPosts, clearPosts } 