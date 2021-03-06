import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
    let { _id } = useParams();
    const [oneBlog, setOneBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5055/blogs/${_id}`)
            .then(res => res.json())
            .then(data => setOneBlog(data))
    }, [_id])

    const { title, content, imageURL } = oneBlog;
    return (
        <div style={{ backgroundColor: '#ccd6db' }}>
            <img style={{ width: '500px', height: '300px', marginTop: '10%', marginLeft: '35%' }} src={imageURL} alt="" />
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <p>{content}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur dolores earum sint aperiam quisquam corrupti quidem corporis, ex eum? Non ipsum voluptatem expedita eius iste, nostrum aut ratione porro.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default BlogDetails;