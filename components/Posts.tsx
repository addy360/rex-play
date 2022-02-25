import React from 'react'
import { Button, Table } from "@mantine/core"
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { clearPosts, fetchAllPosts } from '../store/posts'

const Posts = () => {
    const post = useAppSelector((state) => state.post)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchAllPosts())
    }


    return (<>
        <Button disabled={post.loading} onClick={handleClick} variant='gradient' gradient={{ from: "red", to: "orange" }} >{post.loading ? "fetching posts ..." : "fetch posts"}</Button>

        <Button onClick={() => dispatch(clearPosts())} >clear posts</Button>
        <Table highlightOnHover striped captionSide="bottom">
            <caption>posts from jason placeholder</caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {post.posts.map(p => {
                    return (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.userId}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>

                        </tr>
                    )
                })}
            </tbody>

        </Table>
    </>
    )
}

export default Posts