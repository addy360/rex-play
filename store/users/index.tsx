import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { getUsers } from "../../apiService/index"

const initialState = {
    users: [] as User[],
    loading: false as boolean
}

const fetchAllUsers = createAsyncThunk("users/get", async (d) => {
    console.log('d :>> ', d);

    const res = await getUsers()

    return res.data

})

const user = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        fetchUsers: (state) => {
            console.log('state :>> ', state);
        },
        clearUsers: (state) => {
            state.users = []
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.users = action.payload as User[]
            state.loading = false
        }).addCase(fetchAllUsers.pending, (state, action) => {
            state.loading = true
        })
    }
})

export default user.reducer

const { fetchUsers, setLoading, clearUsers } = user.actions

export {
    fetchAllUsers, fetchUsers, setLoading, clearUsers
}