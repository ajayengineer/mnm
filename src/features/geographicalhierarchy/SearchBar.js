import React, { useState } from 'react'

const posts = [
    {
        url: '',
        tags: ['react', 'blog'],
        title: 'How to create a react search bar',
    },
    {
        url: '',
        tags: ['node', 'express'],
        title: 'How to mock api data in Node',
    },
    {
        url: '',
        tags: ['node', 'express'],
        title: 'My Name Is Dev',
    },
    {
        url: '',
        tags: ['node', 'express'],
        title: 'My Company is Wipro',
    },
    // more data here
]

function SearchBar() {
    const [AttributeResult, setAttributeResult] = useState({
        query: '',
        list: []
    })

    const handleChange = (e) => {
        const results = posts.filter(post => {
            if (e.target.value === "") return posts
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setAttributeResult({
            query: e.target.value,
            list: results
        })
    }
    return (
        <div>
            <h1>Search Section</h1>
            <form>
                <input onChange={handleChange} value={AttributeResult.query} type="search" />
            </form>
            <ul>
                {(AttributeResult.query === '' ? "" : AttributeResult.list.map(post => {
                    return <li key={post.title}>{post.title}</li>
                }))}
            </ul>
        </div>
    )
}

export default SearchBar