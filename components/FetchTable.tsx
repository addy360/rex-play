import { Table } from '@mantine/core';
import { useAppSelector } from '../hooks/storeHooks';




const FetchTable = () => {
    const user = useAppSelector((state) => state.user)
    return (
        <Table highlightOnHover striped captionSide="bottom">
            <caption>Some elements from periodic table</caption>
            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
                {user.loading && "loading..."}
                {user.users.map((u, i) => {
                    return <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.username}</td>
                        <td>{u.phone}</td>
                        <td>{u.website}</td>

                    </tr>
                })}

            </tbody>

        </Table>
    )
}

export default FetchTable