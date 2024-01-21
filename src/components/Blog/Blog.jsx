/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'
const Blog = () => {
    const pictures = useLoaderData();
    return (
        <div>
            <h4>Some Memories Can Never Be Shared With Anyone, Because They're Unexplainable.</h4>
            <div className='PictureContainer'>
                {
                    pictures.map(picture =><SingleBlog key={picture.id} picture={picture}></SingleBlog> )
                }
            </div>
        </div>
    );
};

export default Blog;