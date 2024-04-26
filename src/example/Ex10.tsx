import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => start + index)
}

const Posts = ({ posts, loading }) => {

    const count = useRef(0);
    count.current++;

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
        <div>{count.current}</div>
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>{post.id} : {post.title}</li>
            ))}
        </ul>
        </>
    )
}

const Pagination = ({ pageSize, totalPosts, paginate }) => {

    const pageNumbers = range(1, Math.ceil(totalPosts / pageSize));

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(x => (
                    <li key={x} className='page-item'>
                        <a onClick={() => paginate(x)} href='!#' className='page-link'>{x}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Ex10 = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const pagenate = (p: number) => {
        setCurrentPage(p);
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data)
            setLoading(false);
        }

        fetchData();
    }, [])

    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className='container mt-5 mb-5'>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination pageSize={pageSize} totalPosts={posts.length} paginate={pagenate} />
        </div>
    )
}

export default Ex10