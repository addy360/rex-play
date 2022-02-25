import { Button } from '@mantine/core'
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks"
import { fetchUsers, fetchAllUsers, clearUsers } from '../store/users'

const FetchAction = () => {

    const user = useAppSelector((state) => state.user)
    const a = useAppDispatch()

    const handleClick = () => {
        a(fetchAllUsers())
        a(fetchUsers())
    }



    return (
        <>
            <Button
                disabled={user.loading}
                onClick={handleClick}
                styles={(theme) => ({
                    root: {
                        backgroundColor: '#00acee',
                        border: 0,
                        height: 42,
                        paddingLeft: 20,
                        paddingRight: 20,

                        '&:hover': {
                            backgroundColor: theme.fn.darken('#00acee', 0.05),
                        },
                    },


                })}
            >
                {user.loading ? "fetching ..." : "fetch users"}
            </Button>

            <Button variant='outline' onClick={() => a(clearUsers())} >clear users</Button>
        </>
    )
}

export default FetchAction